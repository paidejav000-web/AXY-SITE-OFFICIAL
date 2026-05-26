function initPopup() {
    const popup = document.getElementById("axyPopupOverlay");
    const close = document.getElementById("axyPopupClose");
    const btn = document.getElementById("axyPopupButton");

    if (!popup) return;

    popup.classList.add("show");

    close.onclick = () => popup.classList.remove("show");
    btn.onclick = () => popup.classList.remove("show");
}

window.addEventListener("load", initPopup);
