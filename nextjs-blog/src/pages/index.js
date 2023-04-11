import Page from "@/components/Page";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <Page title='Home'>
      <div className={styles.home}>Welcome to the Clerkie Challenge!
      </div>
    </Page>
  );
}
