import "./App.css";

import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Percolate from "./components/Blog/Blog";
import blogData from "./components/Blog/blogData.json";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [blogId, setBlogId] = useState(blogData);

  const handleModal = () => {
    setShowModal(!showModal);
    return showModal;
  };

  return (
    <>
      <BrowserRouter>
        <Header handleModal={handleModal} />
        <Routes>
          <Route
            path="/"
            element={<Homepage showModal={showModal} blogData={blogId} />}
          />
          <Route path="/blog/:id" element={<Percolate blogData={blogId} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
