import "./Modal.scss";
import { Link } from "react-router-dom";

export default function Modal({ showModal, setShowModal }) {
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
          <li
            onClick={() => setShowModal(false)}
            className="modal__menu-list-item"
          >
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
          <li
            onClick={() => setShowModal(false)}
            className="modal__menu-list-item"
          >
            <span className="modal__menu-list-item-span">SHOP</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
