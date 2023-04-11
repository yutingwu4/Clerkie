import React, { useState, useEffect, useMemo } from "react";
import styles from "@/styles/Home.module.css";

function FilterControl({
  onClose,
  selectedStatuses: extSelectedStatuses,
  onApply,
}) {
  const [selectedStatuses, setSelectedStatuses] = useState(extSelectedStatuses);
  const switchSelectedStatus = (status, enabled) => {
    setSelectedStatuses((prev) => {
      return {
        ...prev,
        [status]: enabled,
      };
    });
  };

  const filtersEnabledInt = useMemo(() => {
    return Object.values(selectedStatuses).filter(el => el).length;
  }, [selectedStatuses]);

  useEffect(() => {
    setSelectedStatuses(extSelectedStatuses);
  }, [extSelectedStatuses]);

  const handleChange = (e) => {
    let name = e.target.name;
    let enabled = e.target.checked;
    switchSelectedStatus(name, enabled);
  };

  const handleClearFilter = () => {
    setSelectedStatuses({});
  };

  return (
    <div className={styles.filterControl}>
      <div className={styles.filterControlHeader}>
        <button
          className={
            filtersEnabledInt ? styles.clearButtonOn : styles.clearButton
          }
          onClick={handleClearFilter}
        >
          Clear all
        </button>
        <div>Filter</div>

        <button className={styles.closeButton} onClick={onClose}>
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
        <label>
          Close Friends
          <input
            type="checkbox"
            checked={selectedStatuses["Close Friends"] || false}
            onChange={handleChange}
            name="Close Friends"
          />
        </label>
        <label>
          Super Close Friends
          <input
            type="checkbox"
            checked={selectedStatuses["Super Close Friends"] || false}
            onChange={handleChange}
            name="Super Close Friends"
          />
        </label>
      </div>
      <div className={styles.applyContainer}>
        <button
          onClick={() => {
            onApply(selectedStatuses);
            onClose();
          }}
          className={styles.applyButton}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default FilterControl;
