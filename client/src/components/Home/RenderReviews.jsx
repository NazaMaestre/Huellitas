import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import styles2 from "./renderReviews.module.css";
import { Icon } from '@iconify/react';
import axios from "axios";
import { LINK_BACK } from "../../Utils/variablesDeploy";
import { useSelector } from "react-redux";
const backgrounds = ["rgba(54,181,255,0.2)", "rgba(120,142,255,0.2)", "rgba(117,227,234,0.2)"]
const MAX_CHARACTERS = 250;


const renderStars = (cantidad) => {
    let stars = []
    for (let i = 0; i < cantidad; i++) {
        stars.push(<Icon key={i} icon="material-symbols:star" />)
    }
    return stars;
}

const renderizarReviews = (allReviews, cantidad) => {
    return allReviews.slice(0, cantidad).map((review, index) => {
      return (
        <div key={index} className={styles2.reviewContainer} data-aos="fade-up" style={{background: backgrounds[index%3]}}>
            <Link to ={`/userDetail/${review.id}`}>
              <img src={review.image} alt="nf" className={styles2.userImg} />
            </Link>
            <div>
              <h2 className={styles2.opinion}>{review.name}:</h2>
              <h4 className={styles2.opinion}>{review.review.slice(0, MAX_CHARACTERS)}</h4>
            </div>
            <span className={styles2.containerStars}>
                {
                    renderStars(review.stars)
                }
            </span>
        </div>
      )
    });
};

export default function RenderReviews() {

  let [reviews, setReviews] = useState([])
  let [more, setMore] = useState(false)
  let flagReview = useSelector(state => state.flagReview)

  useEffect(() => {
    axios(`${LINK_BACK}/reviews`)
    .then(data => setReviews(data.data))
  }, [flagReview])

  const handleShow = () => {
    setMore(!more)
  }

  return (
    <>
      <h1 data-aos="fade-up" className={styles.categoria}>
        ¡Opiniones!
      </h1>
      {more ? 
        <>
          {renderizarReviews(reviews, reviews.length)}
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button style={{marginBottom: "50px"}} onClick={handleShow} className={styles.claseboton}>VER MENOS</button>
          </div>
        </>
      : 
        <>
          {renderizarReviews(reviews, 3)}
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button style={{marginBottom: "50px"}} onClick={handleShow} className={styles.claseboton}>VER MAS</button>
          </div>
        </>
      }
    </>
  );
}
