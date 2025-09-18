import { Controller } from 'react-hook-form';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdMoreHoriz } from 'react-icons/md';
import clsx from 'clsx';

import stylesContent from '@/features/pricelist/components/Content/Content.module.css';
import styles from './Article.module.css';

/**
 * Article component.
 * @param {Object} props Props object.
 * @param {Object} props.control Control object.
 * @param {number} props.index Index of the article.
 * @param {boolean} props.isActive Is active article.
 * @param {Function} props.onArticleClick Article click handler.
 */
export default function Article({ control, index, isActive, onArticleClick }) {
  return (
    <div
      onClick={onArticleClick}
      className={clsx(stylesContent.gridTemplate, styles.tableRow, isActive && styles.active)}
    >
      <FaArrowRightLong size={18} color="#0f7ee9" className={styles.tableRowArrow} />
      <Controller
        control={control}
        name={`products.${index}.articleNo`}
        render={({ field }) => <input className={styles.tableCell} type="number" data-field="articleNo" {...field} />}
      />
      <Controller
        control={control}
        name={`products.${index}.productService`}
        render={({ field }) => (
          <input className={styles.tableCell} type="text" data-field="productService" {...field} />
        )}
      />
      <Controller
        control={control}
        name={`products.${index}.inPrice`}
        render={({ field }) => <input className={styles.tableCell} type="number" data-field="inPrice" {...field} />}
      />
      <Controller
        control={control}
        name={`products.${index}.price`}
        render={({ field }) => <input className={styles.tableCell} type="number" data-field="price" {...field} />}
      />
      <Controller
        control={control}
        name={`products.${index}.unit`}
        render={({ field }) => <input className={styles.tableCell} type="text" data-field="unit" {...field} />}
      />
      <Controller
        control={control}
        name={`products.${index}.inStock`}
        render={({ field }) => <input className={styles.tableCell} type="number" data-field="inStock" {...field} />}
      />
      <Controller
        control={control}
        name={`products.${index}.unit`}
        render={({ field }) => (
          <input className={styles.tableCell} type="text" data-field="unitPlaceholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name={`products.${index}.description`}
        render={({ field }) => <input className={styles.tableCell} type="text" data-field="description" {...field} />}
      />
      <div className={styles.tableCellIcon}>
        <MdMoreHoriz size={18} />
      </div>
    </div>
  );
}
