import { ProductApi } from '@/api/services/productApi';
import { useQuery } from '@tanstack/react-query';

/** Product keys. */
export const productKeys = {
  products: ['products'],

  /**
   * List products query key.
   * @returns {string[]} List products query key.
   */
  list: () => [...productKeys.products, 'list'],
};

/** Fetch all products. */
export const useFetchAllProducts = () =>
  useQuery({
    queryFn: ProductApi.getAllProducts,
    queryKey: productKeys.list(),
  });
