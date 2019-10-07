const Chart = require('./node_modules/chart.js');

const chartOne = document.getElementById('chartOne')

let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            }
        }
    }
});