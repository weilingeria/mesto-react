export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
}

  return (
    <li className="element">
    <img className="element__image" src={props.card.link} onClick={handleClick} />
    <div className="element__description">
      <h2 className="element__title block">{props.card.name}</h2>
      <div className="element__like-container">
        <button className="element__like" type="button" />
        <span className="element__like-counter">{props.card.likes.length}</span>
      </div>
    </div>
    <button className="element__delete" type="button" />
  </li>
  )
}