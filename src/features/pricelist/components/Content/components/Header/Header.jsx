import clsx from 'clsx';
import { FaArrowDownLong } from 'react-icons/fa6';

import stylesContent from '@/features/pricelist/components/Content/Content.module.css';
import styles from './Header.module.css';

/** Header component. */
export default function Header() {
  return (
    <header className={clsx(stylesContent.gridTemplate, styles.header)}>
      <div className={styles.headerCell}>
        Article No.
        <FaArrowDownLong color="#3be6e6" className={styles.headerCellArrow} />
      </div>
      <div className={styles.headerCell}>
        Product/Service
        <FaArrowDownLong color="#73e287" className={styles.headerCellArrow} />
      </div>
      <div name="inPrice" className={styles.headerCell}>
        In Price
      </div>
      <div className={styles.headerCell}>Price</div>
      <div name="unit" className={styles.headerCell}>
        Unit
      </div>
      <div className={styles.headerCell}>In Stock</div>
      <div name="unitPlaceholder" className={styles.headerCell}>
        Unit
      </div>
      <div name="description" className={styles.headerCell}>
        Description
      </div>
      <div></div>
    </header>
  );
}
