import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useForm from "../utils/hooks/useForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const inputTitle = useForm({ inputValue: "" });
  const inputLink = useForm({ inputValue: "" });

  useEffect(() => {
    inputTitle.setValue("");
    inputLink.setValue("");
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({ name: inputTitle.value, link: inputLink.value });
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
        value={inputTitle.value ?? ""}
        onChange={inputTitle.handleChange}
      />

      <span className="popup__input-error elementTitle-error"></span>

      <input
        type="url"
        className="popup__input popup__input_type_link"
        name="elementLink"
        id="elementLink"
        placeholder="Укажите ссылку"
        required
        value={inputLink.value ?? ""}
        onChange={inputLink.handleChange}
      />

      <span className="popup__input-error elementLink-error"></span>
    </PopupWithForm>
  );
}
