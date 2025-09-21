import { createContext, useState } from 'react';

const AppSearchContext = createContext();
/**
 * App search provider.
 * @param {Object} props The props object.
 * @param {React.ReactNode} props.children The children elements.
 */
const AppSearchProvider = ({ children }) => {
  const [searchArticleNo, setSearchArticleNo] = useState('');
  const [searchProduct, setSearchProduct] = useState('');

  /**
   * Handle search article no.
   * @param {string} articleNo The article no.
   */
  const handleSearchArticleNo = articleNo => {
    setSearchArticleNo(articleNo);
  };

  /**
   * Handle search product.
   * @param {string} product The product.
   */
  const handleSearchProduct = product => {
    setSearchProduct(product);
  };

  return (
    <AppSearchContext.Provider value={{ searchArticleNo, searchProduct, handleSearchArticleNo, handleSearchProduct }}>
      {children}
    </AppSearchContext.Provider>
  );
};

export { AppSearchContext, AppSearchProvider };
