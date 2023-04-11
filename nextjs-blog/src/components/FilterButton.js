import React from 'react'
import styles from "@/styles/Home.module.css";

function FilterButton({onClick}) {

  return (
    <div className={styles.filter} onClick={onClick}>
      <svg
        width="19"
        height="21"
        viewBox="0 0 19 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 3.5H18"
          stroke="#424242"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="3"
          cy="3.5"
          r="2.25"
          fill="white"
          stroke="#424242"
          strokeWidth="1.5"
        />
        <path
          d="M17 10.5H1"
          stroke="#424242"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="3"
          cy="3"
          r="2.25"
          transform="matrix(-1 0 0 1 19 7.5)"
          fill="white"
          stroke="#424242"
          strokeWidth="1.5"
        />
        <path
          d="M2 17.5H18"
          stroke="#424242"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="3"
          cy="17.5"
          r="2.25"
          fill="white"
          stroke="#424242"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export default FilterButton