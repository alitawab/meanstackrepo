import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';

import { map , debounceTime , switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Product } from '../models/Product.model';
import { Category } from '../models/Category.model';

const uri = 'http://localhost:3000';

@Injectable()
export class ProductService {

  count: Number = 0;

  constructor(private http: HttpClient) {}

  createProduct(product: Product): Observable<Product> {
    const fd = new FormData();
    fd.append('name', product.name);
    fd.append('category', product.category);
    fd.append('offer', product.offer);
    fd.append('price', product.price);
    fd.append('qty', product.quantity);
    for (let i = 0 ; i < product.productImage.length ; i ++) {
      fd.append('productImage', product.productImage[i]);
    }
    return this.http.post<Product>('products/upload', fd);
  }

  getAllProduct(type: string): Observable<Product[]> {
    let params = new HttpParams();
    params = params.append('productType', type);
    return this.http.get<Product[]>('products/', {params: params});
  }

  getProductImage(productId: String): Observable<Blob> {
    return this.http.get('products/image/' + productId, {
      responseType: 'blob'
    })
    .pipe(
      map(res => res)
    );
  }

  getNumberOfImages(prodId: String): Observable<Number> {
    return this.http.get<Number>('products/allimages/number/' + prodId);
  }

  getProductAllImages(productId: String , index: Number): Observable<Blob> {
    const number = 2;
    return this.http.get('products/allimages/' + productId + '&' + index,
    {responseType: 'blob'})
    .pipe(
      map(res => res  )
    );
  }

  getSpecialProducts(offer: string): Observable<Product[]> {
    let params = new HttpParams();
    params = params.append('productOffer', offer);
    return this.http.get<Product[]>('products/specialoffer/', {params: params});

  }

  getRandomProducts(cat: string): Observable<Product[]> {
    let params = new HttpParams();
    params = params.append('category', cat);
    return this.http.get<Product[]>('products/randomproducts/', {params: params});
  }

  createCategory() {
    return this.http.post('category/addcategory', {
      title: 'blanket',
      filename: '/Images/blanket&quilts.png',
    });
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('category/');
  }

  getCategoryImage(categoryId: String): Observable<Blob> {
    return this.http.get('category/image/' + categoryId, {
      responseType: 'blob'
    }).pipe(map(res => res));
  }

  search(terms: Observable<string>) {
    return terms.pipe(
    debounceTime(300),
    switchMap(term => this.searchEntries(term))
    );
  }

  searchEntries(term: string) {
    if (term === '') {
      term = 'nostring';
    }
    return this.http
        .get<Product>('products/search/' + term)
        .pipe(
          map(res => res)
        );
  }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    // In real world application, call to log error to remote server
    // logError(error);
    // This returns another Observable for the observer to subscribe to
    return Observable.throw(errorMessage);
  }
}
