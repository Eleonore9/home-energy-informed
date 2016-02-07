console.log( "Hello!" )

//$(".line-one dropdown-menu li").on('click', function(){
//  console.log("Click!");
//});


// Load the Visualization API and the piechart package.
//google.charts.load('visualization', '1.0', {'packages':['corechart']});
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
// google.charts.setOnLoadCallback(readGasData);
google.charts.setOnLoadCallback(readGasDataFilter);
google.charts.setOnLoadCallback(readElecDataFilter);
// google.charts.setOnLoadCallback(readElecData);

// function readGasData() {
//      $.getJSON( "/dashboard/gas_data", function() {
//     })
//         .done(function( data ) {
//             var chart_data = google.visualization.arrayToDataTable(data);
//             var chart = new google.visualization.Histogram(document.getElementById('gas_div'));
//             var options = {title: 'Gas consumption (kWh)',
//                            legend: {position: 'none'}};
//             chart.draw(chart_data, options);
//         });
// }

// function readElecData() {
//      $.getJSON( "/dashboard/elec_data", function() {
//     })
//         .done(function( data ) {
//             var chart_data = google.visualization.arrayToDataTable(data);
//             var chart = new google.visualization.Histogram(document.getElementById('elec_div'));
//             var options = {title: 'Electricity consumption (kWh)',
//                            legend: {position: 'none'}};
//             chart.draw(chart_data, options);
//         });
// }


function readGasDataFilter(type, age, area) {
     $.getJSON( "/dashboard/gas_data/" + type + "/" + age + "/" + area, function() {
    })
        .done(function( data ) {
            var chart_data = google.visualization.arrayToDataTable(data);
            var chart = new google.visualization.Histogram(document.getElementById('gas_div'));
            var options = {title: 'Gas consumption (kWh)',
                           legend: {position: 'none'}};
            chart.draw(chart_data, options);
        });
}

function readElecDataFilter(type, age, area) {
     $.getJSON( "/dashboard/elec_data/" + type + "/" + age + "/" + area, function() {
    })
        .done(function( data ) {
            var chart_data = google.visualization.arrayToDataTable(data);
            var chart = new google.visualization.Histogram(document.getElementById('elec_div'));
            var options = {title: 'Electricity consumption (kWh)',
                           legend: {position: 'none'}};
            chart.draw(chart_data, options);
        });
}
