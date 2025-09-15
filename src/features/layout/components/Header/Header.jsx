import styles from './Header.module.css';

/** Header component. */
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div>User</div>
        <div>Language</div>
      </header>
    </div>
  );
}
