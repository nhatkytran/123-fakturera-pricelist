import { IoSearch } from 'react-icons/io5';
import styles from './SearchInput.module.css';

/**
 * Search input component.
 * @param {Object} props The props object.
 * @param {string} props.name The name of the input.
 * @param {string} props.placeholder The placeholder text for the input.
 */
export default function SearchInput({ name, placeholder }) {
  return (
    <div className={styles.searchBox}>
      <input className={styles.searchInput} type="text" name={name} placeholder={placeholder} />
      <IoSearch size={20} className={styles.searchIcon} />
    </div>
  );
}
