import {useState} from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
    <Header />
    <Main 
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onEditAvatar={handleEditAvatarClick}
    onCardClick={handleCardClick}
    />
    <Footer />
    <PopupWithForm 
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    name={"edit-profile"}
    title={"Редактировать профиль"}
    children={
      <>
        <input 
          type="text" 
          className="popup__input popup__input_type_name" 
          name="name" 
          id="name" 
          placeholder="Ваше имя" 
          minLength="2" 
          maxLength="40" 
          required />

          <span className="popup__input-error name-error"></span>

          <input 
          type="text" 
          className="popup__input popup__input_type_description" 
          name="description" 
          id="description" 
          placeholder="Пару слов о себе" 
          minLength="2" 
          maxLength="200" 
          required />

          <span className="popup__input-error description-error"></span>
          <button className="popup__save" type="submit">Сохранить</button>
      </>
    }
    />

    <PopupWithForm 
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    name={"add-cards"}
    title={"Новая карточка"}
    children={
      <>
        <input 
          type="text" 
          className="popup__input popup__input_type_title" 
          name="elementTitle" 
          id="elementTitle" 
          placeholder="Название" 
          minLength="2" 
          maxLength="30" 
          required />

          <span className="popup__input-error elementTitle-error"></span>

          <input 
          type="url" 
          className="popup__input popup__input_type_link" 
          name="elementLink" 
          id="elementLink" 
          placeholder="Укажите ссылку" 
          required />

          <span className="popup__input-error elementLink-error"></span>
          <button className="popup__save" id="popup__save_add-form" type="submit">Создать</button>
      </>
    }
    />

    <PopupWithForm 
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    name={"edit-avatar"}
    title={"Обновить аватар"}
    children={
      <>
        <input 
          type="url" 
          className="popup__input popup__input_type_title popup__input_avatar" 
          name="avatar"
          id="avatar" 
          placeholder="Ссылка на изображение" 
          required />

          <span className="popup__input-error avatar-error"></span>
          <button className="popup__save popup__save_avatar" type="submit">Сохранить</button>
      </>
    }
    />

    <ImagePopup 
    card={selectedCard}
    isOpen={isImagePopupOpen}
    onClose={closeAllPopups}
    />

    </div>
  );
}

export default App;
