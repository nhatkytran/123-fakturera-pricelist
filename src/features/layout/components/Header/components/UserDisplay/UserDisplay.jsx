import styles from './UserDisplay.module.css';

/** User display component. */
export default function UserDisplay() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/images/user.png" alt="User" />
        <span className={styles.statusPoint} />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.name}>John Andre</p>
        <p className={styles.company}>Storfjord AS</p>
      </div>
    </div>
  );
}
