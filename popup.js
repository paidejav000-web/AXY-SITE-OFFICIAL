#axyPopupOverlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.88);
    backdrop-filter: blur(10px);

    display: none;
    justify-content: center;
    align-items: center;

    z-index: 999999;
}

#axyPopupOverlay.show {
    display: flex;
}

#axyPopupBox {
    width: 90%;
    max-width: 900px;
    min-height: 450px;

    background: #0a0a0a;
    border: 2px solid #d4af37;
    border-radius: 18px;

    padding: 40px;
    text-align: center;
    color: white;

    position: relative;

    box-shadow: 0 0 40px rgba(212,175,55,0.35);

    animation: pop 0.25s ease;
}

#axyPopupClose {
    position: absolute;
    top: 12px;
    right: 18px;

    font-size: 32px;
    cursor: pointer;
    color: #d4af37;
}

#axyPopupClose:hover {
    color: white;
}

#axyPopupBox h1 {
    color: #d4af37;
    font-size: 2.8rem;
}

#axyPopupBox p {
    font-size: 1.1rem;
    margin-top: 15px;
    color: #ddd;
}

#axyPopupButton {
    margin-top: 30px;
    padding: 12px 24px;

    background: #d4af37;
    color: black;

    border-radius: 10px;
    font-weight: bold;

    display: inline-block;
    cursor: pointer;
}

@keyframes pop {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}
