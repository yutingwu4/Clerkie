import React, { useState } from "react";
import FilterButton from "@/components/FilterButton";
import styles from "@/styles/Home.module.css";
import FilterControl from "./FilterControl";

export default function FilterNav() {
  const [filtermodalOpen, setFiltermodalOpen] = useState(false);

  return (
    <>
      <div className={styles.filterContainer}>
        <FilterButton
          filtermodalOpen={filtermodalOpen}
          onClick={() => setFiltermodalOpen(true)}
        />
        <div className={styles.vl}></div>
        <a>Clear all</a>
      </div>

      {filtermodalOpen && (
        <div className={styles.filterModal}>
          <FilterControl setFiltermodalOpen={setFiltermodalOpen} />
        </div>
      )}
    </>
  );
}
