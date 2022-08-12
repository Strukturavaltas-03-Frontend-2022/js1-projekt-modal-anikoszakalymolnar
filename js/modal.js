function showModal(modalID) {
    //modal megjelentése
    const modal = document.getElementById(modalID);
    modal.style.display = "block";
    modal.focus();  // a fokusba helyezés sajnos nem működik

    //mindegyik gomb kilép
    const allButtons = document.querySelectorAll(".btn_modal-close");
    for (let i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener('click', () => modal.style.display = "none");

    //kilépés, ha nem a modal dobozra klikkelünk
    window.onclick = function (event) {
        const modalDoboz = document.querySelector(".modal__doboz");
        console.log(event);
        if (event.target == modalDoboz) {
            modal.style.display = "none";
        }
    }
}


