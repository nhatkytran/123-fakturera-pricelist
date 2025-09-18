/** API URLs configuration. */
export const apiUrlsConfig = {
  products: {
    list: '/products',
    /**
     * Update product.
     * @param {number} id Product id.
     */
    update: id => `/products/${id}`,
  },
};
