import "./App.css";

import { useState } from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Percolate from "./components/Blog/Percolate";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const handleModal = () => {
    setShowModal(!showModal);
    return showModal;
  };

  return (
    <>
      <Header handleModal={handleModal} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage showModal={showModal} />} />
          <Route path="/blog/:id" element={<Percolate id={id} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
