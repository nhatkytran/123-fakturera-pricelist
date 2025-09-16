import { IoSearch } from 'react-icons/io5';
import styles from './SearchInput.module.css';

/**
 * Search input component.
 * @param {string} placeholder The placeholder text for the input.
 */
export default function SearchInput({ placeholder }) {
  return (
    <div className={styles.searchBox}>
      <input className={styles.searchInput} type="text" placeholder={placeholder} />
      <IoSearch size={20} className={styles.searchIcon} />
    </div>
  );
}
