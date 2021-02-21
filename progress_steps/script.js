const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
console.log(circles);

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive = Math.min(currentActive + 1, circles.length);
    update();
});
prev.addEventListener("click", () => {
    currentActive = Math.max(currentActive - 1, 0);
    update();
});

const update = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) circle.classList.add("active");
        else circle.classList.remove("active");
    });

    const actives = document.querySelectorAll(".active");
    const percentage = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    progress.style.width = percentage;

    console.log(actives);
    console.log(actives.length - 1, circles.length);
    console.log((actives.length - 1) / circles.length);

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
};
