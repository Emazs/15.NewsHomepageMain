let imageMenu = document.querySelector(".imagen-menu");
let imageMenuCierre = document.querySelector(".image-menu-cierre");
let menu = document.querySelector(".menu-productos");
let body = document.querySelector("body");

imageMenu.addEventListener("click", e => {
    console.log("Funciona el menu");

    menu.classList.add("activacion");
    imageMenuCierre.classList.add("activacion");
    imageMenu.classList.add("desactivacion");
    body.classList.add("overflow");
});

imageMenuCierre.addEventListener("click", e => {
    menu.classList.remove("activacion");
    imageMenuCierre.classList.remove("activacion");
    imageMenu.classList.remove("desactivacion");
    body.classList.remove("overflow");
})


