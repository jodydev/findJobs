import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdditionalInfoPage from "../pages/AdditionalInfoPage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/aggiungi-info" element={<AdditionalInfoPage />} />
    </Routes>
  );
}
