import { useContext } from 'react';
import { AppLoadingContext } from '@/shared/context';

/** Use app loading. */
export const useAppLoading = () => {
  const context = useContext(AppLoadingContext);
  if (!context) {
    throw new Error('useAppLoading must be used within a AppLoadingProvider!');
  }
  return context;
};
