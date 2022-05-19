import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../Store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/React-project/">All Meetups</Link>
          </li>
          <li>
            <Link to="/React-project/new-meetup/">New Meetup</Link>
          </li>
          <li>
            <Link to="/React-project/favorites/">Favorites
            <span className={classes.badge}>{favoritesCtx.totalFavorites} </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
