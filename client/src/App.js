import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegistratePage from "./Pages/RegistratePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={"Home"} />
      <Route path="/registrate" element={<RegistratePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
