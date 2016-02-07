console.log( "Hello!" )

// Load the Visualization API and the piechart package.
//google.charts.load('visualization', '1.0', {'packages':['corechart']});
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(secondFunction);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
//drawChart();
function drawChart() {
    console.log("draw...");
    
    $.getJSON( "/dashboard/data", function() {
    })
        .done(function( data ) {
            console.log(data);
            var gasReading = data;
            
            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
                ['Mushrooms', 3],
                ['Onions', 1],
                ['Olives', 1],
                ['Zucchini', 1],
                ['Pepperoni', 2]
            ]);
            
            // Set chart options
            var options = {'title':'How Much Pizza I Ate Last Night',
                           'width':400,
                           'height':300};
            console.log( "success" );
            
            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            console.log( "success" );
            chart.draw(data, options);
            console.log("done");
        });
}


function secondFunction() {
    $.getJSON( "/dashboard/elec_data", function() {
    })
        .done(function( data ) {
            var chart_data = new google.visualization.DataTable();
            chart_data.addColumn('number', 'Entries');
            chart_data.addRows(google.visualization.arrayToDataTable(data));
            console.log(chart_data);
            var chart = new google.visualization.Histogram(document.getElementById('elec_div'));
            var options = {title: 'Electricity consumption (kWh)',
                           legend: {position: 'none'}};
            chart.draw(chart_data, options);
            console.log('drawn');
        });
}
