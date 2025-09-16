import { RiMenuLine } from 'react-icons/ri';
import styles from './SidebarTrigger.module.css';

/** Sidebar trigger component. */
export default function SidebarTrigger() {
  return (
    <div className={styles.container}>
      <RiMenuLine size="36" color="var(--main-white)" />
    </div>
  );
}
