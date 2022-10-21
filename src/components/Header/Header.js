import "./Header.scss";

export default function Header({ handleModal }) {
  return (
    <div className="header">
      <div className="header__logo">COFFEE SHOP</div>
      <div onClick={() => handleModal()} className="header__ham-menu">
        <div className="header__top-line"></div>
        <div className="header__mid-line"></div>
        <div className="header__btm-line"></div>
      </div>
    </div>
  );
}
