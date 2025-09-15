import UserDisplay from './components/UserDisplay';
import styles from './Header.module.css';

/** Header component. */
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <UserDisplay />
        <div>Language</div>
      </header>
    </div>
  );
}
