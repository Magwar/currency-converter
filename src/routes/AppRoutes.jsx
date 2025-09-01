import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Converter from "../pages/Converter";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/converter" element={<Converter />} />
      </Route>
    </Routes>
  );
}