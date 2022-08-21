import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`)
      })
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then(setCards)
      .catch((err) => {
        console.log(`Ошибка ${err}`)
      })
  }, [])


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


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.setLike(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`)
    })
  }

  function handleCardDelete(card) {
    api.deleteElementCard(card._id)
    .then(() => {
        setCards((state) => state.filter(c => c._id !== card._id));
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`)
    })
  }


  function handleUpdateUser(info) {
    api.editProfileInfo(info)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`)
    })
  }

  function handleUpdateAvatar({avatar}) {
    api.editAvatar(avatar)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`)
    })
  }

  function handleAddPlaceSubmit(cardData) {
    api.addNewElementCard(cardData)
    .then((res) => {
      setCards([res, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`)
    })
  }


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
    <Header />

      <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      cards={cards}
      onCardClick={handleCardClick}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
      />
    
    <Footer />

    <EditProfilePopup
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    onUpdateUser={handleUpdateUser}
    />

    <AddPlacePopup
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    onAddPlace={handleAddPlaceSubmit}
    />

    <EditAvatarPopup 
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    onUpdateAvatar={handleUpdateAvatar}
    />

    <ImagePopup 
    card={selectedCard}
    isOpen={isImagePopupOpen}
    onClose={closeAllPopups}
    />

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
