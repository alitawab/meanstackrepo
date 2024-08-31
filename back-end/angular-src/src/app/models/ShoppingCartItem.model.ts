import { Product } from './Product.model';

export interface ShoppingCartItem {
  id: string;
  item: Product;
  price: number;
  quantity: number;
}
