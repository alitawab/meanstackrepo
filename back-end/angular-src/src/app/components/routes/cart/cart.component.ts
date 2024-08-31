import { Component, OnInit } from '@angular/core';

import { ShoppingcartService } from '../../../services/shoppingcart.service';
import { ShoppingCart } from '../../../models/ShoppingCart.model';
import { ProductService } from '../../../services/product.service';
import { MatDialog } from '@angular/material';
import { CredentialsComponent } from '../../shared/popup/credentials/credentials.component';
import { NotificationService } from 'src/app/services/notification.service';
import { DataService } from 'src/app/services/data.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  isPopupOpen: Boolean = false;
  cartEmpty = true;
  cart: ShoppingCart = {
    _id: '',
    products: [{
      id: '',
      item: null,
      price: 0,
      quantity: 0
    }],
    totalQuantity: 0,
    totalPrice: 0
  };
  productImage: Blob[] = [];
  imgUrl = [];

  cartCount: any;

  // addScript: Boolean = false;
  // finalAmount: Number = 1;
  // paypalConfig = {
  //   env: 'sandbox',
  //   client: {
  //     sandbox:
  //   }
  // }

  constructor(
    private cartservice: ShoppingcartService,
    private productservice: ProductService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.fetchProductsFromCart();
}


fetchProductsFromCart() {
  this.cartservice.getAllProductFromCart().subscribe(result => {
    this.cart = result;
    if (this.cart.totalQuantity === 0 || this.cart.totalQuantity === undefined) {
      this.cartEmpty = true;
      this.notification.error('Cart is Empty', false);
    } else {
      this.cartEmpty = false;
    }
  },
  error => console.log(error),
  () => this.fetchProductImage(this.cart.products)
);
}

fetchProductImage(product: any) {
    if (!product) {
      product = '';
    } else {
      for (let i = 0 ; i < product.length ; i++) {
        this.productservice.getProductImage(product[i].item._id).subscribe(
          res => {
            this.productImage[i] = res;
          },
          error => console.log('Error: ', error),
          () => this.createImageFromBlob(this.productImage[i] , i));
        }
    }
  }

createImageFromBlob(image: Blob , i: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    this.imgUrl[i] = reader.result;
  }, false);
  if (image) {
    reader.readAsDataURL(image);
  }
}

reduceQuantity(cart_product: any) {
  let newQty: number;
  newQty = cart_product.qty - 1;
  if (newQty === 0) {
   // this.cartservice.removeProductFromCart()
  } else {
    cart_product.qty = newQty;
    this.cartservice.removeOneFromCart(cart_product.item._id).subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });

    // console.log(cart_product);
  }

  // console.log(this.cart);
}
increaseQuantity(cart_product: any) {
  this.cartservice.addProductToCart(cart_product.item._id).subscribe(result1 => {
    if (result1) {
      this.ngOnInit();
    }
  });
}


// quantityChanged(value: number, id: string) {
//   console.log(value + ' ' + ' ' + id);
//   const totalQuantity: number = this.cart.totalQuantity;

//   for (const i in this.cart.products) {
//     if (i) {
//       console.log(i);
//       console.log(this.cart.products);
//     }
//   }

//   if (this.cart.products.item._id === id) {

//   }

//   if (value < CartComponent.previousValue) {
//     this.cart.totalQuantity = totalQuantity - 1;
//   } else if (value > CartComponent.previousValue) {
//     this.cart.totalQuantity = totalQuantity + 1;
//   }
//   CartComponent.previousValue = value;
//   this.cart.products.quantity = value;
//   this.cart.products.price = this.cart.products.price * this.cart.products.quantity;
// }

removeItem(id: any) {
  this.cartservice.removeProductFromCart(id).subscribe(result => {
    if (result) {
      this.data.changeCount(result.totalQuantity);
      this.ngOnInit();
    }
  });
}

emptyCart() {
  console.log('empty cart');
}



checkout() {
  if (this.cart.totalPrice && this.cart.totalQuantity === 0) {
    alert('Cart is Empty');
  } else {
    this.isPopupOpen = true;
    const dialogRef = this.dialog.open(CredentialsComponent , {
      data: {
        cart: this.cart
      },
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpen = false;
    });
  }
}
}

