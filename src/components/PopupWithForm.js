export default function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  children,
  buttonText,
  onSubmit,
  isLoading,
}) {
  const handleOverlayClose = (evt) =>
    evt.target === evt.currentTarget && onClose();

  return (
    <div
      className={`popup popup_${name} ${isOpen ? "popup_is-opened" : ""}`}
      onClick={handleOverlayClose}
    >
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={`${name}-form`} onSubmit={onSubmit}>
          {children}
          <button className="popup__save" type="submit">
            {isLoading ? "Сохранение..." : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
