import { FaArrowRightLong } from 'react-icons/fa6';
import { MdMoreHoriz } from 'react-icons/md';
import clsx from 'clsx';

import stylesContent from '@/features/pricelist/components/Content/Content.module.css';
import styles from './Article.module.css';

/**
 * Article component.
 * @param {Object} props Props object.
 * @param {Object} props.article Article object.
 * @param {boolean} props.isActive Is active article.
 */
export default function Article({ article, isActive }) {
  const { articleNo, productService, inPrice, price, unit, inStock, description } = article;

  return (
    <div className={clsx(stylesContent.gridTemplate, styles.tableRow, isActive && styles.active)}>
      <FaArrowRightLong size={18} color="#0f7ee9" className={styles.tableRowArrow} />
      <input className={styles.tableCell} type="number" name="articleNo" value={articleNo} />
      <input className={styles.tableCell} type="text" name="productService" value={productService} />
      <input className={styles.tableCell} type="number" name="inPrice" value={inPrice} />
      <input className={styles.tableCell} type="number" name="price" value={price} />
      <input className={styles.tableCell} type="text" name="unit" value={unit} />
      <input className={styles.tableCell} type="number" name="inStock" value={inStock} />
      <input className={styles.tableCell} type="text" name="description" value={description} />
      <div className={styles.tableCellIcon}>
        <MdMoreHoriz size={18} />
      </div>
    </div>
  );
}
