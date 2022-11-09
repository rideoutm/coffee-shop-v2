import "./App.css";

import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Percolate from "./components/Blog/Blog";
import blogData from "./components/Blog/blogData.json";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
    return showModal;
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Header handleModal={handleModal} />
          <Routes>
            <Route path="/" element={<Homepage showModal={showModal} />} />
            <Route
              path="/blog/:id"
              element={<Percolate blogData={blogData} />}
            />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
