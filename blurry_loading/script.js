const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const loading = () => {
    load++;

    if (load > 99) clearInterval(interval);

    loadText.innerText = load + "%";
    loadText.style.opacity = (100 - load) / 100;
    bg.style.filter = `blur(${((100 - load) / 100) * 30}px)`;
};

let interval = setInterval(loading, 30);
