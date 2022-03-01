google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Orders'],
        ['Jan', 10],
        ['Feb', 11],
        ['Mar', 66],
        ['Apr', 103 ],
        ['May', 10 ],
        ['Jun', 11 ],
        ['Jul', 15 ],
        ['Aug', 20 ],
        ['Sept', 0 ],
        ['Oct', 100 ],
        ['Nov', 15 ],
        ['Dec', 20 ]
      ]);

      var options = {
        title: 'Total number of orders in a month',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
      var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart1'));

      chart1.draw(data, options);


    }
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawTrendlines);

    function drawTrendlines() {
      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Orders');

      data.addRows([
        [{ v: [8, 0, 0], f: '8 am' }, 1],
        [{ v: [9, 0, 0], f: '9 am' }, 2],
        [{ v: [10, 0, 0], f: '10 am' }, 3],
        [{ v: [11, 0, 0], f: '11 am' }, 4],
        [{ v: [12, 0, 0], f: '12 pm' }, 5],
        [{ v: [13, 0, 0], f: '1 pm' }, 6],
        [{ v: [14, 0, 0], f: '2 pm' }, 7],
        [{ v: [15, 0, 0], f: '3 pm' }, 8],
        [{ v: [16, 0, 0], f: '4 pm' }, 9],
        [{ v: [17, 0, 0], f: '5 pm' }, 10]
      ]);

      var options = {
        title: 'Total number of orders in a day',
        trendlines: {
          0: { type: 'linear', lineWidth: 5, opacity: .3 },
          1: { type: 'exponential', lineWidth: 10, opacity: .3 }
        },
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Orders'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
      var chart1 = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
      chart1.draw(data, options);
    }