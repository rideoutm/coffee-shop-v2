import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import Carousel from "./components/Carousel/Carousel";
import Mission from "./components/Mission/Mission";
import Video from "./components/Video/Video";

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
      <Mission />
      <Video />
    </>
  );
}

export default App;
