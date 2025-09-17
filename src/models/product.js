/** Product model. */
export class Product {
  /**
   * Product constructor.
   * @param {Object} data Product data.
   * @param {string} data.id Product id.
   * @param {number} data.articleNo Product article number.
   * @param {string} data.productService Product service.
   * @param {number} data.inPrice Product in price.
   * @param {number} data.price Product price.
   * @param {string} data.unit Product unit.
   * @param {number} data.inStock Product in stock.
   * @param {string} data.description Product description.
   * @param {Date} data.createdAt Product created at.
   * @param {Date} data.updatedAt Product updated at.
   */
  constructor(data) {
    this.id = data.id;
    this.articleNo = data.articleNo;
    this.productService = data.productService;
    this.inPrice = data.inPrice;
    this.price = data.price;
    this.unit = data.unit;
    this.inStock = data.inStock;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}
