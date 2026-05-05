window.addEventListener("load", () => {
const intro = document.getElementById("intro");

setTimeout(() => {
intro.style.opacity = "0";
setTimeout(() => {
intro.style.display = "none";
}, 500);
}, 2500);
});

/* smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({ behavior: "smooth" });
});
});
