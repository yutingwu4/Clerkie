import React from 'react'
import styles from "@/styles/Home.module.css";

function Chip({status}) {
  return (
    <>
      {(status === "Close Friends" && (
        <div className={styles.chipBlue}>Close Friends</div>
      )) ||
        (status === "Super Close Friends" && (
          <div className={styles.chipGreen}>Super Close Friends</div>
        ))}
    </>
  );
}

export default Chip