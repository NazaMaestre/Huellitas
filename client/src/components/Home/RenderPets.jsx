import React, { useState } from "react";
import styles from "./home.module.css";
import Card from "../Card/Card.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const renderizarPetCards = (allPets, cantidad) => {
    return allPets.slice(0, cantidad).map((pet) => {
      return <Card pets={pet} key={pet.id} />;
    });
  };

export default function RenderPets() {
  const allPets = useSelector((state) => state.pets);
  const [more, setMore] = useState({
    pet: false,
    fundacion: false,
    campaign: false,
  });
  return (
    <>
      <div data-aos="fade-up" className={styles.cards}>
        {more.pet ? (
          <>{renderizarPetCards(allPets, 6)}</>
        ) : (
          <>{renderizarPetCards(allPets, 3)}</>
        )}
      </div>
      <div data-aos="fade-up" className={styles.cards}>
        {more.pet ? (
          <>
            <button
              className={styles.claseboton}
              onClick={() => setMore({ ...more, pet: false })}
            >
              VER MENOS
            </button>
            <button className={styles.claseboton}>
              <Link to="/Adoptar" className={styles.linkText}>
                VER TODOS
              </Link>
            </button>
          </>
        ) : (
          <>
            <button
              className={styles.claseboton}
              onClick={() => setMore({ ...more, pet: true })}
            >
              VER MAS
            </button>
          </>
        )}
      </div>
    </>
  );
}
