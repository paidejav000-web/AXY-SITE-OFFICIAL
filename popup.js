window.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("axyPopupOverlay");
    if (!popup) return;

    const close = document.getElementById("axyPopupClose");
    const btn = document.getElementById("axyPopupButton");

    popup.classList.add("show");

    close?.addEventListener("click", () => {
        popup.classList.remove("show");
    });

    btn?.addEventListener("click", () => {
        popup.classList.remove("show");
    });

});
