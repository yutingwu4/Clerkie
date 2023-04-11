import React from "react";
import styles from "@/styles/Home.module.css";
import FilterButtonIcon from "@/components/FilterButtonIcon";

function FilterButton({ onClick, filtermodalOpen, filtersEnabled }) {
  return (
    <div
      className={
        filtermodalOpen || filtersEnabled ? styles.filterOpen : styles.filter
      }
      onClick={onClick}
    >
      <FilterButtonIcon dark={filtermodalOpen || filtersEnabled} />
      {filtersEnabled > 0 && (
        <div className={styles.filterCount}>{filtersEnabled}</div>
      )}
    </div>
  );
}

export default FilterButton;
