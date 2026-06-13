
// ==========================================
// SPLASH SCREEN OPENING
// ==========================================

const splash = document.getElementById("splash");
const openBtn = document.getElementById("openBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

openBtn.addEventListener("click", () => {

    gsap.to("#splash", {
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut",
        onComplete: () => {
            splash.style.display = "none";
        }
    });

    music.play().catch(() => {});

});
// ==========================================
// DATE REVEAL
// ==========================================

function revealDate() {
    document
        .getElementById("scratchLayer")
        .classList
        .add("reveal");
}

// ==========================================
// MUSIC CONTROL
// ==========================================

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🎵";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

});

// ==========================================
// COUNTDOWN TIMER
// ==========================================

const weddingDate =
new Date("October 11, 2026 11:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance =
    weddingDate - now;

    const days =
    Math.floor(distance /
    (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
    (distance %
    (1000 * 60 * 60 * 24))
    /
    (1000 * 60 * 60));

    const minutes =
    Math.floor(
    (distance %
    (1000 * 60 * 60))
    /
    (1000 * 60));

    const seconds =
    Math.floor(
    (distance %
    (1000 * 60))
    /
    1000);

    document.getElementById("days").innerHTML =
    days;

    document.getElementById("hours").innerHTML =
    hours;

    document.getElementById("minutes").innerHTML =
    minutes;

    document.getElementById("seconds").innerHTML =
    seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);

// ==========================================
// FLOATING GOLD PARTICLES
// ==========================================

const particleContainer =
document.getElementById("particles");

for (let i = 0; i < 70; i++) {

    const particle =
    document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.animationDelay =
    Math.random() * 10 + "s";

    particle.style.animationDuration =
    (8 + Math.random() * 12) + "s";

    particle.style.opacity =
    Math.random() * 0.6;

    particle.style.width =
    (4 + Math.random() * 8) + "px";

    particle.style.height =
    particle.style.width;

    particleContainer.appendChild(particle);
}

// ==========================================
// RSVP BUTTONS
// ==========================================

function goToThankYou() {
    window.location.href = "pages/thankyou.html";
}

// ==========================================
// GSAP
// ==========================================

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// HERO ANIMATION
// ==========================================

gsap.from(".hero-content", {

    y: 120,

    opacity: 0,

    duration: 2,

    ease: "power4.out"

});

// ==========================================
// BRIDE CARD
// ==========================================

gsap.from(".bride", {

    scrollTrigger: {
        trigger: ".bride",
        start: "top 80%"
    },

    x: -120,

    opacity: 0,

    duration: 1.5

});

// ==========================================
// GROOM CARD
// ==========================================

gsap.from(".groom", {

    scrollTrigger: {
        trigger: ".groom",
        start: "top 80%"
    },

    x: 120,

    opacity: 0,

    duration: 1.5

});

// ==========================================
// COUNTDOWN
// ==========================================

gsap.from(".countdown", {

    scrollTrigger: {
        trigger: ".countdown",
        start: "top 80%"
    },

    y: 100,

    opacity: 0,

    duration: 1.3

});

// ==========================================
// STORY IMAGE
// ==========================================

gsap.from(".story-image", {

    scrollTrigger: {
        trigger: ".story-image",
        start: "top 80%"
    },

    scale: .8,

    opacity: 0,

    duration: 1.5

});

// ==========================================
// STORY TEXT
// ==========================================

gsap.from(".story-text", {

    scrollTrigger: {
        trigger: ".story-text",
        start: "top 80%"
    },

    y: 80,

    opacity: 0,

    duration: 1.3

});

// ==========================================
// EVENT CARDS
// ==========================================

gsap.from(".event-card", {

    scrollTrigger: {
        trigger: ".events",
        start: "top 80%"
    },

    y: 120,

    opacity: 0,

    stagger: .3,

    duration: 1.5

});

// ==========================================
// VENUE
// ==========================================

gsap.from(".venue", {

    scrollTrigger: {
        trigger: ".venue",
        start: "top 80%"
    },

    scale: .9,

    opacity: 0,

    duration: 1.4

});

// ==========================================
// FOOTER
// ==========================================

gsap.from("footer", {

    scrollTrigger: {
        trigger: "footer",
        start: "top 90%"
    },

    y: 80,

    opacity: 0,

    duration: 1.4

});

// ==========================================
// GOLD SHIMMER EFFECT
// ==========================================

gsap.to(".couple-name", {

    textShadow:
    "0 0 20px rgba(255,215,0,.8)",

    repeat: -1,

    yoyo: true,

    duration: 2

});

// ==========================================
// PARALLAX HERO EFFECT
// ==========================================

window.addEventListener("scroll", () => {

    const hero =
    document.querySelector(".hero");

    const offset =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    offset * 0.5 + "px";

});

// ==========================================
// SECTION FADE IN
// ==========================================

const sections =
document.querySelectorAll("section");

sections.forEach(section => {

    gsap.from(section, {

        scrollTrigger: {
            trigger: section,
            start: "top 85%"
        },

        y: 80,

        opacity: 0,

        duration: 1.2

    });

});

// ==========================================
// BUTTON HOVER EFFECT
// ==========================================

document.querySelectorAll(
".map-btn, #openBtn"
).forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        gsap.to(btn, {
            scale: 1.05,
            duration: .3
        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {
            scale: 1,
            duration: .3
        });

    });

});

