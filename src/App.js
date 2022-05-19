import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetupPage from "./Pages/NewMeetup";
import FavoritesPage from "./Pages/Favorites";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/React-project/" element={<AllMeetupsPage />} />

        <Route path="/React-project/new-meetup" element={<NewMeetupPage />} />

        <Route path="/React-project/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
