import React from "react";
import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";
import FilterControl from "@/components/FilterControl";
import LoadingCard from "@/components/LoadingCard";

function HomePage() {
  return (
    <>
      {/* <div className={styles.home}>Welcome to the Clerkie Challenge!</div> */}
      <div className={styles.cardContainer}>
        {/* <Card /> */}
        <LoadingCard />
      </div>
    </>
  );
}

export default HomePage;
