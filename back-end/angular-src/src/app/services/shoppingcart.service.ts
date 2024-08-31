import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { map } from '../../../node_modules/rxjs/operators';
import { ShoppingCart } from '../models/ShoppingCart.model';

const uri = 'http://localhost:3000';
// let shoppingCartInstance: ShoppingCart;

@Injectable()

export class ShoppingcartService {

  constructor(private http: HttpClient) { }


  getCartCount(): Number {
    let count: any = '';
    this.getAllProductFromCart().subscribe(result => {
      count = result;
      return count.totalQuantity;
    });
    return count.totalQuantity;

  }

  createCart() {
    return this.http.get<ShoppingCart>('cart/createcart/' );

  }

  addProductToCart(product_id: any) {
    // let cartId: string;
    // this.createCart().subscribe(result => {
    //   cartId = result._id;
    //   console.log(cartId);
    // });
    // const fd = new FormData();
    // console.log(product_id + ' ' + qty);
    // fd.append('id', product_id);
    // fd.append('quantity', qty);
    // console.log(fd);

    // const header = new Headers({ 'Content-Type': 'application/json' });
    // let params = new HttpParams();
    // params = params.append('productId', product_id);
    // params = params.append('qty', qty);

    console.log('product_id');
    const data = {
      'id': product_id
    };
    const header = new HttpHeaders({
      'credentials': 'include'
    });
    return this.http.get<ShoppingCart>('cart/addtocart/' + product_id,
    { withCredentials: true })
    .pipe(
      map(res => res)
    );
  }


  getAllProductFromCart(): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>('cart/get-cart', {withCredentials: true});
  }

  // getCartCount() {
  //   return this.http.get('http://localhost:3000/cart/getcount');
  // }

  removeOneFromCart(product: string) {
    return this.http.get('cart/remove/' + product)
    .pipe(
      map(res => res)
    );
  }

  removeProductFromCart(id: any) {
    return this.http.get<ShoppingCart>('cart/delete/' + id )
    .pipe(
      map(res => res)
    );
  }

  errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
  }
}

