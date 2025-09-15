import styles from './Content.module.css';

/** Content component */
export default function Content({ children }) {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <aside className={styles.sidebar}>Side bar</aside>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
