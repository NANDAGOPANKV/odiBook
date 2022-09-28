import React from "react";
import Header from "./components/Header";
// router
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import AddBooks from "./pages/AddBooks";
import AboutUs from "./pages/AboutUs";
import Books from "./pages/Books";
import BookUpdating from "./components/books/BookUpdating";
// css
import "./App.css";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBooks />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/books/:id" element={<BookUpdating />} />
      </Routes>
    </>
  );
}
