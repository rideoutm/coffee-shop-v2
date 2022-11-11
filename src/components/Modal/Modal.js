import "./Modal.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Modal({ showModal, setShowModal, menuBtnScroll }) {
  const navigate = useNavigate();
  let location = useLocation();

  const routeChange = () => {
    let path = "/#menuId";

    if (location.hash !== path) {
      setShowModal(false);
      navigate(path);
      setTimeout(() => {
        menuBtnScroll();
      }, 1000);
    }
    // if (location.pathname !== path)
    else {
      setShowModal(false);
      menuBtnScroll();
    }

    console.log(location);
  };

  // const handleMenuClick = () => {
  //   menuBtnScroll();
  // };
  return (
    <div className={showModal ? "modal" : "modal--hidden"}>
      <div className="modal__menu">
        <ul className="modal__menu-list">
          <Link to="/">
            <li
              onClick={() => setShowModal(false)}
              className="modal__menu-list-item"
            >
              <span className="modal__menu-list-item-span">HOME</span>
            </li>
          </Link>

          <li onClick={() => routeChange()} className="modal__menu-list-item">
            <span className="modal__menu-list-item-span">MENU</span>
          </li>

          <Link to="/blog/nv6lvipxkg">
            <li
              onClick={() => setShowModal(false)}
              className="modal__menu-list-item"
            >
              <span className="modal__menu-list-item-span">BLOG</span>
            </li>
          </Link>
          <Link to="/shop">
            <li
              onClick={() => setShowModal(false)}
              className="modal__menu-list-item"
            >
              <span className="modal__menu-list-item-span">SHOP</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
