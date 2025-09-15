import styles from './Language.module.css';

/** Language component. */
export default function Language() {
  return (
    <div className={styles.languageContainer}>
      <p className={styles.language}>English</p>
      <img className={styles.languageIcon} src="/images/great-britain.png" alt="Great Britain" />
    </div>
  );
}
