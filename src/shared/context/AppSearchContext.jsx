import { createContext, useState } from 'react';

const AppSearchContext = createContext();
/**
 * App search provider.
 * @param {Object} props The props object.
 * @param {React.ReactNode} props.children The children elements.
 */
const AppSearchProvider = ({ children }) => {
  const [searchArticleNoInput, setSearchArticleNoInput] = useState('');
  const [searchProductInput, setSearchProductInput] = useState('');

  /**
   * Handle search article no input.
   * @param {string} articleNo The article no.
   */
  const handleSearchArticleNoInput = articleNo => {
    setSearchArticleNoInput(articleNo);
  };

  /**
   * Handle search product input.
   * @param {string} product The product.
   */
  const handleSearchProductInput = product => {
    setSearchProductInput(product);
  };

  return (
    <AppSearchContext.Provider
      value={{ searchArticleNoInput, searchProductInput, handleSearchArticleNoInput, handleSearchProductInput }}
    >
      {children}
    </AppSearchContext.Provider>
  );
};

export { AppSearchContext, AppSearchProvider };
