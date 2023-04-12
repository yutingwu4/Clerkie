import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import Page from "@/components/Page";
import Card from "@/components/Card";
import styles from "@/styles/Home.module.css";
import FilterNav from "@/components/FilterNav";
import { getAllPeople } from '@/api/people';
import LoadingCard from '@/components/LoadingCard';

export default function Home() {
  const [selectedStatuses, setSelectedStatuses] = useState({});
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalDocs, setTotalDocs] = useState(null);
  const scrollRef = useRef();

  const filtersEnabled = useMemo(() => {
    return Object.values(selectedStatuses).filter(el => el).length;
  }, [selectedStatuses]);

  useEffect(() => {
    console.log('page', page)
    const fetchAllPeople = async () => {
        setLoading(true);
        const fetchedData = await getAllPeople(page);
        setData(prev => [...prev, ...fetchedData.results]);
        setTotalDocs(fetchedData.size);
        setLoading(false);
    }
    fetchAllPeople();
  }, [page])

  const handleScroll = useCallback(() => {
    // console.log("height", scrollRef.current.scrollHeight);
    // console.log("top", scrollRef.current.scrollTop);
    // console.log(scrollRef.current.clientHeight);

    if (loading || totalDocs === data.length) return;
    if (
      scrollRef.current.clientHeight + scrollRef.current.scrollTop + 1 >=
      scrollRef.current.scrollHeight
    )
      setPage((prev) => prev + 1);
  }, [loading, scrollRef.current]);

  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, [handleScroll, scrollRef.current]);

  return (
    <Page title="Friends">
      <FilterNav
        filtersEnabled={filtersEnabled}
        onApply={setSelectedStatuses}
        onClear={() => setSelectedStatuses({})}
        selectedStatuses={selectedStatuses}
      />
      <div className={styles.cardContainer} ref={scrollRef}>
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
        {loading && <LoadingCard />}
      </div>
    </Page>
  );
}
