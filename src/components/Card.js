export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
}

  return (
    <li className="element">
    <img className="element__image" src={card.link} onClick={handleClick} />
    <div className="element__description">
      <h2 className="element__title block">{card.name}</h2>
      <div className="element__like-container">
        <button className="element__like" type="button" />
        <span className="element__like-counter">{card.likes.length}</span>
      </div>
    </div>
    <button className="element__delete" type="button" />
  </li>
  )
}