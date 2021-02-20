const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => (currentActive = Math.min(currentActive + 1, circles.length)));
prev.addEventListener("click", () => (currentActive = Math.max(currentActive - 1, 0)));

const update = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) circle.classList.add("active");
        else circle.classList.remove("active");
    });

    const actives = document.querySelectorAll("active");
    const percentage = (actives.length - 1 / circle.length) * 100 + "%";
    progress.style.width = percentage;

    prev.disabled = currentActive === 1;
    prev.disabled = currentActive === circles.length;
};
