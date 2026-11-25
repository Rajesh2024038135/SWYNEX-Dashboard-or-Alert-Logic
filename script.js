let temperature = 32;

function updateDashboard() {

    document.getElementById("temperature").innerText =
        temperature + "°C";

    if (temperature > 40) {

        document.getElementById("status").innerText =
            "WARNING! High Temperature";

        document.getElementById("systemStatus").innerText =
            "ALERT";

        document.getElementById("systemStatus").style.color =
            "red";

    } else {

        document.getElementById("status").innerText =
            "Normal Temperature";

        document.getElementById("systemStatus").innerText =
            "NORMAL";

        document.getElementById("systemStatus").style.color =
            "green";
    }
}

updateDashboard();

// Simulate temperature changes every 3 seconds
setInterval(function() {

    temperature = Math.floor(Math.random() * 20) + 30;

    updateDashboard();

}, 3000);