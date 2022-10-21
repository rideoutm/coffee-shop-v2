import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
    return showModal;
  };

  return (
    <>
      <Header handleModal={handleModal} />
      <Carousel />
      <Modal showModal={showModal} />
    </>
  );
}

export default App;
