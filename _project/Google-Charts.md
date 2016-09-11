---
layout: project_single
title:  "Cool Project"
slug: "cool-project"
---

{{ site.about }}
<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">





      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        // Grab all the dates as strings
        var stringArry = [
                    "Jun 15, 2016 04:40 PM",
                    "Jun 19, 2016 12:17 PM",
                    "Jun 20, 2016 07:00 AM",
                    "Jun 20, 2016 08:03 AM",
                    "Jun 28, 2016 07:42 PM",
                    "Jun 29, 2016 04:48 PM",
                    "Jul 12, 2016 06:52 AM",
                    "Jul 14, 2016 07:03 AM",
                    "Jul 16, 2016 01:52 PM",
                    "Jul 18, 2016 07:05 AM",
                    "Jul 25, 2016 07:02 AM",
                    "Jul 26, 2016 06:57 AM",
                    "Jul 29, 2016 06:57 AM",
                    "Jul 31, 2016 11:46 AM",
                    "Aug 1, 2016  06:44 AM",
                    "Aug 3, 2016  06:57 AM",
                    "Aug 5, 2016  04:45 PM",
                    "Aug 10, 2016 06:57 AM",
                    "Aug 11, 2016 07:03 AM",
                    "Aug 12, 2016 01:11 PM",
                    "Aug 15, 2016 06:29 PM",
                    "Aug 16, 2016 07:17 AM",
                    "Aug 19, 2016 07:36 AM",
                    "Aug 22, 2016 07:24 AM",
                    "Aug 24, 2016 07:18 AM",
                    "Aug 26, 2016 12:51 PM",
                    "Aug 28, 2016 04:15 PM",
                    "Aug 31, 2016 06:48 AM",
                    "Sep 2, 2016  01:31 PM",
                    "Sep 5, 2016  10:38 AM",
                    "Sep 9, 2016  09:24 AM",
                    "Sep 10, 2016 05:55 PM"];

          // Create array for the google visualisation to take in

          var dateArry = [['Day Of Week', 'Time of Day']];
          var i;
          for (i = 0; i < stringArry.length; i++) {
            //alert(dateArry[i]);
            var d = new Date(stringArry[i]);
            dateArry.push([d.getDay(), d.getHours()]);
            
          }

        var data = google.visualization.arrayToDataTable(dateArry);

        var options = {
          title: 'Gym Time Comparison',
          hAxis: {title: 'Day of Week', minValue: 0, maxValue: 6},
          vAxis: {title: 'Time of Day', minValue: 0, maxValue: 24},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <input type="text" id="myInput"/>
    <input type="submit" id="byBtn" value="Change" onclick="drawChart()"/>
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
  </body>
</html>


