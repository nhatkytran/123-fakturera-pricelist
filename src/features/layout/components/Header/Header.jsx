import { useAppLoading } from '@/shared/hooks';
import UserDisplay from './components/UserDisplay';
import SidebarTrigger from './components/SidebarTrigger';
import Language from './components/Language';
import styles from './Header.module.css';

/** Header component. */
export default function Header() {
  const { isLoading } = useAppLoading();

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <UserDisplay />
        <SidebarTrigger />
        <Language />
      </header>
      {isLoading && <div className={styles.loadingBar} />}
    </div>
  );
}
