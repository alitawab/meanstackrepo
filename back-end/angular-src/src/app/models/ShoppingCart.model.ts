import { ShoppingCartItem } from './ShoppingCartItem.model';

export interface ShoppingCart {
  _id: string;
  products: ShoppingCartItem[];
  totalQuantity: number;
  totalPrice: number;
}
