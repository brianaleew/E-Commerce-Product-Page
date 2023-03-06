const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const thumbnails = document.querySelectorAll(".product-images-thumbnails")
const modal = document.getElementById("modal");
const modalClose = document.getElementById("close")


const openModal = () => {
    modal.classList.add("open")
    console.log('clicked')
}

const closeModal = () => {
    modal.classList.remove("open")
    console.log('clicked to close')
}





// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active")
//     navList.classList.toggle("active")
// })




for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", openModal)
}

modalClose.addEventListener("click", closeModal)
