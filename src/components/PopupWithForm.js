export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`}>
    <div className="popup__container">
      <button type="button" className="popup__close" onClick={props.onClose} />
      <h2 className="popup__title">{props.title}</h2>
      <form noValidate className="popup__form" name={`${props.name}-form`}>
        {props.children}
      </form>
    </div>
  </div>
  )
}