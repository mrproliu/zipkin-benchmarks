/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 8656.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 0.0], [4.6, 0.0], [4.7, 0.0], [4.8, 0.0], [4.9, 0.0], [5.0, 0.0], [5.1, 0.0], [5.2, 0.0], [5.3, 0.0], [5.4, 0.0], [5.5, 0.0], [5.6, 0.0], [5.7, 0.0], [5.8, 0.0], [5.9, 0.0], [6.0, 0.0], [6.1, 0.0], [6.2, 0.0], [6.3, 0.0], [6.4, 0.0], [6.5, 0.0], [6.6, 0.0], [6.7, 0.0], [6.8, 0.0], [6.9, 0.0], [7.0, 0.0], [7.1, 0.0], [7.2, 0.0], [7.3, 0.0], [7.4, 0.0], [7.5, 0.0], [7.6, 0.0], [7.7, 0.0], [7.8, 0.0], [7.9, 1.0], [8.0, 1.0], [8.1, 1.0], [8.2, 1.0], [8.3, 1.0], [8.4, 1.0], [8.5, 1.0], [8.6, 1.0], [8.7, 1.0], [8.8, 1.0], [8.9, 1.0], [9.0, 1.0], [9.1, 1.0], [9.2, 1.0], [9.3, 1.0], [9.4, 1.0], [9.5, 1.0], [9.6, 1.0], [9.7, 1.0], [9.8, 1.0], [9.9, 1.0], [10.0, 1.0], [10.1, 1.0], [10.2, 1.0], [10.3, 1.0], [10.4, 1.0], [10.5, 1.0], [10.6, 1.0], [10.7, 1.0], [10.8, 1.0], [10.9, 1.0], [11.0, 1.0], [11.1, 1.0], [11.2, 1.0], [11.3, 1.0], [11.4, 1.0], [11.5, 1.0], [11.6, 1.0], [11.7, 1.0], [11.8, 1.0], [11.9, 1.0], [12.0, 1.0], [12.1, 1.0], [12.2, 1.0], [12.3, 1.0], [12.4, 1.0], [12.5, 1.0], [12.6, 1.0], [12.7, 1.0], [12.8, 1.0], [12.9, 1.0], [13.0, 1.0], [13.1, 1.0], [13.2, 1.0], [13.3, 1.0], [13.4, 1.0], [13.5, 1.0], [13.6, 1.0], [13.7, 1.0], [13.8, 1.0], [13.9, 1.0], [14.0, 1.0], [14.1, 1.0], [14.2, 1.0], [14.3, 1.0], [14.4, 1.0], [14.5, 1.0], [14.6, 1.0], [14.7, 1.0], [14.8, 1.0], [14.9, 1.0], [15.0, 1.0], [15.1, 1.0], [15.2, 1.0], [15.3, 1.0], [15.4, 1.0], [15.5, 1.0], [15.6, 1.0], [15.7, 1.0], [15.8, 1.0], [15.9, 1.0], [16.0, 1.0], [16.1, 1.0], [16.2, 1.0], [16.3, 1.0], [16.4, 1.0], [16.5, 1.0], [16.6, 1.0], [16.7, 1.0], [16.8, 1.0], [16.9, 1.0], [17.0, 1.0], [17.1, 1.0], [17.2, 1.0], [17.3, 1.0], [17.4, 1.0], [17.5, 1.0], [17.6, 1.0], [17.7, 1.0], [17.8, 1.0], [17.9, 1.0], [18.0, 1.0], [18.1, 1.0], [18.2, 1.0], [18.3, 1.0], [18.4, 1.0], [18.5, 1.0], [18.6, 1.0], [18.7, 1.0], [18.8, 1.0], [18.9, 1.0], [19.0, 1.0], [19.1, 1.0], [19.2, 1.0], [19.3, 1.0], [19.4, 1.0], [19.5, 1.0], [19.6, 1.0], [19.7, 1.0], [19.8, 1.0], [19.9, 1.0], [20.0, 1.0], [20.1, 1.0], [20.2, 1.0], [20.3, 1.0], [20.4, 1.0], [20.5, 1.0], [20.6, 1.0], [20.7, 1.0], [20.8, 1.0], [20.9, 1.0], [21.0, 1.0], [21.1, 1.0], [21.2, 1.0], [21.3, 1.0], [21.4, 1.0], [21.5, 1.0], [21.6, 1.0], [21.7, 1.0], [21.8, 1.0], [21.9, 1.0], [22.0, 1.0], [22.1, 1.0], [22.2, 1.0], [22.3, 1.0], [22.4, 1.0], [22.5, 1.0], [22.6, 1.0], [22.7, 1.0], [22.8, 1.0], [22.9, 1.0], [23.0, 1.0], [23.1, 1.0], [23.2, 1.0], [23.3, 1.0], [23.4, 1.0], [23.5, 1.0], [23.6, 1.0], [23.7, 1.0], [23.8, 1.0], [23.9, 1.0], [24.0, 1.0], [24.1, 1.0], [24.2, 1.0], [24.3, 1.0], [24.4, 1.0], [24.5, 1.0], [24.6, 1.0], [24.7, 1.0], [24.8, 1.0], [24.9, 1.0], [25.0, 1.0], [25.1, 1.0], [25.2, 1.0], [25.3, 1.0], [25.4, 1.0], [25.5, 1.0], [25.6, 1.0], [25.7, 1.0], [25.8, 1.0], [25.9, 1.0], [26.0, 1.0], [26.1, 1.0], [26.2, 1.0], [26.3, 1.0], [26.4, 1.0], [26.5, 1.0], [26.6, 1.0], [26.7, 1.0], [26.8, 1.0], [26.9, 1.0], [27.0, 1.0], [27.1, 1.0], [27.2, 1.0], [27.3, 1.0], [27.4, 1.0], [27.5, 1.0], [27.6, 1.0], [27.7, 1.0], [27.8, 1.0], [27.9, 1.0], [28.0, 1.0], [28.1, 1.0], [28.2, 1.0], [28.3, 1.0], [28.4, 1.0], [28.5, 1.0], [28.6, 1.0], [28.7, 1.0], [28.8, 1.0], [28.9, 1.0], [29.0, 1.0], [29.1, 1.0], [29.2, 1.0], [29.3, 1.0], [29.4, 1.0], [29.5, 1.0], [29.6, 1.0], [29.7, 1.0], [29.8, 1.0], [29.9, 1.0], [30.0, 1.0], [30.1, 1.0], [30.2, 1.0], [30.3, 1.0], [30.4, 1.0], [30.5, 1.0], [30.6, 1.0], [30.7, 1.0], [30.8, 1.0], [30.9, 1.0], [31.0, 1.0], [31.1, 1.0], [31.2, 1.0], [31.3, 1.0], [31.4, 1.0], [31.5, 1.0], [31.6, 1.0], [31.7, 1.0], [31.8, 1.0], [31.9, 1.0], [32.0, 1.0], [32.1, 1.0], [32.2, 1.0], [32.3, 1.0], [32.4, 1.0], [32.5, 1.0], [32.6, 1.0], [32.7, 1.0], [32.8, 1.0], [32.9, 1.0], [33.0, 1.0], [33.1, 1.0], [33.2, 1.0], [33.3, 1.0], [33.4, 1.0], [33.5, 1.0], [33.6, 1.0], [33.7, 1.0], [33.8, 1.0], [33.9, 1.0], [34.0, 1.0], [34.1, 1.0], [34.2, 1.0], [34.3, 1.0], [34.4, 1.0], [34.5, 1.0], [34.6, 1.0], [34.7, 1.0], [34.8, 1.0], [34.9, 1.0], [35.0, 1.0], [35.1, 1.0], [35.2, 1.0], [35.3, 1.0], [35.4, 1.0], [35.5, 1.0], [35.6, 1.0], [35.7, 1.0], [35.8, 1.0], [35.9, 1.0], [36.0, 1.0], [36.1, 1.0], [36.2, 1.0], [36.3, 1.0], [36.4, 1.0], [36.5, 1.0], [36.6, 1.0], [36.7, 1.0], [36.8, 1.0], [36.9, 1.0], [37.0, 1.0], [37.1, 1.0], [37.2, 1.0], [37.3, 1.0], [37.4, 1.0], [37.5, 1.0], [37.6, 1.0], [37.7, 1.0], [37.8, 1.0], [37.9, 1.0], [38.0, 1.0], [38.1, 1.0], [38.2, 1.0], [38.3, 1.0], [38.4, 1.0], [38.5, 1.0], [38.6, 1.0], [38.7, 1.0], [38.8, 1.0], [38.9, 1.0], [39.0, 1.0], [39.1, 1.0], [39.2, 1.0], [39.3, 1.0], [39.4, 1.0], [39.5, 1.0], [39.6, 1.0], [39.7, 1.0], [39.8, 1.0], [39.9, 1.0], [40.0, 1.0], [40.1, 1.0], [40.2, 1.0], [40.3, 1.0], [40.4, 1.0], [40.5, 1.0], [40.6, 1.0], [40.7, 1.0], [40.8, 1.0], [40.9, 1.0], [41.0, 1.0], [41.1, 1.0], [41.2, 1.0], [41.3, 1.0], [41.4, 1.0], [41.5, 1.0], [41.6, 1.0], [41.7, 1.0], [41.8, 1.0], [41.9, 1.0], [42.0, 1.0], [42.1, 1.0], [42.2, 1.0], [42.3, 1.0], [42.4, 1.0], [42.5, 1.0], [42.6, 1.0], [42.7, 1.0], [42.8, 1.0], [42.9, 1.0], [43.0, 1.0], [43.1, 1.0], [43.2, 1.0], [43.3, 1.0], [43.4, 1.0], [43.5, 1.0], [43.6, 1.0], [43.7, 1.0], [43.8, 1.0], [43.9, 1.0], [44.0, 1.0], [44.1, 1.0], [44.2, 1.0], [44.3, 1.0], [44.4, 1.0], [44.5, 1.0], [44.6, 1.0], [44.7, 1.0], [44.8, 1.0], [44.9, 1.0], [45.0, 1.0], [45.1, 1.0], [45.2, 1.0], [45.3, 1.0], [45.4, 1.0], [45.5, 1.0], [45.6, 1.0], [45.7, 1.0], [45.8, 1.0], [45.9, 1.0], [46.0, 1.0], [46.1, 1.0], [46.2, 1.0], [46.3, 1.0], [46.4, 1.0], [46.5, 1.0], [46.6, 1.0], [46.7, 1.0], [46.8, 1.0], [46.9, 1.0], [47.0, 1.0], [47.1, 1.0], [47.2, 1.0], [47.3, 1.0], [47.4, 1.0], [47.5, 1.0], [47.6, 1.0], [47.7, 1.0], [47.8, 1.0], [47.9, 1.0], [48.0, 1.0], [48.1, 1.0], [48.2, 1.0], [48.3, 1.0], [48.4, 1.0], [48.5, 1.0], [48.6, 1.0], [48.7, 1.0], [48.8, 1.0], [48.9, 1.0], [49.0, 1.0], [49.1, 1.0], [49.2, 1.0], [49.3, 1.0], [49.4, 1.0], [49.5, 1.0], [49.6, 1.0], [49.7, 1.0], [49.8, 1.0], [49.9, 1.0], [50.0, 1.0], [50.1, 1.0], [50.2, 1.0], [50.3, 1.0], [50.4, 1.0], [50.5, 1.0], [50.6, 1.0], [50.7, 1.0], [50.8, 1.0], [50.9, 1.0], [51.0, 1.0], [51.1, 1.0], [51.2, 1.0], [51.3, 1.0], [51.4, 1.0], [51.5, 1.0], [51.6, 1.0], [51.7, 1.0], [51.8, 1.0], [51.9, 1.0], [52.0, 1.0], [52.1, 1.0], [52.2, 1.0], [52.3, 1.0], [52.4, 1.0], [52.5, 1.0], [52.6, 1.0], [52.7, 1.0], [52.8, 1.0], [52.9, 1.0], [53.0, 1.0], [53.1, 1.0], [53.2, 1.0], [53.3, 1.0], [53.4, 1.0], [53.5, 1.0], [53.6, 1.0], [53.7, 1.0], [53.8, 1.0], [53.9, 1.0], [54.0, 1.0], [54.1, 1.0], [54.2, 1.0], [54.3, 1.0], [54.4, 1.0], [54.5, 1.0], [54.6, 1.0], [54.7, 1.0], [54.8, 1.0], [54.9, 1.0], [55.0, 1.0], [55.1, 1.0], [55.2, 1.0], [55.3, 1.0], [55.4, 1.0], [55.5, 1.0], [55.6, 1.0], [55.7, 1.0], [55.8, 1.0], [55.9, 1.0], [56.0, 1.0], [56.1, 1.0], [56.2, 1.0], [56.3, 1.0], [56.4, 1.0], [56.5, 1.0], [56.6, 1.0], [56.7, 1.0], [56.8, 1.0], [56.9, 1.0], [57.0, 1.0], [57.1, 1.0], [57.2, 1.0], [57.3, 1.0], [57.4, 1.0], [57.5, 1.0], [57.6, 1.0], [57.7, 1.0], [57.8, 1.0], [57.9, 1.0], [58.0, 1.0], [58.1, 1.0], [58.2, 1.0], [58.3, 1.0], [58.4, 1.0], [58.5, 1.0], [58.6, 1.0], [58.7, 1.0], [58.8, 1.0], [58.9, 1.0], [59.0, 1.0], [59.1, 1.0], [59.2, 1.0], [59.3, 1.0], [59.4, 1.0], [59.5, 1.0], [59.6, 1.0], [59.7, 1.0], [59.8, 1.0], [59.9, 1.0], [60.0, 1.0], [60.1, 1.0], [60.2, 1.0], [60.3, 1.0], [60.4, 1.0], [60.5, 1.0], [60.6, 1.0], [60.7, 1.0], [60.8, 1.0], [60.9, 1.0], [61.0, 1.0], [61.1, 1.0], [61.2, 1.0], [61.3, 1.0], [61.4, 1.0], [61.5, 1.0], [61.6, 1.0], [61.7, 1.0], [61.8, 1.0], [61.9, 1.0], [62.0, 1.0], [62.1, 1.0], [62.2, 1.0], [62.3, 1.0], [62.4, 1.0], [62.5, 1.0], [62.6, 1.0], [62.7, 1.0], [62.8, 1.0], [62.9, 1.0], [63.0, 1.0], [63.1, 1.0], [63.2, 1.0], [63.3, 1.0], [63.4, 1.0], [63.5, 1.0], [63.6, 1.0], [63.7, 1.0], [63.8, 1.0], [63.9, 1.0], [64.0, 1.0], [64.1, 1.0], [64.2, 1.0], [64.3, 1.0], [64.4, 1.0], [64.5, 1.0], [64.6, 1.0], [64.7, 1.0], [64.8, 1.0], [64.9, 1.0], [65.0, 1.0], [65.1, 1.0], [65.2, 1.0], [65.3, 1.0], [65.4, 1.0], [65.5, 1.0], [65.6, 1.0], [65.7, 1.0], [65.8, 1.0], [65.9, 1.0], [66.0, 1.0], [66.1, 1.0], [66.2, 1.0], [66.3, 1.0], [66.4, 1.0], [66.5, 1.0], [66.6, 1.0], [66.7, 1.0], [66.8, 1.0], [66.9, 1.0], [67.0, 2.0], [67.1, 2.0], [67.2, 2.0], [67.3, 2.0], [67.4, 2.0], [67.5, 2.0], [67.6, 2.0], [67.7, 2.0], [67.8, 2.0], [67.9, 2.0], [68.0, 2.0], [68.1, 2.0], [68.2, 2.0], [68.3, 2.0], [68.4, 2.0], [68.5, 2.0], [68.6, 2.0], [68.7, 2.0], [68.8, 2.0], [68.9, 2.0], [69.0, 2.0], [69.1, 2.0], [69.2, 2.0], [69.3, 2.0], [69.4, 2.0], [69.5, 2.0], [69.6, 2.0], [69.7, 2.0], [69.8, 2.0], [69.9, 2.0], [70.0, 2.0], [70.1, 2.0], [70.2, 2.0], [70.3, 2.0], [70.4, 2.0], [70.5, 2.0], [70.6, 2.0], [70.7, 2.0], [70.8, 2.0], [70.9, 2.0], [71.0, 2.0], [71.1, 2.0], [71.2, 2.0], [71.3, 2.0], [71.4, 2.0], [71.5, 2.0], [71.6, 2.0], [71.7, 2.0], [71.8, 2.0], [71.9, 2.0], [72.0, 2.0], [72.1, 2.0], [72.2, 2.0], [72.3, 2.0], [72.4, 2.0], [72.5, 2.0], [72.6, 2.0], [72.7, 2.0], [72.8, 2.0], [72.9, 2.0], [73.0, 2.0], [73.1, 2.0], [73.2, 2.0], [73.3, 2.0], [73.4, 2.0], [73.5, 2.0], [73.6, 2.0], [73.7, 2.0], [73.8, 2.0], [73.9, 2.0], [74.0, 2.0], [74.1, 2.0], [74.2, 2.0], [74.3, 2.0], [74.4, 2.0], [74.5, 2.0], [74.6, 2.0], [74.7, 2.0], [74.8, 2.0], [74.9, 2.0], [75.0, 2.0], [75.1, 2.0], [75.2, 2.0], [75.3, 2.0], [75.4, 2.0], [75.5, 2.0], [75.6, 2.0], [75.7, 2.0], [75.8, 2.0], [75.9, 2.0], [76.0, 2.0], [76.1, 2.0], [76.2, 2.0], [76.3, 2.0], [76.4, 2.0], [76.5, 2.0], [76.6, 2.0], [76.7, 2.0], [76.8, 2.0], [76.9, 2.0], [77.0, 2.0], [77.1, 2.0], [77.2, 2.0], [77.3, 2.0], [77.4, 2.0], [77.5, 2.0], [77.6, 2.0], [77.7, 2.0], [77.8, 2.0], [77.9, 2.0], [78.0, 2.0], [78.1, 2.0], [78.2, 2.0], [78.3, 2.0], [78.4, 2.0], [78.5, 2.0], [78.6, 2.0], [78.7, 2.0], [78.8, 2.0], [78.9, 2.0], [79.0, 2.0], [79.1, 2.0], [79.2, 2.0], [79.3, 2.0], [79.4, 2.0], [79.5, 2.0], [79.6, 2.0], [79.7, 2.0], [79.8, 2.0], [79.9, 2.0], [80.0, 2.0], [80.1, 2.0], [80.2, 2.0], [80.3, 2.0], [80.4, 2.0], [80.5, 2.0], [80.6, 2.0], [80.7, 2.0], [80.8, 2.0], [80.9, 2.0], [81.0, 2.0], [81.1, 2.0], [81.2, 2.0], [81.3, 2.0], [81.4, 2.0], [81.5, 2.0], [81.6, 2.0], [81.7, 2.0], [81.8, 2.0], [81.9, 2.0], [82.0, 2.0], [82.1, 2.0], [82.2, 2.0], [82.3, 2.0], [82.4, 2.0], [82.5, 2.0], [82.6, 2.0], [82.7, 2.0], [82.8, 2.0], [82.9, 2.0], [83.0, 2.0], [83.1, 2.0], [83.2, 2.0], [83.3, 2.0], [83.4, 2.0], [83.5, 2.0], [83.6, 2.0], [83.7, 2.0], [83.8, 2.0], [83.9, 2.0], [84.0, 2.0], [84.1, 2.0], [84.2, 2.0], [84.3, 2.0], [84.4, 2.0], [84.5, 2.0], [84.6, 2.0], [84.7, 2.0], [84.8, 2.0], [84.9, 2.0], [85.0, 2.0], [85.1, 2.0], [85.2, 2.0], [85.3, 2.0], [85.4, 2.0], [85.5, 2.0], [85.6, 2.0], [85.7, 2.0], [85.8, 2.0], [85.9, 2.0], [86.0, 2.0], [86.1, 2.0], [86.2, 2.0], [86.3, 2.0], [86.4, 2.0], [86.5, 2.0], [86.6, 2.0], [86.7, 2.0], [86.8, 2.0], [86.9, 2.0], [87.0, 2.0], [87.1, 2.0], [87.2, 2.0], [87.3, 2.0], [87.4, 2.0], [87.5, 2.0], [87.6, 2.0], [87.7, 2.0], [87.8, 2.0], [87.9, 2.0], [88.0, 2.0], [88.1, 2.0], [88.2, 2.0], [88.3, 2.0], [88.4, 2.0], [88.5, 2.0], [88.6, 2.0], [88.7, 2.0], [88.8, 2.0], [88.9, 2.0], [89.0, 2.0], [89.1, 2.0], [89.2, 2.0], [89.3, 2.0], [89.4, 2.0], [89.5, 2.0], [89.6, 2.0], [89.7, 2.0], [89.8, 2.0], [89.9, 2.0], [90.0, 2.0], [90.1, 2.0], [90.2, 2.0], [90.3, 2.0], [90.4, 2.0], [90.5, 2.0], [90.6, 2.0], [90.7, 2.0], [90.8, 2.0], [90.9, 2.0], [91.0, 2.0], [91.1, 2.0], [91.2, 2.0], [91.3, 2.0], [91.4, 2.0], [91.5, 2.0], [91.6, 2.0], [91.7, 2.0], [91.8, 2.0], [91.9, 2.0], [92.0, 2.0], [92.1, 2.0], [92.2, 2.0], [92.3, 2.0], [92.4, 2.0], [92.5, 2.0], [92.6, 2.0], [92.7, 2.0], [92.8, 2.0], [92.9, 2.0], [93.0, 2.0], [93.1, 2.0], [93.2, 3.0], [93.3, 3.0], [93.4, 3.0], [93.5, 3.0], [93.6, 3.0], [93.7, 3.0], [93.8, 3.0], [93.9, 3.0], [94.0, 3.0], [94.1, 3.0], [94.2, 3.0], [94.3, 3.0], [94.4, 3.0], [94.5, 3.0], [94.6, 3.0], [94.7, 3.0], [94.8, 3.0], [94.9, 3.0], [95.0, 3.0], [95.1, 3.0], [95.2, 3.0], [95.3, 3.0], [95.4, 3.0], [95.5, 3.0], [95.6, 3.0], [95.7, 3.0], [95.8, 3.0], [95.9, 3.0], [96.0, 3.0], [96.1, 3.0], [96.2, 3.0], [96.3, 3.0], [96.4, 3.0], [96.5, 3.0], [96.6, 3.0], [96.7, 3.0], [96.8, 4.0], [96.9, 4.0], [97.0, 4.0], [97.1, 4.0], [97.2, 4.0], [97.3, 4.0], [97.4, 4.0], [97.5, 4.0], [97.6, 5.0], [97.7, 5.0], [97.8, 5.0], [97.9, 5.0], [98.0, 6.0], [98.1, 6.0], [98.2, 6.0], [98.3, 7.0], [98.4, 7.0], [98.5, 8.0], [98.6, 8.0], [98.7, 9.0], [98.8, 10.0], [98.9, 12.0], [99.0, 13.0], [99.1, 15.0], [99.2, 17.0], [99.3, 20.0], [99.4, 25.0], [99.5, 34.0], [99.6, 63.0], [99.7, 157.0], [99.8, 1850.0], [99.9, 3415.0]], "isOverall": false, "label": "Java Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1343354.0, "series": [{"data": [[0.0, 1343354.0], [700.0, 66.0], [800.0, 53.0], [1100.0, 54.0], [1200.0, 24.0], [1300.0, 69.0], [1400.0, 23.0], [1500.0, 32.0], [1600.0, 232.0], [1700.0, 148.0], [1800.0, 240.0], [1900.0, 58.0], [2000.0, 61.0], [2100.0, 55.0], [2200.0, 95.0], [2300.0, 92.0], [2400.0, 78.0], [2500.0, 53.0], [2600.0, 14.0], [2800.0, 81.0], [2700.0, 67.0], [2900.0, 33.0], [3000.0, 163.0], [3100.0, 228.0], [3300.0, 34.0], [3200.0, 50.0], [3400.0, 166.0], [3500.0, 7.0], [3600.0, 133.0], [3700.0, 63.0], [3800.0, 85.0], [3900.0, 75.0], [4000.0, 79.0], [4300.0, 91.0], [4200.0, 84.0], [4100.0, 24.0], [4400.0, 29.0], [4500.0, 62.0], [4600.0, 16.0], [4700.0, 52.0], [5000.0, 32.0], [5100.0, 1.0], [5200.0, 27.0], [5300.0, 40.0], [5800.0, 40.0], [5700.0, 11.0], [5900.0, 19.0], [6000.0, 24.0], [6100.0, 6.0], [6200.0, 50.0], [6600.0, 15.0], [6700.0, 35.0], [7900.0, 1.0], [8600.0, 53.0], [8500.0, 25.0], [8200.0, 10.0], [8300.0, 11.0], [100.0, 1225.0], [200.0, 207.0], [300.0, 39.0], [400.0, 52.0], [500.0, 1.0]], "isOverall": false, "label": "Java Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 290.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1344877.0, "series": [{"data": [[0.0, 1344877.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 290.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3180.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 49.08844108592222, "minX": 1.69932672E12, "maxY": 50.0, "series": [{"data": [[1.69932708E12, 50.0], [1.69932678E12, 50.0], [1.69932672E12, 49.888033692804576], [1.69932738E12, 50.0], [1.69932684E12, 50.0], [1.6993275E12, 50.0], [1.69932744E12, 50.0], [1.69932714E12, 50.0], [1.69932756E12, 50.0], [1.69932726E12, 50.0], [1.6993272E12, 50.0], [1.6993269E12, 50.0], [1.69932732E12, 50.0], [1.69932702E12, 50.0], [1.69932696E12, 50.0], [1.69932762E12, 49.08844108592222]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69932762E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 168.8947368421053, "series": [{"data": [[32.0, 10.444444444444445], [33.0, 7.89795918367347], [2.0, 3.0], [34.0, 5.35294117647059], [35.0, 6.1], [36.0, 3.170731707317073], [37.0, 2.3191489361702136], [38.0, 3.088888888888889], [39.0, 3.0], [40.0, 5.8125], [41.0, 5.09090909090909], [42.0, 7.297297297297298], [43.0, 13.115384615384619], [44.0, 3.3389830508474576], [45.0, 2.114754098360656], [46.0, 2.081967213114754], [47.0, 2.654320987654321], [48.0, 1.6794871794871788], [49.0, 2.161764705882352], [3.0, 1.0], [50.0, 9.927992048274136], [4.0, 1.0], [5.0, 1.0], [7.0, 1.0], [8.0, 1.0], [10.0, 1.0], [11.0, 2.0], [12.0, 1.5], [13.0, 1.3333333333333333], [15.0, 1.0], [16.0, 1.0], [1.0, 2.0], [17.0, 1.4444444444444444], [18.0, 1.6], [19.0, 168.8947368421053], [20.0, 3.5], [21.0, 5.391304347826087], [22.0, 23.285714285714285], [23.0, 23.083333333333325], [24.0, 21.500000000000004], [25.0, 17.733333333333338], [26.0, 12.684210526315793], [27.0, 16.380952380952383], [28.0, 15.250000000000004], [29.0, 19.641025641025642], [30.0, 8.512820512820513], [31.0, 6.903225806451614]], "isOverall": false, "label": "Java Request", "isController": false}, {"data": [[49.98798158041153, 9.927410377298596]], "isOverall": false, "label": "Java Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.69932672E12, "maxY": 4.9E-324, "series": [{"data": [[1.69932708E12, 0.0], [1.69932678E12, 0.0], [1.69932672E12, 0.0], [1.69932738E12, 0.0], [1.69932684E12, 0.0], [1.6993275E12, 0.0], [1.69932744E12, 0.0], [1.69932714E12, 0.0], [1.69932756E12, 0.0], [1.69932726E12, 0.0], [1.6993272E12, 0.0], [1.6993269E12, 0.0], [1.69932732E12, 0.0], [1.69932702E12, 0.0], [1.69932696E12, 0.0], [1.69932762E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69932708E12, 0.0], [1.69932678E12, 0.0], [1.69932672E12, 0.0], [1.69932738E12, 0.0], [1.69932684E12, 0.0], [1.6993275E12, 0.0], [1.69932744E12, 0.0], [1.69932714E12, 0.0], [1.69932756E12, 0.0], [1.69932726E12, 0.0], [1.6993272E12, 0.0], [1.6993269E12, 0.0], [1.69932732E12, 0.0], [1.69932702E12, 0.0], [1.69932696E12, 0.0], [1.69932762E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69932762E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1.2440666666666726, "minX": 1.69932672E12, "maxY": 22.598168010864608, "series": [{"data": [[1.69932708E12, 8.233077751859328], [1.69932678E12, 1.2440666666666726], [1.69932672E12, 1.3632700007783323], [1.69932738E12, 19.140053992611374], [1.69932684E12, 1.5624817408578875], [1.6993275E12, 22.598168010864608], [1.69932744E12, 17.2639807759579], [1.69932714E12, 12.65733830100748], [1.69932756E12, 20.852006923998875], [1.69932726E12, 15.537727447931353], [1.6993272E12, 12.94897662589312], [1.6993269E12, 1.5688142391577158], [1.69932732E12, 14.896817178006193], [1.69932702E12, 8.416019748936336], [1.69932696E12, 13.471193339954153], [1.69932762E12, 1.6003358522250255]], "isOverall": false, "label": "Java Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69932762E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.69932672E12, "maxY": 4.9E-324, "series": [{"data": [[1.69932708E12, 0.0], [1.69932678E12, 0.0], [1.69932672E12, 0.0], [1.69932738E12, 0.0], [1.69932684E12, 0.0], [1.6993275E12, 0.0], [1.69932744E12, 0.0], [1.69932714E12, 0.0], [1.69932756E12, 0.0], [1.69932726E12, 0.0], [1.6993272E12, 0.0], [1.6993269E12, 0.0], [1.69932732E12, 0.0], [1.69932702E12, 0.0], [1.69932696E12, 0.0], [1.69932762E12, 0.0]], "isOverall": false, "label": "Java Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69932762E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.69932672E12, "maxY": 4.9E-324, "series": [{"data": [[1.69932708E12, 0.0], [1.69932678E12, 0.0], [1.69932672E12, 0.0], [1.69932738E12, 0.0], [1.69932684E12, 0.0], [1.6993275E12, 0.0], [1.69932744E12, 0.0], [1.69932714E12, 0.0], [1.69932756E12, 0.0], [1.69932726E12, 0.0], [1.6993272E12, 0.0], [1.6993269E12, 0.0], [1.69932732E12, 0.0], [1.69932702E12, 0.0], [1.69932696E12, 0.0], [1.69932762E12, 0.0]], "isOverall": false, "label": "Java Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69932762E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.69932672E12, "maxY": 8656.0, "series": [{"data": [[1.69932708E12, 3156.0], [1.69932678E12, 28.0], [1.69932672E12, 314.0], [1.69932738E12, 5837.0], [1.69932684E12, 56.0], [1.6993275E12, 8656.0], [1.69932744E12, 8619.0], [1.69932714E12, 4406.0], [1.69932756E12, 6260.0], [1.69932726E12, 4393.0], [1.6993272E12, 3940.0], [1.6993269E12, 70.0], [1.69932732E12, 5268.0], [1.69932702E12, 3122.0], [1.69932696E12, 6737.0], [1.69932762E12, 11.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69932708E12, 6.0], [1.69932678E12, 2.0], [1.69932672E12, 2.0], [1.69932738E12, 2.0], [1.69932684E12, 3.0], [1.6993275E12, 2.0], [1.69932744E12, 2.0], [1.69932714E12, 2.0], [1.69932756E12, 3.0], [1.69932726E12, 2.0], [1.6993272E12, 2.0], [1.6993269E12, 2.0], [1.69932732E12, 2.0], [1.69932702E12, 2.0], [1.69932696E12, 2.0], [1.69932762E12, 3.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69932708E12, 31.0], [1.69932678E12, 3.0], [1.69932672E12, 3.0], [1.69932738E12, 4.0], [1.69932684E12, 21.0], [1.6993275E12, 4.0], [1.69932744E12, 6.0], [1.69932714E12, 7.0], [1.69932756E12, 4.0], [1.69932726E12, 8.0], [1.6993272E12, 8.0], [1.6993269E12, 3.0], [1.69932732E12, 3.0], [1.69932702E12, 22.9900000000016], [1.69932696E12, 47.9900000000016], [1.69932762E12, 5.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69932708E12, 11.0], [1.69932678E12, 2.0], [1.69932672E12, 2.0], [1.69932738E12, 2.0], [1.69932684E12, 7.0], [1.6993275E12, 2.0], [1.69932744E12, 2.0], [1.69932714E12, 2.0], [1.69932756E12, 3.0], [1.69932726E12, 3.0], [1.6993272E12, 2.0], [1.6993269E12, 2.0], [1.69932732E12, 2.0], [1.69932702E12, 4.0], [1.69932696E12, 3.0], [1.69932762E12, 4.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69932708E12, 0.0], [1.69932678E12, 0.0], [1.69932672E12, 0.0], [1.69932738E12, 0.0], [1.69932684E12, 0.0], [1.6993275E12, 0.0], [1.69932744E12, 0.0], [1.69932714E12, 0.0], [1.69932756E12, 0.0], [1.69932726E12, 0.0], [1.6993272E12, 0.0], [1.6993269E12, 0.0], [1.69932732E12, 0.0], [1.69932702E12, 0.0], [1.69932696E12, 0.0], [1.69932762E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69932708E12, 2.0], [1.69932678E12, 1.0], [1.69932672E12, 1.0], [1.69932738E12, 1.0], [1.69932684E12, 1.0], [1.6993275E12, 1.0], [1.69932744E12, 1.0], [1.69932714E12, 1.0], [1.69932756E12, 1.0], [1.69932726E12, 1.0], [1.6993272E12, 1.0], [1.6993269E12, 1.0], [1.69932732E12, 1.0], [1.69932702E12, 1.0], [1.69932696E12, 1.0], [1.69932762E12, 1.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69932762E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 2.0, "maxY": 8273.0, "series": [{"data": [[2.0, 1465.5], [17.0, 4073.0], [19.0, 1568.0], [20.0, 5905.0], [22.0, 1274.0], [24.0, 2033.5], [29.0, 8273.0], [32.0, 5089.0], [34.0, 3074.5], [42.0, 1.0], [45.0, 3614.0], [61.0, 1.0], [119.0, 2.0], [138.0, 1.0], [150.0, 3.5], [145.0, 80.0], [152.0, 5.0], [166.0, 1.0], [183.0, 1.0], [186.0, 1.0], [195.0, 1.0], [200.0, 8.0], [201.0, 1.0], [222.0, 1.0], [250.0, 2.0], [262.0, 2.0], [260.0, 1.0], [256.0, 1.0], [285.0, 1.0], [300.0, 1.0], [295.0, 1.0], [332.0, 1.0], [330.0, 1.0], [354.0, 1.0], [380.0, 1.0], [391.0, 1.0], [398.0, 1.0], [401.0, 2.0], [417.0, 1.0], [425.0, 2.0], [470.0, 1.0], [486.0, 1.0], [491.0, 1.0], [541.0, 2.0], [538.0, 1.0], [513.0, 2.0], [561.0, 1.0], [604.0, 1.0], [590.0, 1.0], [596.0, 1.0], [636.0, 1.0], [656.0, 1.0], [650.0, 2.0], [651.0, 3.0], [700.0, 1.0], [698.0, 1.0], [708.0, 1.0], [758.0, 1.0], [740.0, 1.0], [755.0, 1.0], [782.0, 1.0], [809.0, 1.0], [828.0, 1.0], [812.0, 1.0], [822.0, 1.0], [850.0, 1.0], [847.0, 1.0], [835.0, 1.0], [833.0, 1.0], [891.0, 1.0], [876.0, 1.0], [918.0, 1.0], [907.0, 1.0], [1015.0, 1.0], [993.0, 1.0], [1085.0, 2.0], [1037.0, 1.0], [1100.0, 1.0], [1105.0, 1.0], [1157.0, 1.0], [1156.0, 1.0], [1199.0, 1.0], [1185.0, 1.0], [1250.0, 1.0], [1262.0, 1.0], [1261.0, 1.0], [1234.0, 1.0], [1224.0, 1.0], [1293.0, 1.0], [1316.0, 2.0], [1328.0, 2.0], [1336.0, 1.0], [1300.0, 1.0], [1390.0, 1.0], [1352.0, 1.0], [1363.0, 1.0], [1455.0, 1.0], [1456.0, 1.0], [1434.0, 1.0], [1477.0, 1.0], [1527.0, 1.0], [1479.0, 1.0], [1501.0, 1.0], [1585.0, 1.0], [1572.0, 1.0], [1596.0, 1.0], [1550.0, 1.0], [1586.0, 1.0], [1541.0, 1.0], [1575.0, 1.0], [1633.0, 2.0], [1653.0, 1.0], [1608.0, 1.0], [1659.0, 2.0], [1655.0, 1.0], [1645.0, 1.0], [1620.0, 1.0], [1685.0, 1.0], [1666.0, 1.0], [1714.0, 1.0], [1697.0, 1.0], [1698.0, 1.0], [1700.0, 1.0], [1785.0, 1.0], [1760.0, 2.0], [1778.0, 1.0], [1784.0, 1.0], [1786.0, 1.0], [1769.0, 1.0], [1791.0, 1.0], [1751.0, 1.0], [1733.0, 1.0], [1740.0, 1.0], [1738.0, 1.0], [1801.0, 1.0], [1815.0, 1.0], [1811.0, 1.0], [1802.0, 1.0], [1845.0, 1.0], [1800.0, 1.0], [1796.0, 1.0], [1818.0, 1.0], [1809.0, 1.0], [1808.0, 1.0], [1848.0, 1.0], [1834.0, 1.0], [1851.0, 1.0], [1917.0, 1.0], [1909.0, 1.0], [1881.0, 1.0], [1914.0, 1.0], [1919.0, 1.0], [1893.0, 2.0], [1899.0, 1.0], [1900.0, 1.0], [1864.0, 1.0], [1862.0, 2.0], [1976.0, 1.0], [1983.0, 1.0], [1972.0, 2.0], [1969.0, 1.0], [1970.0, 1.0], [1932.0, 1.0], [1935.0, 1.0], [1975.0, 1.0], [1973.0, 1.0], [1982.0, 1.0], [1965.0, 1.0], [1967.0, 1.0], [1962.0, 1.0], [1963.0, 1.0], [1964.0, 1.0], [1928.0, 1.0], [1938.0, 1.0], [1939.0, 1.0], [1948.0, 1.0], [1951.0, 2.0], [1949.0, 1.0], [1950.0, 1.0], [1922.0, 1.0], [1947.0, 2.0], [1946.0, 1.0], [1981.0, 1.0], [1979.0, 2.0], [1978.0, 2.0], [1977.0, 2.0], [2008.0, 1.0], [2003.0, 1.0], [2000.0, 1.0], [2001.0, 1.0], [1999.0, 1.0], [2002.0, 1.0], [1998.0, 1.0], [2004.0, 1.0], [2007.0, 1.0], [2006.0, 1.0], [2010.0, 1.0], [2005.0, 1.0], [1989.0, 1.0], [1992.0, 1.0], [1991.0, 2.0], [1984.0, 2.0], [1986.0, 1.0], [1987.0, 1.0], [1985.0, 1.0], [1988.0, 2.0], [1996.0, 1.0], [1995.0, 1.0], [1997.0, 1.0], [1994.0, 1.0], [2015.0, 1.0], [2029.0, 1.0], [2031.0, 1.0], [2030.0, 1.0], [2040.0, 1.0], [2023.0, 1.0], [2035.0, 1.0], [2050.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2050.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 2.0, "maxY": 4.9E-324, "series": [{"data": [[2.0, 0.0], [17.0, 0.0], [19.0, 0.0], [20.0, 0.0], [22.0, 0.0], [24.0, 0.0], [29.0, 0.0], [32.0, 0.0], [34.0, 0.0], [42.0, 0.0], [45.0, 0.0], [61.0, 0.0], [119.0, 0.0], [138.0, 0.0], [150.0, 0.0], [145.0, 0.0], [152.0, 0.0], [166.0, 0.0], [183.0, 0.0], [186.0, 0.0], [195.0, 0.0], [200.0, 0.0], [201.0, 0.0], [222.0, 0.0], [250.0, 0.0], [262.0, 0.0], [260.0, 0.0], [256.0, 0.0], [285.0, 0.0], [300.0, 0.0], [295.0, 0.0], [332.0, 0.0], [330.0, 0.0], [354.0, 0.0], [380.0, 0.0], [391.0, 0.0], [398.0, 0.0], [401.0, 0.0], [417.0, 0.0], [425.0, 0.0], [470.0, 0.0], [486.0, 0.0], [491.0, 0.0], [541.0, 0.0], [538.0, 0.0], [513.0, 0.0], [561.0, 0.0], [604.0, 0.0], [590.0, 0.0], [596.0, 0.0], [636.0, 0.0], [656.0, 0.0], [650.0, 0.0], [651.0, 0.0], [700.0, 0.0], [698.0, 0.0], [708.0, 0.0], [758.0, 0.0], [740.0, 0.0], [755.0, 0.0], [782.0, 0.0], [809.0, 0.0], [828.0, 0.0], [812.0, 0.0], [822.0, 0.0], [850.0, 0.0], [847.0, 0.0], [835.0, 0.0], [833.0, 0.0], [891.0, 0.0], [876.0, 0.0], [918.0, 0.0], [907.0, 0.0], [1015.0, 0.0], [993.0, 0.0], [1085.0, 0.0], [1037.0, 0.0], [1100.0, 0.0], [1105.0, 0.0], [1157.0, 0.0], [1156.0, 0.0], [1199.0, 0.0], [1185.0, 0.0], [1250.0, 0.0], [1262.0, 0.0], [1261.0, 0.0], [1234.0, 0.0], [1224.0, 0.0], [1293.0, 0.0], [1316.0, 0.0], [1328.0, 0.0], [1336.0, 0.0], [1300.0, 0.0], [1390.0, 0.0], [1352.0, 0.0], [1363.0, 0.0], [1455.0, 0.0], [1456.0, 0.0], [1434.0, 0.0], [1477.0, 0.0], [1527.0, 0.0], [1479.0, 0.0], [1501.0, 0.0], [1585.0, 0.0], [1572.0, 0.0], [1596.0, 0.0], [1550.0, 0.0], [1586.0, 0.0], [1541.0, 0.0], [1575.0, 0.0], [1633.0, 0.0], [1653.0, 0.0], [1608.0, 0.0], [1659.0, 0.0], [1655.0, 0.0], [1645.0, 0.0], [1620.0, 0.0], [1685.0, 0.0], [1666.0, 0.0], [1714.0, 0.0], [1697.0, 0.0], [1698.0, 0.0], [1700.0, 0.0], [1785.0, 0.0], [1760.0, 0.0], [1778.0, 0.0], [1784.0, 0.0], [1786.0, 0.0], [1769.0, 0.0], [1791.0, 0.0], [1751.0, 0.0], [1733.0, 0.0], [1740.0, 0.0], [1738.0, 0.0], [1801.0, 0.0], [1815.0, 0.0], [1811.0, 0.0], [1802.0, 0.0], [1845.0, 0.0], [1800.0, 0.0], [1796.0, 0.0], [1818.0, 0.0], [1809.0, 0.0], [1808.0, 0.0], [1848.0, 0.0], [1834.0, 0.0], [1851.0, 0.0], [1917.0, 0.0], [1909.0, 0.0], [1881.0, 0.0], [1914.0, 0.0], [1919.0, 0.0], [1893.0, 0.0], [1899.0, 0.0], [1900.0, 0.0], [1864.0, 0.0], [1862.0, 0.0], [1976.0, 0.0], [1983.0, 0.0], [1972.0, 0.0], [1969.0, 0.0], [1970.0, 0.0], [1932.0, 0.0], [1935.0, 0.0], [1975.0, 0.0], [1973.0, 0.0], [1982.0, 0.0], [1965.0, 0.0], [1967.0, 0.0], [1962.0, 0.0], [1963.0, 0.0], [1964.0, 0.0], [1928.0, 0.0], [1938.0, 0.0], [1939.0, 0.0], [1948.0, 0.0], [1951.0, 0.0], [1949.0, 0.0], [1950.0, 0.0], [1922.0, 0.0], [1947.0, 0.0], [1946.0, 0.0], [1981.0, 0.0], [1979.0, 0.0], [1978.0, 0.0], [1977.0, 0.0], [2008.0, 0.0], [2003.0, 0.0], [2000.0, 0.0], [2001.0, 0.0], [1999.0, 0.0], [2002.0, 0.0], [1998.0, 0.0], [2004.0, 0.0], [2007.0, 0.0], [2006.0, 0.0], [2010.0, 0.0], [2005.0, 0.0], [1989.0, 0.0], [1992.0, 0.0], [1991.0, 0.0], [1984.0, 0.0], [1986.0, 0.0], [1987.0, 0.0], [1985.0, 0.0], [1988.0, 0.0], [1996.0, 0.0], [1995.0, 0.0], [1997.0, 0.0], [1994.0, 0.0], [2015.0, 0.0], [2029.0, 0.0], [2031.0, 0.0], [2030.0, 0.0], [2040.0, 0.0], [2023.0, 0.0], [2035.0, 0.0], [2050.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2050.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 59.266666666666666, "minX": 1.69932672E12, "maxY": 2000.0, "series": [{"data": [[1.69932708E12, 1593.6666666666667], [1.69932678E12, 2000.0], [1.69932672E12, 1927.2333333333333], [1.69932738E12, 1173.0], [1.69932684E12, 1996.75], [1.6993275E12, 1201.8666666666666], [1.69932744E12, 1096.6833333333334], [1.69932714E12, 1390.8666666666666], [1.69932756E12, 1126.8], [1.69932726E12, 1254.5833333333333], [1.6993272E12, 1376.3666666666666], [1.6993269E12, 1994.5333333333333], [1.69932732E12, 1334.9833333333333], [1.69932702E12, 1586.5], [1.69932696E12, 1359.35], [1.69932762E12, 59.266666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69932762E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 59.55, "minX": 1.69932672E12, "maxY": 2000.0, "series": [{"data": [[1.69932708E12, 1593.3166666666666], [1.69932678E12, 2000.0], [1.69932672E12, 1927.2166666666667], [1.69932738E12, 1173.0], [1.69932684E12, 1996.7166666666667], [1.6993275E12, 1202.7], [1.69932744E12, 1095.85], [1.69932714E12, 1391.2166666666667], [1.69932756E12, 1126.5166666666667], [1.69932726E12, 1253.95], [1.6993272E12, 1376.1666666666667], [1.6993269E12, 1994.5], [1.69932732E12, 1335.8166666666666], [1.69932702E12, 1586.5833333333333], [1.69932696E12, 1359.35], [1.69932762E12, 59.55]], "isOverall": false, "label": "202", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69932762E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 59.55, "minX": 1.69932672E12, "maxY": 2000.0, "series": [{"data": [[1.69932708E12, 1593.3166666666666], [1.69932678E12, 2000.0], [1.69932672E12, 1927.2166666666667], [1.69932738E12, 1173.0], [1.69932684E12, 1996.7166666666667], [1.6993275E12, 1202.7], [1.69932744E12, 1095.85], [1.69932714E12, 1391.2166666666667], [1.69932756E12, 1126.5166666666667], [1.69932726E12, 1253.95], [1.6993272E12, 1376.1666666666667], [1.6993269E12, 1994.5], [1.69932732E12, 1335.8166666666666], [1.69932702E12, 1586.5833333333333], [1.69932696E12, 1359.35], [1.69932762E12, 59.55]], "isOverall": false, "label": "Java Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69932762E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 59.55, "minX": 1.69932672E12, "maxY": 2000.0, "series": [{"data": [[1.69932708E12, 1593.3166666666666], [1.69932678E12, 2000.0], [1.69932672E12, 1927.2166666666667], [1.69932738E12, 1173.0], [1.69932684E12, 1996.7166666666667], [1.6993275E12, 1202.7], [1.69932744E12, 1095.85], [1.69932714E12, 1391.2166666666667], [1.69932756E12, 1126.5166666666667], [1.69932726E12, 1253.95], [1.6993272E12, 1376.1666666666667], [1.6993269E12, 1994.5], [1.69932732E12, 1335.8166666666666], [1.69932702E12, 1586.5833333333333], [1.69932696E12, 1359.35], [1.69932762E12, 59.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69932762E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

