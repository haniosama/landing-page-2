function aosInit() {
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', aosInit);


const tabs = document.querySelectorAll(".tab")
const images = document.querySelectorAll(".images img")
console.log(images);

tabs.forEach((e) => {
    e.addEventListener("click", removeActive)
    e.addEventListener("click", changeImg)
})
function removeActive() {
    tabs.forEach((tab) => {
        tab.classList.remove("active")
        this.classList.add("active")
    })
}
function changeImg() {
    images.forEach((item) => {
        item.style.display = "none"
    })
    document.querySelectorAll(this.dataset.set).forEach((img) => {
        img.style.display = "block"
    })
}

// custom arrow up

let scrollup = document.querySelector("#scroll")

function toggleScrollTop() {
    if (scrollup) {
        window.scrollY > 500 ? scrollup.classList.add('active') : scrollup.classList.remove('active');
    }
}


scrollup.addEventListener("click", function (e) {
    e.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
window.addEventListener("load", toggleScrollTop)
document.addEventListener("scroll", toggleScrollTop)

