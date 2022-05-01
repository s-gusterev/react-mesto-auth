import React from "react";
import "../index.css";

function ImagePopup() {
  return (
    <div
      className="popup popup_background_dark popup_type_picture root__popup"
      id="popup-img"
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
