const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalClose = document.querySelectorAll("div.modal__close");
modalMain.className = "modal modal_active";

function removeModalActive() {
    this.closest(".modal").className = "modal";
}

for (let item of modalClose) {
    item.onclick = removeModalActive;
}

document.getElementsByClassName("show-success")[0].onclick = function() {
    modalSuccess.className = "modal modal_active";
    modalMain.className = "modal";
}