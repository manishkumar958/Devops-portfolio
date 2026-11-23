/* =================================
   MANISH KUMAR - PORTFOLIO JS
   ================================= */

// Console message
console.log("Portfolio website loaded successfully!");

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

});

// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card"
);

revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", function () {

    revealElements.forEach((element) => {

        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });

});

// Run once when page loads
window.dispatchEvent(new Event("scroll"));
// Automatic footer year
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = footer.innerHTML.replace(
        "2026",
        new Date().getFullYear()
    );
}

console.log("Animations initialized!");
alert("javaScript is working!");