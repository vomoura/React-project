import { createContext, useState } from "react";

// sets the initial context state as empty
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// create a function that provides favorites context using props
export function FavoritesContextProvider(props) {
  // set the initial state of user favorites and wait favorites to be set
  const [userFavorites, setUserFavorites] = useState([]);
  // add a handler to get favorites value after add favorites is requested
  function addFavoriteHandler(favoriteMeetup) {
    // nested function that gets previous favorites and adds up to current favorites value (without getting rid of previous array)
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  // add a handler to get favorites value after remove favorites is requested
  function removeFavoriteHandler(meetupId) {
    // nested function that gets previous favorites and returns a new array without the filtered value found on the condition
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  //   add a handler to check if the item is set as favorite
  function itemIsFavoriteHandler(meetupId) {
    //   function to check if any id matches the condition
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  //   changes initial context value
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
