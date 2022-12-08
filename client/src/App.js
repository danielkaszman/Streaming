import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegistratePage from "./Pages/RegistratePage";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Details from "./Pages/Details";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isSeriesActive, setIsSeriesActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar
        isHomeActive={isHomeActive}
        isSeriesActive={isSeriesActive}
        setModalOpen={setModalOpen}
      />
      <Sidebar modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              setIsHomeActive={setIsHomeActive}
              setIsSeriesActive={setIsSeriesActive}
            />
          }
        />
        <Route
          path="/series"
          element={
            <Series
              setIsSeriesActive={setIsSeriesActive}
              setIsHomeActive={setIsHomeActive}
            />
          }
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/registrate" element={<RegistratePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
