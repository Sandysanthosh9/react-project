import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuList from "./pages/MenuList";
import AddItem from "./pages/AddItem";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuList />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
