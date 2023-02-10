import React, { useState } from "react";
import styles from "./home.module.css";
import CardHome from "./CardHome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// agregar card de fundacion en el return pasando por props los argumentos necesarios
const renderizarFundacionesCards = (allFundaciones, cantidad) => {
    return allFundaciones.slice(0, cantidad).map((fund) => {
        return <CardHome image={fund.image} title={fund.name} subtitle={fund.address}/>;
    });
};

export default function RenderFoundations() {
  const allFundaciones = useSelector((state) => state.fundaciones);
  const [more, setMore] = useState({
    pet: false,
    fundacion: false,
    campaign: false,
  });
  return (
    <>
      <div data-aos="fade-up" className={styles.cards}>
        {more.fundacion ? (
          <>{renderizarFundacionesCards(allFundaciones, 6)}</>
        ) : (
          <>{renderizarFundacionesCards(allFundaciones, 3)}</>
        )}
      </div>
      <div data-aos="fade-up" className={styles.cards}>
        {more.fundacion ? (
          <>
            <button
              className={styles.claseboton}
              onClick={() => setMore({ ...more, fundacion: false })}
            >
              VER MENOS
            </button>
            <button className={styles.claseboton}>
              <Link to="/:any" className={styles.linkText}>
                VER TODOS
              </Link>
            </button>
          </>
        ) : (
          <>
            <button
              className={styles.claseboton}
              onClick={() => setMore({ ...more, fundacion: true })}
            >
              VER MAS
            </button>
          </>
        )}
      </div>
    </>
  );
}