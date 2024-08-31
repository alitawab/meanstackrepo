import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../models/Contact.model';
import { Order } from '../models/Order.model';
import { ShoppingCart } from '../models/ShoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(customer: Contact, cart: ShoppingCart): Observable<Order> {
    const data = {
      customer_name: '',
      customer_number: '',
      address_latitude: null,
      address_longitude: null,
      product_id: [],
      product_quantity: []
    };

    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    // const fd = {
    //   'customer_name': customer.FullName,
    //   'customer_number': customer.Phone_Number,
    //   'address_latitude': customer.DeliveryLocation.latitude,
    //   'address_longitude': customer.DeliveryLocation.longitude,
    // };
    data.customer_name = customer.FullName;
    data.customer_number = customer.Phone_Number;
    data.address_latitude = customer.DeliveryLocation.latitude;
    data.address_longitude = customer.DeliveryLocation.longitude;

    for (let i = 0 ; i < cart.products.length ; i++) {
      data.product_id[i] = cart.products[i].item._id;
      data.product_quantity[i] = cart.products[i].quantity;
    }
    // const fd = new FormData();

    // fd.append('customer_name', customer.FullName);
    // fd.append('customer_number', customer.Phone_Number);
    // fd.append('address_latitude', String (customer.DeliveryLocation.latitude));
    // fd.append('address.longitude', String (customer.DeliveryLocation.longitude));
    // for (let i = 0 ; i < cart.products.length ; i++) {
    //   fd.append('product_id', cart.products[i].item._id);
    //   fd.append('product_quantity', String(cart.products[i].quantity));
    // }
    return this.http.post<Order>('order/create', data)
    .pipe(
      map(res => res)
      );
    }
}
