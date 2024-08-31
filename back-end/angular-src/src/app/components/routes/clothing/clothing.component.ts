import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductComponent } from '../../shared/popup/product/product.component';


@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit, OnDestroy {

  category: any = 'clothing';
  products: Product[] = [];
  productImage: Blob[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private productservice: ProductService ,
    private cartService: ShoppingcartService ) { }

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

  ngOnDestroy(): void {
    this.cartService.getAllProductFromCart().subscribe(result => {
      console.log(result);
    });
  }
}
