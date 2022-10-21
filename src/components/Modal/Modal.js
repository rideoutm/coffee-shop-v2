import "./Modal.scss";

export default function Modal({ showModal }) {
  return (
    <div className={showModal ? "modal" : "modal--hidden"}>
      <div className="modal__menu">
        <ul className="modal__menu-list">
          <li className="modal__menu-list-item">HOME</li>
          <li className="modal__menu-list-item">MENU</li>
          <li className="modal__menu-list-item">BLOG</li>
          <li className="modal__menu-list-item">SHOP</li>
        </ul>
      </div>
    </div>
  );
}
