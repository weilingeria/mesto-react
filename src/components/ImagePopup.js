export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_open-image ${isOpen ? 'popup_is-opened' : ''}`}>
    <div className="popup__openimage-container">
      <button className="popup__close popup__close_open-image" type="button" onClick={onClose} />
      <img className="popup__image" src={card?.link} />
      <p className="popup__image-title">{card?.name}</p>
    </div>
  </div>
  )
}