import clsx from 'clsx';

import { MENU_ITEMS } from '@/features/layout/components/data';
import styles from './Sidebar.module.css';

/** Sidebar component. */
export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerText}>Menu</div>
        </header>
        <ul className={styles.menu}>
          {MENU_ITEMS.map(({ text, Icon, iconColor, status }) => (
            <li className={clsx(styles.menuItem, status === 'active' && styles.active)}>
              <Icon className={styles.menuItemIcon} size={20} color={iconColor} />
              <p className={clsx(styles.menuItemText, status === 'inactive' && styles.inactive)}>{text}</p>
              <span className={styles.statusPoint} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
