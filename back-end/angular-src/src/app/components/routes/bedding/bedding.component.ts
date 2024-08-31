import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../../services/product.service';

import { Product } from '../../../models/Product.model';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductComponent } from '../../shared/popup/product/product.component';

@Component({
  selector: 'app-bedding',
  templateUrl: './bedding.component.html',
  styleUrls: ['./bedding.component.css']
})
export class BeddingComponent implements OnInit {

  category: any = 'bedding';
  products: Product[] = [];
  productImage: Blob[] = [];

  constructor(
    private productservice: ProductService,
    public dialog: MatDialog,
    private router: Router,
    private cartService: ShoppingcartService) { }

  ngOnInit() {
    this.fetchAllProducts(this.category);
  }


  fetchAllProducts(category: string) {
    this.productservice.getAllProduct(category).subscribe(
      res => {
        this.products = res;
      },
      error => console.log('Error: ', error),
      () => this.fetchProductImage(this.products));
    }

  fetchProductImage(product: Product[]) {
    for (let i = 0 ; i < product.length ; i++) {
      this.productservice.getProductImage(product[i]._id).subscribe(
        res => {
          this.productImage[i] = res;
        },
        error => console.log('Error: ', error),
        () => this.createImageFromBlob(this.productImage[i] , i));
      }
    }

createImageFromBlob(image: Blob , i: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    this.products[i].productImage[0] = reader.result;
  }, false);
  if (image) {
    reader.readAsDataURL(image);
  }
}

productClicked(product_data: String) {
  let product_details: any;
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = product_data;

  const dialogRef = this.dialog.open(ProductComponent, dialogConfig);
  // this.router.navigate(['/product/' + data]);

  dialogRef.beforeClosed().subscribe(result => {
    if (result) {
      product_details = result;
      this.cartService.addProductToCart(product_details._id).subscribe(result1 => {
      });
    } else {
    }
  });
  dialogRef.afterClosed().subscribe(result => {
  });
}


addToCart(id: any) {
  this.cartService.addProductToCart(id).subscribe(result => {
  });
}

}
