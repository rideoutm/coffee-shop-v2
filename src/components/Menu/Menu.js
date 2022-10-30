import "./Menu.scss";
import { useState, useRef, useEffect } from "react";

export default function Menu() {
  const [firstMenuAnim, setFirstMenuAnim] = useState();
  const [secondMenuAnim, setSecondMenuAnim] = useState();

  const firstRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setFirstMenuAnim(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(firstRef.current);
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(firstRef.current);
  }, []);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setSecondMenuAnim(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer2.unobserve(firstRef.current);
        }
      },
      { threshold: 0.7 }
    );

    observer2.observe(firstRef.current);
  }, []);

  return (
    <div className="menu">
      <h3 className="menu__sub-header">Our</h3>
      <h2 className="menu__header">MENU</h2>
      <div className="menu__container">
        <div
          ref={firstRef}
          className={firstMenuAnim ? "menu__first--anim" : "menu__first"}
        >
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
        <div
          ref={firstRef}
          className={secondMenuAnim ? "menu__second--anim" : "menu__second"}
        >
          <div className="menu__item">
            <div className="menu__item-title">ICED CAFE AMERICANO</div>
            <div className="menu__item-desc">
              Espresso topped with hot water
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">ICED CAPPUCINO</div>
            <div className="menu__item-desc">
              Espresso topped with milk foam
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">ICED ESPRESSO</div>
            <div className="menu__item-desc">
              Signature espresso shot with robust flavor
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">ICED CAFE LATTE</div>
            <div className="menu__item-desc">
              Signature espresso with milk, topped with foam
            </div>
          </div>
          <div className="menu__item">
            <div className="menu__item-title">ICED CARAMEL MACCHIATO</div>
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
