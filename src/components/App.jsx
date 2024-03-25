import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
const HomePage = lazy(() => import("../pages/Home/Home"));
const NumberPage = lazy(() => import("../pages/Number/Number"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="number" element={<NumberPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
