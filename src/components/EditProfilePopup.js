import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import useInput from "../utils/hooks/useInput";

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading,
}) {
  const currentUser = useContext(CurrentUserContext);
  const inputName = useInput({ inputValue: currentUser.name });
  const inputDescription = useInput({ inputValue: currentUser.about });

  useEffect(() => {
    inputName.setValue(currentUser.name);
    inputDescription.setValue(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name: inputName.value,
      about: inputDescription.value,
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
      isLoading={isLoading}
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
        value={inputName.value || ""}
        onChange={inputName.handleChange}
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
        value={inputDescription.value || ""}
        onChange={inputDescription.handleChange}
      />

      <span className="popup__input-error description-error"></span>
    </PopupWithForm>
  );
}
