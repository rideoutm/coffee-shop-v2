import "./App.css";

import { useState } from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [showModal, setShowModal] = useState(false);

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
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
