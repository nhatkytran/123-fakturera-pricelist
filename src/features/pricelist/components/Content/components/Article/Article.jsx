import { FaArrowRightLong } from 'react-icons/fa6';
import { MdMoreHoriz } from 'react-icons/md';
import clsx from 'clsx';

import stylesContent from '@/features/pricelist/components/Content/Content.module.css';
import styles from './Article.module.css';

/** Article component. */
export default function Article() {
  return (
    <div className={clsx(stylesContent.gridTemplate, styles.tableRow)}>
      <FaArrowRightLong size={18} color="#0f7ee9" className={styles.tableRowArrow} />
      <input className={styles.tableCell} type="number" name="articleNo" value={1234567890} />
      <input
        className={styles.tableCell}
        type="text"
        name="productService"
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
  );
}
