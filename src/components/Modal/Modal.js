import "./Modal.scss";

export default function Modal({ showModal }) {
  return (
    <div className={showModal ? "modal" : "modal--hidden"}>
      <div className="modal__menu">
        <ul className="modal__menu-list">
          <li className="modal__menu-list-item">
            <span className="modal__menu-list-item-span">HOME</span>
          </li>
          <li className="modal__menu-list-item">
            <span className="modal__menu-list-item-span">MENU</span>
          </li>
          <li className="modal__menu-list-item">
            <span className="modal__menu-list-item-span">BLOG</span>
          </li>
          <li className="modal__menu-list-item">
            <span className="modal__menu-list-item-span">SHOP</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
