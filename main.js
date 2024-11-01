//toggle n responsive nav
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navlist = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navlist.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    })
};

//Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}