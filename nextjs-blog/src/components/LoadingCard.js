import React from "react";
import styles from "@/styles/Home.module.css";

function LoadingCard() {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingLeft}>
        <div className={styles.loadingLT}></div>
        <div className={styles.loadingLB}></div>
      </div>
      <div className={styles.loadingRight}>
        <div className={styles.loadingRT}></div>
        <div className={styles.loadingRB}></div>
      </div>
    </div>
  );
}

export default LoadingCard;
