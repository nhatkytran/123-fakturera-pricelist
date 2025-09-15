import UserDisplay from './components/UserDisplay';
import Language from './components/Language';
import styles from './Header.module.css';

/** Header component. */
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <UserDisplay />
        <Language />
      </header>
    </div>
  );
}
