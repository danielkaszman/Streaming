import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegistratePage from "./Pages/RegistratePage";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Details from "./Pages/Details";

function App() {
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isSeriesActive, setIsSeriesActive] = useState(false);
  const [isMoviesActive, setIsMoviesActive] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home isHomeActive={isHomeActive} setIsHomeActive={setIsHomeActive} />
        }
      />
      <Route
        path="/movies"
        element={
          <Movies
            isMoviesActive={isMoviesActive}
            setIsMoviesActive={setIsMoviesActive}
          />
        }
      />
      <Route
        path="/series"
        element={
          <Series
            isSeriesActive={isSeriesActive}
            setIsSeriesActive={setIsSeriesActive}
          />
        }
      />
      <Route path="/details" element={<Details />} />
      <Route path="/registrate" element={<RegistratePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
