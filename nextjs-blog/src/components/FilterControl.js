import React from "react";
import styles from "@/styles/Home.module.css";

function FilterControl() {
  return (
    <div className={styles.filterControl}>
      <div className={styles.filterControlHeader}>
        <button className={styles.clearButton}>Clear all</button>
        <div>Filter</div>

        <button className={styles.closeButton}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4L13 13"
              stroke="#424242"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M13 4L4 13"
              stroke="#424242"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <hr></hr>
      <div className={styles.filterDetails}>
        <div className={styles.friendStatus}>Friend Status</div>
        <div>Close Friends</div>
        <div>Super Close Friends</div>
        {/* <label>
          Test
          <input type="checkbox" />
        </label> */}
      </div>
        <button className={styles.applyButton}>Apply</button>
    </div>
  );
}

export default FilterControl;
