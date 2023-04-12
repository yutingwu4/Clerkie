import React, { useState } from "react";
import FilterButton from "@/components/FilterButton";
import styles from "@/styles/Home.module.css";
import FilterControl from "./FilterControl";

export default function FilterNav({ onApply, selectedStatuses, filtersEnabled, onClear }) {
  const [filtermodalOpen, setFiltermodalOpen] = useState(false);

  return (
    <div>
      <div className={styles.filterContainer}>
        <FilterButton
          filtersEnabled={filtersEnabled}
          filtermodalOpen={filtermodalOpen}
          onClick={() => setFiltermodalOpen(true)}
        />
        <div className={styles.vl}></div>
        <button
          onClick={onClear}
          className={filtersEnabled ? styles.clearButtonOn : styles.clearButton}
        >
          Clear all
        </button>
      </div>
      {filtermodalOpen && (
        <div className={styles.filterModal}>
          <FilterControl
            onApply={onApply}
            onClose={() => setFiltermodalOpen(false)}
            selectedStatuses={selectedStatuses}
          />
        </div>
      )}
    </div>
  );
}
