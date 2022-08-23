import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
}) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isLoading={isLoading}
    >
      <input
        ref={avatarRef}
        type="url"
        className="popup__input popup__input_type_title popup__input_avatar"
        name="avatar"
        id="avatar"
        placeholder="Ссылка на изображение"
        required
      />

      <span className="popup__input-error avatar-error"></span>
    </PopupWithForm>
  );
}
