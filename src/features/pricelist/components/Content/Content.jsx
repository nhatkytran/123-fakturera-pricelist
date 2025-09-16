import Header from './components/Header';
import Article from './components/Article';
import styles from './Content.module.css';

/** Content component. */
export default function Content() {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.table}>
        <Article />
      </div>
    </div>
  );
}
