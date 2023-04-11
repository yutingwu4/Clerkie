import { useState, useMemo, useEffect } from 'react';
import Page from "@/components/Page";
import Card from "@/components/Card";
import styles from "@/styles/Home.module.css";
import FilterNav from "@/components/FilterNav";
import { getAllPeople } from '@/api/people';
import LoadingCard from "@/components/LoadingCard";

export default function Home() {
  const [selectedStatuses, setSelectedStatuses] = useState({});
  const [data, setData] = useState([]);

  const filtersEnabled = useMemo(() => {
    console.log('filtersEnabled', Object.values(selectedStatuses).filter(el => el).length)
    return Object.values(selectedStatuses).filter(el => el).length;
  }, [selectedStatuses]);

  useEffect(() => {
    const fetchAllPeople = async () => {
        const fetchedData = await getAllPeople();
        setData(fetchedData);
    }
    fetchAllPeople();
  }, [])

  return (
    <Page title="Friends">
      <FilterNav
        filtersEnabled={filtersEnabled}
        onApply={setSelectedStatuses}
        onClear={() => setSelectedStatuses({})}
        selectedStatuses={selectedStatuses}
      />
      <div className={styles.cardContainer}>
        {data
          .filter(
            (person) => !filtersEnabled || selectedStatuses[person.status]
          )
          .map((person, i) => (
            <Card
              key={i}
              name={person.name}
              email={person.email}
              phone={person.phone}
              status={person.status}
            />
          ))}
          <LoadingCard />
      </div>
    </Page>
  );
}
