export default function ImagePopup(props) {
  return (
    <div className={`popup popup_open-image ${props.isOpen ? 'popup_is-opened' : ''}`}>
    <div className="popup__openimage-container">
      <button className="popup__close popup__close_open-image" type="button" onClick={props.onClose} />
      <img className="popup__image" src={props.card?.link} />
      <p className="popup__image-title">{props.card?.name}</p>
    </div>
  </div>
  )
}