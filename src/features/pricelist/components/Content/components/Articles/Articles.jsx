import { useForm } from 'react-hook-form';
import Article from '../Article';

/**
 * Articles component.
 * @param {Object} props The props.
 * @param {Product[]} props.products The products.
 * @param {number} props.activeIndex The active index.
 * @param {function} props.handleArticleClick The handle article click.
 */
export default function Articles({ products, activeIndex, handleArticleClick }) {
  const { control } = useForm({ defaultValues: { products } });

  return (
    <>
      {products.map((article, index) => (
        <Article
          key={article.articleNo}
          control={control}
          index={index}
          isActive={index === activeIndex}
          onArticleClick={handleArticleClick(index)}
        />
      ))}
    </>
  );
}
