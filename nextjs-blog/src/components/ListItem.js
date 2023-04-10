import React from 'react'
import styles from "@/styles/Home.module.css";
// import HomeIcon from "@/assets/homeIcon.svg"

function ListItem() {
  return (
    <div className={styles.listItemContainer}>
      <div className={styles.listItem}>
        {/* <img src={HomeIcon} alt='home icon' /> */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4.43984"
            y="4.43984"
            width="15.12"
            height="15.12"
            rx="1.32"
            stroke="#EAEAEA"
            strokeWidth="1.2"
          />
          <path
            d="M5 10.75L19 10.75"
            stroke="#EAEAEA"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M9.75 11L9.75 19"
            stroke="#EAEAEA"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        <div>Home</div>
      </div>
      <div className={styles.listItem}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16.7171"
            cy="9.82941"
            r="1.61164"
            stroke="#EAEAEA"
            strokeWidth="0.75"
          />
          <path
            d="M19.7632 15.328C19.7632 13.5725 18.3401 12.1494 16.5846 12.1494C15.8692 12.1494 15.2089 12.3858 14.6777 12.7847"
            stroke="#EAEAEA"
            strokeWidth="0.85"
            strokeLinecap="round"
          />
          <circle cx="10.3575" cy="8.92143" r="3.13139" stroke="#EAEAEA" />
          <path
            d="M15.8048 17.9998C15.8048 14.9915 13.3661 12.5527 10.3577 12.5527C7.34939 12.5527 4.91064 14.9915 4.91064 17.9998"
            stroke="#EAEAEA"
            strokeLinecap="round"
          />
        </svg>

        <div>Friends</div>
      </div>
    </div>
  );
}

export default ListItem;