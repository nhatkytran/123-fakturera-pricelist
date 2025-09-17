import { Product } from '@/models';
import { ProductDto } from '@/api/dtos';

/** Product mapper. */
class ProductMapper {
  /**
   * Product mapper constructor.
   * @param {ProductDto} dto Product dto.
   */
  static fromDto(dto) {
    return new Product({
      id: dto.id,
      articleNo: Number(dto.articleNo),
      productService: dto.name,
      inPrice: Number(dto.inPrice),
      price: Number(dto.price),
      unit: dto.unit,
      inStock: Number(dto.inStock),
      description: dto.description,
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
    });
  }
}
