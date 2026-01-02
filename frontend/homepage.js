function toggleBio() {
    const moreText = document.getElementById("more-text");
    const btnText = document.getElementById("show-more-btn");

    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        btnText.innerHTML = "Show less";
    } else {
        moreText.classList.add("hidden");
        btnText.innerHTML = "Show more";
    }
}
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});