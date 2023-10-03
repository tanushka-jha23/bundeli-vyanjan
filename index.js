const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu-container")
const close = document.querySelector(".cross")
const view = document.querySelector(".view-button")
const invisible = document.querySelector(".invisible")
const addCart = document.querySelector(".buy")
const seeMore = document.querySelector(".see-more")
const productDetail = document.querySelector(".detail")
const like = document.querySelectorAll(".liked")
const drop = () => {
    menu.style.transform = "translateY(-12vh)"
    menu.style.zIndex = "1"
}
hamburger.addEventListener("click", drop)
close.addEventListener("click", () => {
    menu.style.transform = "translateY(-120vh)"
})
view.addEventListener("click", () => {
    invisible.className = "product-container"
    view.textContent = "View Less"
})
like.addEventListener("click", () => {
    like.style.color = "red"
})
seeMore.addEventListener("click", () => {
    seeMore.className = "visible"
})
