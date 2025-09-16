import SearchInput from './components/SearchInput';
import styles from './Pricelist.module.css';

/** Pricelist component. */
export default function Pricelist() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.searchContainer}>
          <SearchInput placeholder="Search Article No..." />
          <SearchInput placeholder="Search Product ..." />
        </div>
        <div>Actions</div>
      </header>
    </>
  );
}
