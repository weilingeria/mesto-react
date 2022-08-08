import { useEffect, useState } from "react";
import { api } from "../utils/api";
import Card from "./Card";

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`)
      })
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`)
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
            <button className="profile__avatar-button" type="button" onClick={onEditAvatar} />
          </div>
          <div className="profile__info">
            <div className="profile__column">
              <h1 className="profile__name block">{userName}</h1>
              <p className="profile__description block">{userDescription}</p>
            </div>
            <button type="button" className="profile__edit-button" onClick={onEditProfile} />
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>

      <section className="elements">
        <ul className="elements__list">

          {cards.map((card) => (
            <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            />
            ))
          }

        </ul>
      </section>
    </main>
  )
}