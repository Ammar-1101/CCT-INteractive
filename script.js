const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {
    document.getElementById("mainTitle").textContent = "My Day Has Started!";
    document.getElementById("description").textContent = "Time to get through the day.";

    document.getElementById("statusIcon").textContent = "🎓";
    document.getElementById("statusTitle").textContent = "At University";
    document.getElementById("statusText").textContent = "Time to get to class.";

    startButton.textContent = "Let's Go!";
});

document.addEventListener("keydown", function(event) {

    if (event.key.toLowerCase() === "n") {
        document.body.classList.toggle("night");

        if (document.body.classList.contains("night")) {
            document.getElementById("mainTitle").textContent = "Good Evening";
            document.getElementById("statusIcon").textContent = "🌙";
            document.getElementById("statusTitle").textContent = "Night Mode";
            document.getElementById("statusText").textContent = "Time to finish up and head home.";
        } else {
            document.getElementById("mainTitle").textContent = "Ready for Class?";
            document.getElementById("statusIcon").textContent = "☀️";
            document.getElementById("statusTitle").textContent = "Morning";
            document.getElementById("statusText").textContent = "Getting ready for the day.";
        }
    }

});

setTimeout(function() {
    document.getElementById("notification").classList.add("show");
}, 10000);

window.addEventListener("scroll", function() {

    let scrollTop = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight - window.innerHeight;

    let percent = Math.round((scrollTop / pageHeight) * 100);

    document.getElementById("progressBar").style.width = percent + "%";
    document.getElementById("progressText").textContent = percent + "% complete";

});