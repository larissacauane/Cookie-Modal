const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".btn-open");
const btnCloseModal = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnOpenModal.addEventListener("click", function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
})