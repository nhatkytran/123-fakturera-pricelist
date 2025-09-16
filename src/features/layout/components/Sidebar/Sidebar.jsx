import styles from './Sidebar.module.css';

/** Sidebar component. */
export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerText}>Menu</div>
        </header>
        <div>Invoices</div>
      </div>
    </aside>
  );
}
