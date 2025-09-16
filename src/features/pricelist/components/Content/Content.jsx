import { FaArrowRightLong } from 'react-icons/fa6';
import { MdMoreHoriz } from 'react-icons/md';
import clsx from 'clsx';

import styles from './Content.module.css';
import Header from './components/Header';

/** Content component. */
export default function Content() {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.table}>
        <div className={clsx(styles.gridTemplate, styles.tableRow)}>
          <FaArrowRightLong size={18} color="#0f7ee9" className={styles.tableRowArrow} />
          <input className={styles.tableCell} type="number" name="article" value={1234567890} />
          <input
            className={styles.tableCell}
            type="text"
            name="product"
            value={'This is a test product with fifty characters this!'}
          />
          <input className={styles.tableCell} type="number" name="inPrice" value={900500} />
          <input className={styles.tableCell} type="number" name="price" value={1500800} />
          <input className={styles.tableCell} type="text" name="unit" value={'kilometers/hour'} />
          <input className={styles.tableCell} type="number" name="inStock" value={2500600} />
          <input
            className={styles.tableCell}
            type="text"
            name="description"
            value={'This is the description with fifty characters this'}
          />
          <div className={styles.tableCellIcon}>
            <MdMoreHoriz size={18} color="#0f7ee9" />
          </div>
        </div>
      </div>
    </div>
  );
}
