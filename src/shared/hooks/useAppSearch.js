import { useContext } from 'react';
import { AppSearchContext } from '@/shared/context';

/** Use app search. */
export const useAppSearch = () => {
  const context = useContext(AppSearchContext);
  if (!context) {
    throw new Error('useAppSearch must be used within a AppSearchProvider!');
  }
  return context;
};
