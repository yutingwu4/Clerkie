import React from "react";
import styles from "@/styles/Home.module.css";
import Chip from "@/components/Chip";

function Card() {
  return (
    <div className={styles.card}>
      <div>
        George Bryant
        <Chip />
      </div>
      <div className={styles.detail}>
        <div>georgebryant@gmail.com</div>
        <svg
          width="4"
          height="5"
          viewBox="0 0 4 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="2.5" r="2" fill="#ABABAB" />
        </svg>
        <div>(393) 292-0983</div>
      </div>
    </div>
  );
}

export default Card;
