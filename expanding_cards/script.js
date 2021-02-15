const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", function () {
        removeActiveClasses();
        this.classList.add("active");
    });
});

function removeActiveClasses() {
    const panel = document.querySelector(".active");
    console.log(panel);
    panel.classList.remove("active");
}
