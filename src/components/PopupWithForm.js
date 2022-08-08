export default function PopupWithForm({ name, title, isOpen, onClose, children, buttonText }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
    <div className="popup__container">
      <button type="button" className="popup__close" onClick={onClose} />
      <h2 className="popup__title">{title}</h2>
      <form noValidate className="popup__form" name={`${name}-form`}>
        {children}
      </form>
      <button className="popup__save" type="submit">{buttonText}</button>
    </div>
  </div>
  )
}