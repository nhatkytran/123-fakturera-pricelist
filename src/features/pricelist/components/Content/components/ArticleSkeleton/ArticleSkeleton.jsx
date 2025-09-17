import stylesContent from '@/features/pricelist/components/Content/Content.module.css';
import styles from './ArticleSkeleton.module.css';

/** Article skeleton component. */
export default function ArticleSkeleton() {
  return (
    <div className={stylesContent.gridTemplate}>
      <span className={styles.tableCellSkeleton} />
      <span className={styles.tableCellSkeleton} />
      <span className={styles.tableCellSkeleton} />
      <span className={styles.tableCellSkeleton} />
      <span className={styles.tableCellSkeleton} />
      <span className={styles.tableCellSkeleton} />
      <span className={styles.tableCellSkeleton} />
      <span className={styles.tableCellSkeleton} />
    </div>
  );
}
