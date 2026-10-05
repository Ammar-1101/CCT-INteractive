// -----------------------------
// DOM ELEMENTS
// -----------------------------

const startButton = document.getElementById("startButton");

const mainTitle = document.getElementById("mainTitle");
const description = document.getElementById("description");

const statusIcon = document.getElementById("statusIcon");
const statusTitle = document.getElementById("statusTitle");
const statusText = document.getElementById("statusText");

const screenMessage = document.getElementById("screenMessage");
const screenWidth = document.getElementById("screenWidth");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const notification = document.getElementById("notification");


// -----------------------------
// 1. MOUSE EVENT
// CLICK BUTTON
// -----------------------------

startButton.addEventListener("click", function() {

    mainTitle.textContent = "Your Day Has Started!";

    description.textContent =
        "You made it to university. Time to get through the day.";

    statusIcon.textContent = "🎓";

    statusTitle.textContent = "University Mode";

    statusText.textContent =
        "Your first class is coming up. Stay focused!";

    startButton.textContent = "Day Started ✓";

});


// -----------------------------
// 2. KEYBOARD EVENT
// PRESS N FOR NIGHT MODE
// -----------------------------

document.addEventListener("keydown", function(event) {

    if (event.key.toLowerCase() === "n") {

        document.body.classList.toggle("night");

        if (document.body.classList.contains("night")) {

            statusIcon.textContent = "🌙";

            statusTitle.textContent = "Night Mode";

            statusText.textContent =
                "It's getting late. Time to finish your work and head home.";

            mainTitle.textContent = "Good Evening";

        } else {

            statusIcon.textContent = "☀️";

            statusTitle.textContent = "Morning";

            statusText.textContent =
                "The day is back to normal.";

            mainTitle.textContent = "Ready for the Day?";

        }

    }

});


// -----------------------------
// 3. WINDOW / BOM EVENT
// RESIZE THE WINDOW
// -----------------------------

function updateScreenSize() {

    const width = window.innerWidth;

    screenWidth.textContent = width;

    if (width < 600) {

        screenMessage.textContent =
            "You're using a small screen. The website has adapted for mobile.";

    } else if (width < 1000) {

        screenMessage.textContent =
            "You're using a medium-sized screen. The layout is adapting.";

    } else {

        screenMessage.textContent =
            "You're using a large screen. You have plenty of space to explore.";

    }

}

window.addEventListener("resize", updateScreenSize);


// Run once when the page loads

updateScreenSize();


// -----------------------------
// 4. TIME / BOM EVENT
// SHOW NOTIFICATION AFTER 10 SECONDS
// -----------------------------

setTimeout(function() {

    notification.classList.add("show");

}, 10000);


// -----------------------------
// 5. SCROLL EVENT
// UPDATE PROGRESS BAR
// -----------------------------

window.addEventListener("scroll", function() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent =
        (scrollTop / documentHeight) * 100;

    const roundedPercent =
        Math.round(scrollPercent);

    progressBar.style.width = roundedPercent + "%";

    progressText.textContent =
        roundedPercent + "% of your day completed";

});