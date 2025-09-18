import { useState } from 'react';

import { useGetAllProducts } from '@/queries';
import Header from './components/Header';
import ArticleSkeleton from './components/ArticleSkeleton';
import Articles from './components/Articles';
import styles from './Content.module.css';

const ARTICLE_SKELETON_COUNT = 26;

/** Content component. */
export default function Content() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: products, isLoading } = useGetAllProducts();

  /**
   * Handle article click.
   * @param {number} index The index of the article.
   */
  const handleArticleClick = index => () => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.table}>
        {isLoading ? (
          Array.from({ length: ARTICLE_SKELETON_COUNT }).map((_, index) => <ArticleSkeleton key={index} />)
        ) : (
          <Articles products={products} activeIndex={activeIndex} handleArticleClick={handleArticleClick} />
        )}
      </div>
    </div>
  );
}
