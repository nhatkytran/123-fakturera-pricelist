import { Product } from '@/models';
import { ProductDto } from '@/api/dtos';

/** Product mapper. */
export class ProductMapper {
  /**
   * Product mapper constructor.
   * @param {ProductDto} dto Product dto.
   */
  static fromDto(dto) {
    return new Product({
      id: dto.id,
      articleNo: dto.articleNo,
      productService: dto.name,
      inPrice: dto.inPrice,
      price: dto.price,
      unit: dto.unit,
      inStock: dto.inStock,
      description: dto.description,
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
    });
  }

  /**
   * Product mapper to dto.
   * @param {Product} product Product.
   */
  static toDto(product) {
    return new ProductDto({
      id: product.id,
      articleNo: product.articleNo,
      name: product.productService,
      inPrice: product.inPrice,
      price: product.price,
      unit: product.unit,
      inStock: product.inStock,
      description: product.description,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    });
  }
}
