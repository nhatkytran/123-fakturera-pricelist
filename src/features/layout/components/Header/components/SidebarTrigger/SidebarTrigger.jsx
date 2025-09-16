import { RiMenuLine } from 'react-icons/ri';
import styles from './SidebarTrigger.module.css';

/** Sidebar trigger component. */
export default function SidebarTrigger() {
  return (
    <div className={styles.container}>
      <RiMenuLine color="var(--main-white)" className={styles.menuIcon} />
    </div>
  );
}
