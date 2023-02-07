import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegistratePage from "./Pages/RegistratePage";
import Home from "./Pages/Home";
import Music from "./Pages/Music";
import Details from "./Pages/Details";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { userContext } from "./Context/userContext";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;

  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isMusicActive, setIsMusicActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchedMovie, setSearchedMovie] = useState();
  const [searchedMusic, setSearchedMusic] = useState();

  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {user && (
        <Navbar
          isHomeActive={isHomeActive}
          isMusicActive={isMusicActive}
          isProfileActive={isProfileActive}
          setSearchedMovie={setSearchedMovie}
          setSearchedMusic={setSearchedMusic}
          setModalOpen={setModalOpen}
        />
      )}
      {user && (
        <Sidebar
          modalOpen={modalOpen}
          isHomeActive={isHomeActive}
          isMusicActive={isMusicActive}
          isProfileActive={isProfileActive}
          setSearchedMovie={setSearchedMovie}
          setSearchedMusic={setSearchedMusic}
          setModalOpen={setModalOpen}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Home
                setIsHomeActive={setIsHomeActive}
                setIsMusicActive={setIsMusicActive}
                setIsProfileActive={setIsProfileActive}
                searchedMovie={searchedMovie}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/music"
          element={
            user ? (
              <Music
                setIsMusicActive={setIsMusicActive}
                setIsHomeActive={setIsHomeActive}
                setIsProfileActive={setIsProfileActive}
                searchedMusic={searchedMusic}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/profile"
          element={
            user ? (
              <Profile
                setIsMusicActive={setIsMusicActive}
                setIsHomeActive={setIsHomeActive}
                setIsProfileActive={setIsProfileActive}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/details/:id"
          element={
            user ? (
              <Details setIsHomeActive={setIsHomeActive} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/registrate"
          element={user ? <Navigate to="/" /> : <RegistratePage />}
        />

        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
