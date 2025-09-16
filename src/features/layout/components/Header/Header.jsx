import UserDisplay from './components/UserDisplay';
import SidebarTrigger from './components/SidebarTrigger';
import Language from './components/Language';
import styles from './Header.module.css';

/** Header component. */
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        {/* <UserDisplay /> */}
        <SidebarTrigger />
        <Language />
      </header>
    </div>
  );
}
