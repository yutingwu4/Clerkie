import React from "react";
import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";

function HomePage() {
  return (
    <>
      {/* <div className={styles.home}>Welcome to the Clerkie Challenge!</div> */}
      <div className={styles.cardContainer}>
        <Card />
      </div>
    </>
  );
}

export default HomePage;
