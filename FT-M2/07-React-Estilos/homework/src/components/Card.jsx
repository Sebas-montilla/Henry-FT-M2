import React from "react";
import styles from "../modules css/Card.module.css";

function Card(props) {
  // acá va tu código
  return (
    <div className={styles.card}>
      <button>X</button>
      <h1 className={styles.title}>{props.name}</h1>
      <div className={styles.tpmData}>
        <div>
          <h6 className={styles.data}>Max</h6>
          <p className={styles.dataTmp}>{props.max}</p>
        </div>
        <div>
          <h6 className={styles.data}>Min</h6>
          <p className={styles.dataTmp}>{props.min}</p>
        </div>
      </div>
      <div>
        <img
          className={styles.img}
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
