import React from 'react';
import styles from "@/styles/Home.module.css";

function Search({ search, setSearch }) {
  const handleChange = (e) => {
    console.log("value", e.target.value);
    setSearch(e.target.value);
  };


  return (
    <div className={styles.search}>
      <form>
        <label for="searchLabel"></label>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10.7838"
            cy="9.78378"
            r="5.44595"
            fill="white"
            stroke="#ABABAB"
            strokeWidth="1.67568"
          />
          <path
            d="M14.9727 13.9727L19.9997 18.9997"
            stroke="#ABABAB"
            strokeWidth="1.67568"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default Search