import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}