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
}
