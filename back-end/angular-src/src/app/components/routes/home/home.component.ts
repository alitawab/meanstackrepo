import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../shared/popup/product/product.component';

import { ProductService } from '../../../services/product.service';

import { Product } from '../../../models/Product.model';
import { Category } from '../../../models/Category.model';
import { Router , NavigationEnd } from '@angular/router';
import { ShoppingcartService } from '../../../services/shoppingcart.service';
import { ShoppingCart } from 'src/app/models/ShoppingCart.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public categorySelected;

  category: Category[] = [];
  categoryImage: Blob[] = [];

  topProductImage: Blob[] = [];
  topSellingImage: Blob[] = [];
  topDealsImage: Blob[] = [];

  topDeals: Product[] = [];
  topSelling: Product[] = [];
  topProducts: Product[] = [];

  imageBlobUrl: any[] = [];
  offerBlobUrl: any[] = [];

  cart: ShoppingCart;
  cartCount;

  departmentShow = false;

  customBannerOptions: OwlOptions = {
    items: 1,
    loop: true,
    dots: false,
    margin: 10,
    autoHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: false
  };

  images = [{src: '../../../../assets/images/b1.jpg'},
            {src: '../../../../assets/images/b2.jpg'},
            {src: '../../../../assets/images/b3.jpg'},
            {src: '../../../../assets/images/b4.jpg'},
            {src: '../../../../assets/images/b5.jpg'}];

  departments: any[] = [
    {category: 'Clothing' , value: 'Clothing'},
    {category: 'Baby Accessories' , value: 'Baby'},
    {category: 'Bedding' , value: 'Bedding'},
    {category: 'Blankets & Quilts' , value: 'Blankets'},
    {category: 'Stuff Toys' , value: 'Toys'}
  ];

  customItemsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    nav: false,
    dots: false,
    autoWidth: false,
    navText: ['', ''],
    items: 4,
    margin: 20,
    autoHeight: true,
    center: false,
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      400: {
        items: 1,
        dots: false
      },
      600: {
        items: 4,
        dots: false
      },
      1000: {
        items: 4,
        dots: false
      }
    }
  };

  safeImage;

  loading = true;

  constructor(
    private productservice: ProductService,
    private router: Router,
    private cartService: ShoppingcartService,
    public dialog: MatDialog,
    private data: DataService
    ) {}

  ngOnInit() {
    this.initialize();
  }

  async initialize() {
    this.fetchAllCategory();
    this.fetchSpecialOfferProduct('products');
    this.fetchSpecialOfferProduct('selling');
    this.fetchSpecialOfferProduct('deals');
  }

  fetchAllCategory() {
    this.productservice.getCategory().subscribe(
      res => {
        this.category = res;
        console.log(res);
      },
      error => console.log('Error: ', error),
      () => this.fetchCategoryImage(this.category)
    );
  }

  fetchCategoryImage(category: Category[]) {
    for (let i = 0; i < category.length; i++) {
      this.productservice.getCategoryImage(category[i]._id).subscribe(
        res => {
          this.categoryImage[i] = res;
        },
        error => console.log('Error: ', error),
        () => this.createCategoryImageFromBlob(this.categoryImage[i], i)
      );
    }
  }

  createCategoryImageFromBlob(image: Blob, i: any) {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.category[i].categoryImage = reader.result;
      }, false
    );
    if (image) {
      reader.readAsDataURL(image);
    }
  }



  fetchSpecialOfferProduct(offer: string) {
    if (offer === 'deals') {
      this.productservice.getSpecialProducts(offer).subscribe(result => {
        this.topDeals = result;
        this.fetchProductImage(this.topDeals);
      });
    }
    if (offer === 'selling') {
      this.productservice.getSpecialProducts(offer).subscribe(result => {
        this.topSelling = result;
        this.fetchProductImage(this.topSelling);
      });
    }
    if (offer === 'products') {
      this.productservice.getSpecialProducts(offer).subscribe(result => {
        this.topProducts = result;
        this.fetchProductImage(this.topProducts);
      });
    }
  }

  fetchProductImage(product: Product[]) {
    for (let i = 0 ; i < product.length ; i++) {
      if (product[i].offer === 'deals') {
        this.productservice.getProductImage(product[i]._id).subscribe(
          res => {
            this.topDealsImage[i] = res;
          },
          error => console.log('Error: ', error),
          () => this.createDealsImageFromBlob(this.topDealsImage[i] , i));
      }

      if (product[i].offer === 'products') {
        this.productservice.getProductImage(product[i]._id).subscribe(
          res => {
            this.topProductImage[i] = res;
          },
          error => console.log('Error: ', error),
          () => this.createProductsImageFromBlob(this.topProductImage[i] , i));
      }

      if (product[i].offer === 'selling') {
        this.productservice.getProductImage(product[i]._id).subscribe(
          res => {
            this.topSellingImage[i] = res;
          },
          error => console.log('Error: ', error),
          () => this.createSellingImageFromBlob(this.topSellingImage[i] , i));
      }
    }
  }

createDealsImageFromBlob(image: Blob , i: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    this.loading = false;
    this.topDeals[i].productImage[0] = reader.result;
  }, false);
  if (image) {
    reader.readAsDataURL(image);
  }
}

createProductsImageFromBlob(image: Blob , i: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    this.topProducts[i].productImage[0] = reader.result;
  }, false);
  if (image) {
    reader.readAsDataURL(image);
  }
}

createSellingImageFromBlob(image: Blob , i: any) {

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    this.topSelling[i].productImage[0] = reader.result;
  }, false);
  if (image) {
    reader.readAsDataURL(image);
  }
}

categoryClicked(index: any) {
  switch (index) {
    case 0:
    this.categorySelected = this.category[index].title;
    this.router.navigate(['/clothing'], this.categorySelected);
    break;
    case 1:
    this.categorySelected = this.category[index].title;
    this.router.navigate(['/bedding'], this.categorySelected);
    break;
    case 2:
    this.categorySelected = this.category[index].title;
    this.router.navigate(['/baby'], this.categorySelected);
    break;
    case 3:
    this.categorySelected = this.category[index].title;
    this.router.navigate(['/toys'], this.categorySelected);
    break;
    case 4:
    this.categorySelected = this.category[index].title;
    this.router.navigate(['/blankets'], this.categorySelected);
    break;
    default:
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
        this.data.changeCount(result1.totalQuantity);
      });
    } else {
    }
  });
  dialogRef.afterClosed().subscribe(result => {
  });
}

scrollToview() {
  let target = document.getElementById('mainContainer');
  if (target == null) {
      this.router.navigate(['/']);
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        target = document.getElementById('mainContainer');
        target.scrollIntoView({behavior: 'smooth'});
        return;
      });
  } else {
    document.getElementById('mainContainer').scrollIntoView({behavior: 'smooth'});
  }
}


}
