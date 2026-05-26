window.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("axyPopupOverlay");
    const closeBtn = document.getElementById("axyPopupClose");
    const button = document.getElementById("axyPopupButton");

    // if popup doesn't exist on page, do nothing
    if (!popup) return;

    // show popup
    popup.classList.add("show");

    // close actions
    if (closeBtn) {
        closeBtn.onclick = () => popup.classList.remove("show");
    }

    if (button) {
        button.onclick = () => popup.classList.remove("show");
    }

});
