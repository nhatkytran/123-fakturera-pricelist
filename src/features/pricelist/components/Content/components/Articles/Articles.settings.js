/**
 * Map form data to model.
 * @param {Object} productFormData The form data.
 * @returns {Product} The model.
 */
export const mapProductFormDataToModel = productFormData => {
  return {
    id: productFormData.id,
    articleNo: Number(productFormData.articleNo),
    productService: productFormData.productService,
    inPrice: Number(productFormData.inPrice),
    price: Number(productFormData.price),
    unit: productFormData.unit,
    inStock: Number(productFormData.inStock),
    description: productFormData.description,
    createdAt: productFormData.createdAt,
    updatedAt: productFormData.updatedAt,
  };
};
