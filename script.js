const memories = document.querySelectorAll(".memory");

function showMemories() {
    memories.forEach((memory) => {
        const position = memory.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;

        if (position < screenPosition) {
            memory.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showMemories);

showMemories();
/* =========================================
   PHOTO VIEWER
========================================= */

function openPhoto(imageSrc) {

    const viewer = document.getElementById("photo-viewer");
    const viewerImage = document.getElementById("viewer-image");

    viewerImage.src = imageSrc;

    viewer.classList.add("active");
}


function closePhoto() {

    const viewer = document.getElementById("photo-viewer");

    viewer.classList.remove("active");
}


/* Close by clicking outside image */

document.getElementById("photo-viewer").addEventListener("click", function(event) {

    if (event.target === this) {
        closePhoto();
    }

});
/* REALISTIC SNOWFALL */

const snowContainer = document.getElementById("snow-container");

function createSnowflake() {

    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    snowflake.innerHTML = "❄";

    // Snow mostly on left or right side
    const side = Math.random() < 0.5;

    if (side) {
        snowflake.style.left = Math.random() * 25 + "%";
    } else {
        snowflake.style.left = 75 + Math.random() * 25 + "%";
    }

    // Random snowflake size
    snowflake.style.fontSize =
        8 + Math.random() * 16 + "px";

    // Random falling speed
    snowflake.style.animationDuration =
        5 + Math.random() * 7 + "s";

    // Random opacity
    snowflake.style.opacity =
        0.3 + Math.random() * 0.7;

    snowContainer.appendChild(snowflake);

    // Remove old snowflakes
    setTimeout(() => {
        snowflake.remove();
    }, 12000);
}

setInterval(createSnowflake, 180);
/* =========================================
   ACTIVE TIMELINE DOT
========================================= */

const timelineDots = document.querySelectorAll(".timeline-dot");
const memorySections = document.querySelectorAll(".memory");

function updateTimeline() {

    let currentMemory = 0;

    memorySections.forEach((memory, index) => {

        const position = memory.getBoundingClientRect().top;

        if (position < window.innerHeight * 0.55) {
            currentMemory = index;
        }

    });

    timelineDots.forEach((dot, index) => {

        dot.classList.remove("active");

        if (index === currentMemory) {
            dot.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateTimeline);

updateTimeline();
function toggleMusic() {
    const music = document.getElementById("background-music");
    const button = document.getElementById("music-button");

    if (music.paused) {
        music.play();
        button.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        button.innerHTML = "🎵 Play Music";
    }
}
function enterMemories() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}
function showMessage() {
    const message = document.getElementById("love-message");
    message.classList.toggle("show-message");
}
