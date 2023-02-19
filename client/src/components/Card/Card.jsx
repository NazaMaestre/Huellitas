import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
export default function Card({ pets }) {

  let user = JSON.parse(window.localStorage.getItem("loggedUser"))?.data;
  let [seguido, setSeguido] = useState(false);
  const navigate = useNavigate();

  useEffect (() => {
    if (user?.id && pets?.id) {
      axios(`http://localhost:3001/follow/${user.id}/${pets.id}`)
      .then(data => setSeguido(data.data.seguir))
    }
  }, [])

  const handleDetail = () => {
    navigate(`/detail/${pets.id}`)
  }

  const handleFollow = () => {
    setSeguido(!seguido);
    if (user?.id && pets?.id) {
      axios.put(`http://localhost:3001/follow?userId=${user.id}&petId=${pets.id}&seguir=${!seguido}`)
    }
  }

  return (
    <div key={pets.id} className={styles.card}>
        <div className={styles.center}>
          <img onClick={handleDetail} src={pets.image} alt={pets.name} className={styles.img} />
          <h1 onClick={handleDetail} className={styles.name}>{pets.name}</h1>
          <h2 onClick={handleDetail} className={styles.name}>{pets.giver}</h2>
          {seguido ? 
          <button onClick={handleFollow} className={styles.corazonFollow}>❤</button>
          :
          <button onClick={handleFollow} className={styles.corazonUnfollow}>♡</button>
          }
        </div>
    </div>
  );
}
