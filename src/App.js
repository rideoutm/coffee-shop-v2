import "./App.css";

import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Percolate from "./components/Blog/Blog";
import blogData from "./components/Blog/blogData.json";
import Modal from "./components/Modal/Modal";
import Shop from "./components/Shop/Shop";

import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [showModal, setShowModal] = useState(false);
  const menuRef = useRef();

  const handleModal = () => {
    setShowModal(!showModal);
    return showModal;
  };

  return (
    <>
      <BrowserRouter basename="/coffee-shop-v2">
        <ScrollToTop>
          <Header handleModal={handleModal} menuRef={menuRef} />
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  showModal={showModal}
                  setShowModal={setShowModal}
                  menuRef={menuRef}
                />
              }
            />
            <Route
              path="/blog/:id"
              element={<Percolate blogData={blogData} />}
            />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
