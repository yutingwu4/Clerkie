import React from 'react'
import FilterButton from '@/components/FilterButton'
import styles from "@/styles/Home.module.css";

export default function FilterNav() {
  return (
    <div className={styles.filterContainer}>
      <FilterButton />
      <div className={styles.vl}></div>
      <a>Clear all</a>
    </div>
  );
}
