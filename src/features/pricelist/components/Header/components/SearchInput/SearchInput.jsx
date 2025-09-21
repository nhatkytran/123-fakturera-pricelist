import { IoSearch } from 'react-icons/io5';
import styles from './SearchInput.module.css';

/**
 * Search input component.
 * @param {Object} props The props object.
 * @param {string} props.name The name of the input.
 * @param {string} props.placeholder The placeholder text for the input.
 * @param {string} props.value The value of the input.
 * @param {function} props.onChange The function to call when the input value changes.
 */
export default function SearchInput({ name, placeholder, value, onChange }) {
  /**
   * Handle input change.
   * @param {Event} event The event object.
   */
  const handleInputChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.searchBox}>
      <input
        className={styles.searchInput}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
      <IoSearch size={20} className={styles.searchIcon} />
    </div>
  );
}
