import "./Menu.scss";

export default function Menu() {
  return (
    <div className="menu">
      <h3 className="menu__sub-header">Our</h3>
      <h2 className="menu__header">Menu</h2>
      <div className="menu__container">
        <div className="menu__first">
          <div className="menu__item">
            <div className="menu__item-title">CAFE AMERICANO</div>
            <div className="menu__item-desc">
              Espresso topped with hot water
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">CAPPUCINO</div>
            <div className="menu__item-desc">
              Espresso topped with milk foam
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">ESPRESSO</div>
            <div className="menu__item-desc">
              Signature espresso shot with robust flavor
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">CAFE LATTE</div>
            <div className="menu__item-desc">
              Signature espresso with milk, topped with foam
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">CARAMEL MACCHIATO</div>
            <div className="menu__item-desc">
              Signature espresso, steamed milk and vanilla syrup topped with
              caramel.
            </div>
          </div>
        </div>
        <div className="menu__second">
          <div className="menu__item">
            <div className="menu__item-title">CAFE AMERICANO</div>
            <div className="menu__item-desc">
              Espresso topped with hot water
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">CAPPUCINO</div>
            <div className="menu__item-desc">
              Espresso topped with milk foam
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">ESPRESSO</div>
            <div className="menu__item-desc">
              Signature espresso shot with robust flavor
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">CAFE LATTE</div>
            <div className="menu__item-desc">
              Signature espresso with milk, topped with foam
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">CARAMEL MACCHIATO</div>
            <div className="menu__item-desc">
              Signature espresso, steamed milk and vanilla syrup topped with
              caramel.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
