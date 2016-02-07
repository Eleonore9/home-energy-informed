google.charts.load('current', {'packages': ['corechart']});

google.charts.setOnLoadCallback(plotEmbed);

function plotEmbed() {

    var info = [['Loft insulation', 'Double glazing', 'Heat recovery', 'PV cells', 'Solar heating'],
                [true, false, true, false, true],
                [false, false, true, true, true],
                [false, false, true, false, false],
                [true, false, true, false, true],
                [false, false, true, false, false]]

    // Dummy information
    var links = ['https://www.getembed.com/app#bfb6e716f87d4f1a333fd37d5c3679b2b4b6d87f,5f13ab15582b4e9161997831404ccf9756748dab,0d9726ba6c83c0fb07d945abd33bca2940734b27',
                 'https://www.getembed.com/app#bfb6e716f87d4f1a333fd37d5c3679b2b4b6d87f,db8f66d754a43f20f1d1c48c457c13dea88c1f64,c2072adcfe779f83bc36902816c9a6ffb1808dee',
                 'https://www.getembed.com/app#bfb6e716f87d4f1a333fd37d5c3679b2b4b6d87f,5f13ab15582b4e9161997831404ccf9756748dab,0d9726ba6c83c0fb07d945abd33bca2940734b27',
                 'https://www.getembed.com/app#bfb6e716f87d4f1a333fd37d5c3679b2b4b6d87f,5f13ab15582b4e9161997831404ccf9756748dab,0d9726ba6c83c0fb07d945abd33bca2940734b27',
                 'https://www.getembed.com/app#bfb6e716f87d4f1a333fd37d5c3679b2b4b6d87f,5f13ab15582b4e9161997831404ccf9756748dab,0d9726ba6c83c0fb07d945abd33bca2940734b27'];

    var data = google.visualization.arrayToDataTable([
        ['Gas (kWh)', 'Elec (kWh)'],
        [10000, 10000],
        [8000, 9000],
        [9000, 6000],
        [7000, 5000],
        [11000, 3000],
    ]);
    var options =  {hAxis: {title: 'Gas [kWh]'},
                    vAxis: {title: 'Elec [kWh]'},
                    legend: 'none'};
    var chart = new google.visualization.ScatterChart(
        document.getElementById('scatter_div'));
    chart.draw(data, options);

    google.visualization.events.addListener(chart, 'select', function() {
        // Update table with values
        // var text = "<h4>Place link here for: " + chart.getSelection()[0].row + "</h4>";
        var idx = chart.getSelection()[0].row +1;
        var text = '<ul>'
        for(var ipar=0; ipar< info[0].length; ipar++) {
            text += '<li>' + info[0][ipar] + ': ' + info[idx][ipar] + '</li>'
        }
        text += '</ul';
        document.getElementById("listy").innerHTML = text;

        document.getElementById("link_area").innerHTML = 'Embed property <a href="'+links[idx]+'">report</a>';
    });

}

