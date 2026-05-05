window.addEventListener("load", () => {
const intro = document.getElementById("intro");

setTimeout(() => {
intro.style.display = "none";
}, 3000);
});

/* smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({ behavior: "smooth" });
});
});
