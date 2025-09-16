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
  );
}
