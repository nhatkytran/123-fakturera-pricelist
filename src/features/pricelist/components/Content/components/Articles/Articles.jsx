import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { isEqual } from 'lodash';

import { useAppLoading } from '@/shared/hooks';
import { useUpdateProduct } from '@/queries';
import { mapProductFormDataToModel } from './Articles.settings';
import Article from '../Article';

const UPDATE_DEBOUNCE_TIME = 300;

/**
 * Articles component.
 * @param {Object} props The props.
 * @param {Product[]} props.products The products.
 * @param {number} props.activeIndex The active index.
 * @param {function} props.handleArticleClick The handle article click.
 */
export default function Articles({ products, activeIndex, handleArticleClick }) {
  const { handleIsLoading } = useAppLoading();
  const productsDefault = useRef(products.map(product => ({ ...product })));
  const { mutate: updateProduct } = useUpdateProduct();
  const { control, watch } = useForm({ defaultValues: { products: products.map(product => ({ ...product })) } });
  const activeProduct = watch(`products.${activeIndex}`);

  useEffect(() => {
    let timeoutId = null;
    const mappedActiveProduct = mapProductFormDataToModel(activeProduct);
    if (!isEqual(mappedActiveProduct, productsDefault.current[activeIndex])) {
      timeoutId = setTimeout(() => {
        handleIsLoading(true);
        updateProduct(mappedActiveProduct, {
          /** Handle update product success. */
          onSuccess: () => handleIsLoading(false),
        });
      }, UPDATE_DEBOUNCE_TIME);
    }
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    updateProduct,
    activeIndex,
    activeProduct,
    activeProduct.articleNo,
    activeProduct.productService,
    activeProduct.inPrice,
    activeProduct.price,
    activeProduct.unit,
    activeProduct.inStock,
    activeProduct.description,
  ]);

  useEffect(() => {
    productsDefault.current = products.map(product => ({ ...product }));
  }, [products]);

  return (
    <>
      {products.map((article, index) => (
        <Article
          key={article.id}
          watch={watch}
          control={control}
          index={index}
          isActive={index === activeIndex}
          onArticleClick={handleArticleClick(index)}
        />
      ))}
    </>
  );
}
