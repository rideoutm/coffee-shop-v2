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
import Product from "./components/Shop/Product/Product";

// imgs
import frenchpress from "./Data/imgs/frenchpress.jpg";
import coffeepods from "./Data/imgs/coffeepods.jpg";
import coffeepods2 from "./Data/imgs/coffeepods2.jpg";
import cup from "./Data/imgs/cup.jpg";
import metalMixingCup from "./Data/imgs/metalpour.jpg";
import mottaTamper from "./Data/imgs/MottaFlashTamper_800x800.jpg";

// Utils
import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ShopData = [
  {
    id: "1a",
    image: frenchpress,
    name: "FRENCH PRESS",
    price: 19.99,
    introText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eius alias reiciendis minima maiores molestias.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptates.",
    moreInfo: {
      weight: "1kg",
      dimensions: "14 x 10 x 23 cm",
    },
    sku: "AB131-1",
    category: "Accessories",
    tags: "Beans, Coffee, Press ",
  },
  {
    id: "2b",
    image: coffeepods,
    name: "DARK BLEND COFFEE PODS, 20pc",
    price: 15.99,
    introText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem magnam perspiciatis a aspernatur fugiat illo, numquam architecto aut eligendi, reiciendis ducimus iusto officia harum.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, dicta. ",
    moreInfo: {
      weight: "1.2kg",
      dimensions: "2 x 2 x 3 cm",
    },
    sku: "AB517-9",
    category: "Coffee Pods",
    tags: "Dark, Roast, Pods",
  },
  {
    id: "3c",
    image: coffeepods2,
    name: "LIGHT BLEND COFFEE PODS, 20pc",
    price: 15.99,
    introText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quasi ratione voluptas fugiat iure maiores.",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, velit.",
    moreInfo: {
      weight: "1.2kg",
      dimensions: "2 x 2 x 3 cm",
    },
    sku: "AB322-4",
    category: "Coffee Pods",
    tags: "Light, Roast, Pods",
  },
  {
    id: "4d",
    image: cup,
    name: "CERAMIC COFFEE CUP",
    price: 12.99,
    introText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptates.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore vero, amet aperiam temporibus soluta consequuntur?",
    moreInfo: {
      weight: "2kg",
      dimensions: "4.5 x 4.5 x 9.5 cm",
    },
    sku: "AB351-3",
    category: "Accessories",
    tags: "Ceramic, Drink, Mug",
  },
  {
    id: "5c",
    image: metalMixingCup,
    name: "METAL MIXING CUP",
    price: 21.99,
    introText: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, deserunt. Error non temporibus similique dolorum repudiandae minima iure magnam molestias.",
    moreInfo: {
      weight: "0.25kg",
      dimensions: "4.5 x 4 x 10 cm",
    },
    sku: "AB913-6",
    category: "Accessories",
    tags: "Barista, Mixing, Metal",
  },
  {
    id: "6d",
    image: mottaTamper,
    name: "ESPRESSO TAMPER",
    price: 32.99,
    introText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam id illo, similique recusandae impedit expedita.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quo libero architecto quas minima recusandae fugiat vitae tempore ut similique?",
    moreInfo: {
      weight: "0.5kg",
      dimensions: "5 x 3 x 3.5 cm ",
    },
    sku: "AB513-4",
    category: "Accessories",
    tags: "Tamper, Espresso, Manual",
  },
];

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
            <Route path="/shop" element={<Shop ShopData={ShopData} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<Product ShopData={ShopData} />} />
          </Routes>
          <Modal showModal={showModal} setShowModal={setShowModal} menuBtnScroll={menuBtnScroll} />
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
