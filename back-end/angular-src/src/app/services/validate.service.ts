import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Product } from '../models/Product.model';
import { SharedService } from './shared.service';

@Injectable()
export class ValidateService implements HttpInterceptor {

  constructor(private sharedservice: SharedService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.sharedservice.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        () => {
          this.sharedservice.isLoading.next(false);
        }
      )
    );

    }

  validateProduct(product: Product) {

    if (product.name === '' ||
        product.category === '' ||
        product.price === undefined ||
        product.quantity === null ||
        product.productImage == null) {
      return false;
    } else {
      return true;
    }
  }

}
