import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setTitle('');
    setLink('');
  }, [isOpen]);

  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onAddPlace({
      name: title,
      link: link,
    });
  }

  return (
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    name="add-cards"
    title="Новая карточка"
    buttonText="Создать"
    >
      <input 
          type="text" 
          className="popup__input popup__input_type_title" 
          name="elementTitle" 
          id="elementTitle" 
          placeholder="Название" 
          minLength="2" 
          maxLength="30" 
          required
          value={title || ""}
          onChange={handleTitleChange} />

          <span className="popup__input-error elementTitle-error"></span>

          <input 
          type="url" 
          className="popup__input popup__input_type_link" 
          name="elementLink" 
          id="elementLink" 
          placeholder="Укажите ссылку" 
          required
          value={link || ""}
          onChange={handleLinkChange} />

          <span className="popup__input-error elementLink-error"></span>
    </PopupWithForm>
  )
}