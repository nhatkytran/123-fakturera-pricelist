import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { isEqual } from 'lodash';

import { useUpdateProduct } from '@/queries';
import Article from '../Article';
import { mapProductFormDataToModel } from './Articles.settings';

/**
 * Articles component.
 * @param {Object} props The props.
 * @param {Product[]} props.products The products.
 * @param {number} props.activeIndex The active index.
 * @param {function} props.handleArticleClick The handle article click.
 */
export default function Articles({ products, activeIndex, handleArticleClick }) {
  const productsDefault = useRef(products.map(product => ({ ...product })));
  const { mutate: updateProduct } = useUpdateProduct();
  const { control, watch } = useForm({ defaultValues: { products: products.map(product => ({ ...product })) } });
  const activeProduct = watch(`products.${activeIndex}`);

  useEffect(() => {
    const mappedActiveProduct = mapProductFormDataToModel(activeProduct);
    if (!isEqual(mappedActiveProduct, productsDefault.current[activeIndex])) {
      updateProduct(mappedActiveProduct);
    }
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
