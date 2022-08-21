import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser?.name);
    setDescription(currentUser?.about);
  }, [currentUser, isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm 
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    name="edit-profile"
    title="Редактировать профиль"
    buttonText="Сохранить"
    >
        <input 
          type="text" 
          className="popup__input popup__input_type_name" 
          name="name" 
          id="name" 
          placeholder="Ваше имя" 
          minLength="2" 
          maxLength="40" 
          required
          value={name || ""}
          onChange={handleNameChange}
          />

          <span className="popup__input-error name-error"></span>

          <input 
          type="text" 
          className="popup__input popup__input_type_description" 
          name="description" 
          id="description" 
          placeholder="Пару слов о себе" 
          minLength="2" 
          maxLength="200" 
          required
          value={description || ""}
          onChange={handleDescriptionChange}
          />

          <span className="popup__input-error description-error"></span>
    </PopupWithForm>
  )
}