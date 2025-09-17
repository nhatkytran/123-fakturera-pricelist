import { http } from '../http';
import { ProductMapper } from '../mappers';
import { apiUrlsConfig } from './apiUrlsConfig';

/** Product API. */
export class ProductApi {
  /** Get all products. */
  static async getAllProducts() {
    const { data } = await http.get(apiUrlsConfig.products.list, { withCredentials: true });
    return data.data.map(ProductMapper.fromDto);
  }
}
