import "./App.css";

// Components
import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Percolate from "./components/Blog/Blog";
import blogData from "./components/Blog/blogData.json";
import Modal from "./components/Modal/Modal";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Shop/Cart/Cart";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Utils
import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);
  const menuRef = useRef();

  const handleModal = () => {
    setShowModal(!showModal);
    return showModal;
  };

  const menuBtnScroll = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <BrowserRouter basename="/coffee-shop-v2">
        <ScrollToTop>
          <Header
            handleModal={handleModal}
            menuRef={menuRef}
            menuBtnScroll={menuBtnScroll}
            setShowModal={setShowModal}
            showModal={showModal}
          />
          <Routes>
            <Route
              path="/"
              element={<Homepage showModal={showModal} setShowModal={setShowModal} menuRef={menuRef} />}
            />
            <Route path="/blog/:id" element={<Percolate blogData={blogData} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Modal showModal={showModal} setShowModal={setShowModal} menuBtnScroll={menuBtnScroll} />
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
