import { FaArrowDownLong } from 'react-icons/fa6';
import { MdMoreHoriz } from 'react-icons/md';
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
      <div className={styles.table}>
        <div className={styles.tableRow}>
          <input className={styles.tableCell} type="number" name="article" value={1234567890} />
          <input
            className={styles.tableCell}
            type="text"
            name="product"
            value={'This is a test product with fifty characters this!'}
          />
          <input className={styles.tableCell} type="number" name="inPrice" value={900500} />
          <input className={styles.tableCell} type="number" name="price" value={1500800} />
          <input className={styles.tableCell} type="text" name="unit" value={'kilomiters/hour'} />
          <input className={styles.tableCell} type="number" name="inStock" value={2500600} />
          <input
            className={styles.tableCell}
            type="text"
            name="description"
            value={'This is the description with fifty characters this'}
          />
          <div>
            <MdMoreHoriz />
          </div>
        </div>
      </div>
    </div>
  );
}
