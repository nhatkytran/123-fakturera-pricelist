import { FaArrowDownLong } from 'react-icons/fa6';
import styles from './Content.module.css';

/** Content component. */
export default function Content() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerCell}>
          Article No.
          <FaArrowDownLong color="#3be6e6" />
        </div>
        <div className={styles.headerCell}>
          Product/Service
          <FaArrowDownLong color="#73e287" />
        </div>
        <div className={styles.headerCell}>In Price</div>
        <div className={styles.headerCell}>Price</div>
        <div className={styles.headerCell}>Unit</div>
        <div className={styles.headerCell}>In Stock</div>
        <div className={styles.headerCell}>Description</div>
        <div></div>
      </header>
    </div>
  );
}
