import { createContext, useState } from 'react';

const AppLoadingContext = createContext();
/**
 * Language translations provider.
 * @param {Object} props The props object.
 * @param {React.ReactNode} props.children The children elements.
 */
const AppLoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handle is loading.
   * @param {boolean} isLoading The is loading value.
   */
  const handleIsLoading = isLoading => {
    setIsLoading(isLoading);
  };

  return <AppLoadingContext.Provider value={{ isLoading, handleIsLoading }}>{children}</AppLoadingContext.Provider>;
};

export { AppLoadingContext, AppLoadingProvider };
