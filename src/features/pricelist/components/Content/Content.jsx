import { useEffect, useRef, useState } from 'react';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, tap } from 'rxjs';

import { useGetAllProducts } from '@/queries';
import { useAppSearch } from '@/shared/hooks';
import Header from './components/Header';
import ArticleSkeleton from './components/ArticleSkeleton';
import Articles from './components/Articles';
import styles from './Content.module.css';

const ARTICLE_SKELETON_COUNT = 26;
const SEARCH_DEBOUNCE_TIME = 300;

/** Content component. */
export default function Content() {
  const searchArticleNo$ = useRef(new BehaviorSubject(''));
  const searchProduct$ = useRef(new BehaviorSubject(''));
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: products, isLoading, error } = useGetAllProducts();
  const [productsData, setProductsData] = useState([]);
  const { searchArticleNo, searchProduct } = useAppSearch();

  /**
   * Handle article click.
   * @param {number} index The index of the article.
   */
  const handleArticleClick = index => () => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (products == null) {
      return;
    }

    const subscription = combineLatest([searchArticleNo$.current, searchProduct$.current])
      .pipe(
        debounceTime(SEARCH_DEBOUNCE_TIME),
        distinctUntilChanged(),
        tap(([searchArticleNo, searchProduct]) => {
          const filteredProducts = products.filter(product => {
            return (
              product.articleNo.toString().toLowerCase().includes(searchArticleNo.toLowerCase()) &&
              product.productService.toString().toLowerCase().includes(searchProduct.toLowerCase())
            );
          });
          setProductsData(filteredProducts.sort((a, b) => a.id - b.id));
        }),
      )
      .subscribe();

    return () => subscription.unsubscribe();
  }, [products]);

  useEffect(() => {
    searchArticleNo$.current.next(searchArticleNo);
    searchProduct$.current.next(searchProduct);
  }, [searchArticleNo, searchProduct]);

  if (error) {
    return <div>Some thing went wrong!</div>;
  }

  if (!isLoading && productsData.length === 0) {
    return <div>No products found!</div>;
  }

  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.table}>
        {isLoading ? (
          Array.from({ length: ARTICLE_SKELETON_COUNT }).map((_, index) => <ArticleSkeleton key={index} />)
        ) : (
          <Articles products={productsData} activeIndex={activeIndex} handleArticleClick={handleArticleClick} />
        )}
      </div>
    </div>
  );
}
