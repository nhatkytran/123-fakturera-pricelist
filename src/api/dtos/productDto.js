/** Product dto. */
export class ProductDto {
  /**
   * Product dto constructor.
   * @param {Object} dto Product dto.
   * @param {string} dto.id Product id.
   * @param {string} dto.articleNo Product article number.
   * @param {string} dto.name Product name.
   * @param {string} dto.inPrice Product in price.
   * @param {string} dto.price Product price.
   * @param {string} dto.unit Product unit.
   * @param {string} dto.inStock Product in stock.
   * @param {string} dto.description Product description.
   * @param {string} dto.createdAt Product created at.
   * @param {string} dto.updatedAt Product updated at.
   */
  constructor(dto) {
    this.id = dto.id;
    this.articleNo = dto.articleNo;
    this.name = dto.name;
    this.inPrice = dto.inPrice;
    this.price = dto.price;
    this.unit = dto.unit;
    this.inStock = dto.inStock;
    this.description = dto.description;
    this.createdAt = dto.createdAt;
    this.updatedAt = dto.updatedAt;
  }
}
