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
  // eslint-disable-next-line no-unused-vars
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      products,
    },
  });

  // eslint-disable-next-line no-console
  console.log(getValues());

  return (
    <>
      {products.map((article, index) => (
        <Article
          key={article.articleNo}
          article={article}
          isActive={index === activeIndex}
          onArticleClick={handleArticleClick(index)}
        />
      ))}
    </>
  );
}
