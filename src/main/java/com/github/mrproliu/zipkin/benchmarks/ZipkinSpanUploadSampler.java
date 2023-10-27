package com.github.mrproliu.zipkin.benchmarks;

import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;
import org.apache.jmeter.config.Arguments;
import zipkin2.codec.SpanBytesEncoder;

import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class ZipkinSpanUploadSampler extends AbstractJavaSamplerClient {

    @Override
    public Arguments getDefaultParameters() {
        Arguments defaultParameters = new Arguments();
        defaultParameters.addArgument("REMOTE_HOST", "0.0.0.0");
        defaultParameters.addArgument("REMOTE_PORT", "9411");
        return defaultParameters;
    }

    @Override
    public void setupTest(JavaSamplerContext context) {
    }

    public SampleResult runTest(JavaSamplerContext context) {
        SampleResult result = new SampleResult();
        result.sampleStart();

        boolean success = true;
        int responseCode = 0;
        try {
            String host = context.getParameter("REMOTE_HOST");
            int port = context.getIntParameter("REMOTE_PORT");

            final byte[] spansBuffer = SpanBytesEncoder.JSON_V2.encodeList(TestObjects.newTrace(""));
            URL url = new URL("http://"+host+":" + port + "/api/v2/spans");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setDoOutput(true);
            try (OutputStream os = connection.getOutputStream()) {
                os.write(spansBuffer, 0, spansBuffer.length);
            }

            responseCode = connection.getResponseCode();
        } catch (IOException e) {
            e.printStackTrace();
            success = false;
        }


        result.sampleEnd();
        result.setSuccessful(success);  // Assume the request was successful
        result.setResponseCode(String.valueOf(responseCode));
        result.setResponseMessage("OK");
        return result;
    }

    @Override
    public void teardownTest(JavaSamplerContext context) {
    }
}
