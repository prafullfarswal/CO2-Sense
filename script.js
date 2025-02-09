document.getElementById("footprint-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    let transport = parseFloat(document.getElementById("transport").value) * 0.12; // Transport CO₂
    let electricity = parseFloat(document.getElementById("electricity").value) * 0.85; // Electricity CO₂
    let diet = parseFloat(document.getElementById("diet").value) * 7; // Diet CO₂

    let totalEmissions = (transport + electricity + diet).toFixed(2);
    document.getElementById("result").innerText = totalEmissions;

    // Store data in localStorage for tracking user progress
    localStorage.setItem("carbon-footprint", totalEmissions);

    // Call function from chart.js to update the chart
    updateChart(transport, electricity, diet);
});
