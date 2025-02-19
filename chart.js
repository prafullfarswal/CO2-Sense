// Initialize the Chart.js bar chart
let ctx = document.getElementById('chart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Transport', 'Electricity', 'Diet'],
        datasets: [{
            label: 'CO₂ Emissions (kg)',
            data: [0, 0, 0], // Start with empty data
            backgroundColor: ['red', 'blue', 'green']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Function to update the chart dynamically
function updateChart(transport, electricity, diet) {
    myChart.data.datasets[0].data = [transport, electricity, diet];
    myChart.update(); // Refresh the chart with new data
}
