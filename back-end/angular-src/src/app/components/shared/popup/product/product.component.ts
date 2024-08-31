import { Component, OnInit, ViewChild, Inject, Renderer2 } from '@angular/core';

import { Product } from '../../../../models/Product.model';
import { NgForm } from '@angular/forms';


import { ValidateService } from '../../../../services/validate.service';
import { ProductService } from '../../../../services/product.service';
import { ShoppingCartItem } from '../../../../models/ShoppingCartItem.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild('myimage') image;
  @ViewChild('myresult') result;

  productUpload: Product = {
    _id: '',
    name: '',
    category: '',
    offer: '',
    price: '',
    quantity: null,
    productImage: [null]
  };

  images: any[] = [];

  productDetails: Product = {
    _id: '',
    name: '',
    category: '',
    offer: '',
    price: '',
    quantity: null,
    productImage: [null]
  };

  shoppingcartitem: ShoppingCartItem = {
    id: '',
    item: this.productDetails,
    price: 0,
    quantity: 0
  };

  // shoppingcart: ShoppingCart = {
  //   _id:
  //   items: this.shoppingcartitem,
  //   totalQuantity: 0,
  //   totalPrice: 0
  // };


  constructor(
    private validate_product: ValidateService,
    private authservice: ProductService,

    private renderer: Renderer2,
    private dialogref: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public value: any
  ) {}

  ngOnInit() {
    // this.router.paramMap.subscribe(v => {
    //   console.log(v.get('data'));
    //   this.fetchNumberOfImagesOfProduct(v.get('data'));
    // });
    this.fetchNumberOfImagesOfProduct(this.value);

    // this.imageZoom('myimage', 'myresult');

    // $(function() {
    //   $('#exzoom').exzoom({
    //     // options here
    //   });
    // });

    // const evt = new Event(),
    // m = new Magnifier(evt);
  }

  imageSet(image: any) {
    let activeImage;
    activeImage = image.src;
    this.showSlide(activeImage);
  }

  showSlide(n) {
    this.renderer.setProperty(
      this.image.nativeElement,
      'src',
      n
    );
  }

  in(event: any) {
    this.renderer.setStyle(
      this.result.nativeElement,
      'display',
      'block'
    );
    this.imageZoom(event);
  }

  out(event: any) {
    this.renderer.setStyle(
      this.result.nativeElement,
      'display',
      'none'
    );
  }

  imageZoom(e) {
    let image , result , render , lens , parentNode , cx , cy;

    image = this.image.nativeElement;
    result = this.result.nativeElement;
    render = this.renderer;

    lens = render.createElement('DIV');
    render.addClass(lens, 'img-zoom-lens');

    parentNode = render.parentNode(image);
    render.insertBefore(
      parentNode,
      lens,
      image
    );

    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;

    render.setStyle(
      result,
      'backgroundImage',
      'url(\'' + image.src + '\')'
    );

    render.setStyle(
      result,
      'background-repeat',
      'no-repeat'
    );

    render.setStyle(
      result,
      'background-size',
      (image.width * cx ) + 'px ' + (image.height * cy) + 'px'
    );

    image.addEventListener('mousemove', moveLens);

    function moveLens(event: any) {
      let pos , x , y;
      e.preventDefault();
      pos = getCursorPosition(event);

      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);

      if (x > image.width - lens.offsetWidth) {
        x = image.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > image.height - lens.offsetHeight) {
        y = image.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      render.setStyle(
        lens,
        'left',
        x + 'px'
      );
      render.setStyle(
        lens,
        'top',
        y + 'px'
      );
      render.setStyle(
        result,
        'background-position',
        '-' + (x * cx) + 'px -' + (y * cy)  + 'px'
      );
    }

    function getCursorPosition(ev: any) {
      let a , x = 0 , y = 0;
      ev = ev || window.event;
      a = image.getBoundingClientRect();
      x = ev.pageX - a.left;
      y = ev.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x , y : y};
    }
  }

//   openZoom(event: any, show: boolean) {
//     event.preventDefault();
//     this.showZoom = show;
//     if (show) {
//       this.positionZoom(event);
//     }
// }
// positionZoom(event) {
//   const xPos = event.touches[0].pageX - event.touches[0].target.offsetLeft;
//   const yPos = event.touches[0].pageY - event.touches[0].target.offsetTop;
//   const xMax = event.target.clientWidth;
//   const yMax = event.target.clientHeight;
//   this.xPos = this.validPercent(Math.round(xPos * 100 / xMax));
//   this.yPos = this.validPercent(Math.round(yPos * 100 / yMax));
// }

ratingComponentClick(clickObj: any): void {
  console.log(clickObj);
}

onNoClick(): void {
  this.dialogref.close();
}

// onAddToCart(data: any) {
  // console.log(data);
  // this.cartservice.addProductToCart(data._id).subscribe(result => {
  // });
  // this.dialogref.beforeClosed().subscribe(() => this.dialogref.close(data));

  // this.cartservice.addProductToCart(this.productDetails._id).subscribe(result => {
  //   console.log(result.items);

  //   // this.route.navigateByUrl('/cart/addtocart');
  // });
  // let productAddedToCart  , cartItemCount;

  // await this.cartservice.getAllProductFromCart().toPromise().then(shoppingCart => {
  //   console.log('got all');
  //   this.shoppingcart = shoppingCart;
  //   console.log(shoppingCart);
  // });

  // if (this.shoppingcart === null) {
  //   console.log('add cuz null');
  //   this.cartservice.addProductToCart(this.productDetails._id , 1).subscribe(data => {
  //     console.log('added to cart');
  //   });

  // } else {
  //   console.log('add cuz not null and not same');
  //   let tempProduct = this.shoppingcart['product'];
  //   console.log(tempProduct);
  //   // for (let i = 0 ; i < tempProduct.length ; i ++) {
  //   //   console.log(this.shoppingcartitem[i]);
  //   //   console.log(tempProduct[i]);
  //   //   console.log(this.productDetails._id);
  //   //   if (tempProduct[i] === this.productDetails._id) {

  //   //     this.flashmessage.show('Product Already Added To Cart', {
  //   //       cssClass: 'alert-danger',
  //   //       timeout: '3000'
  //   //     });
  //   //   } else {
  //   //     tempProduct = null;
  //   //   }
  //   // }
  //   // console.log(tempProduct);
  //   if (tempProduct === null) {
  //     console.log('i m not same');

  //   } else {

  //   }
  // }
  // cartItemCount = productAddedToCart.length;
  // this.sharedservice.updateCartCount(cartItemCount);
// }

// validPercent(value) {
//   if (value < 0) {
//     this.showZoom = false;
//     return 0;
//   }
//   if (value > 100) {
//     this.showZoom = false;
//     return 100;
//   }
//   return value;
// }

fetchNumberOfImagesOfProduct(productId: String) {
  let no_images: Number;
  this.authservice.getNumberOfImages(productId).subscribe(
    res => {
      no_images = res['size'];
      this.productDetails = res['details'];
    },
    error => console.log('Error: ', error),
    () => this.fetchProductAllImage(no_images, productId)
  );
}

fetchProductAllImage(images_no: Number, productId: String) {
  let productImage: Blob;
  for (let i = 0; i < images_no; i++) {
    this.authservice.getProductAllImages(productId, i).subscribe(
      res => {
        productImage = res;
      },
      error => console.log('Error: ', error),
      () => this.createImageFromBlob(productImage, i)
    );
  }
}

createImageFromBlob(image: Blob, index: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    this.images[index] = reader.result;
  }, false);
  if (image) {
    reader.readAsDataURL(image);
  }
}


  onFileSelected(event) {
    const files = <Array<File>>event.target.files;
    this.productUpload.productImage = files;
  }

  onSubmit(f: NgForm) {
    if (!this.validate_product.validateProduct(this.productUpload)) {

      return false;
    }
    this.authservice.createProduct(this.productUpload).subscribe(data => {
      console.log('product created successfully');
    });
    f.resetForm();
  }

  // enter(index: any) {
  //   console.log(index);

  // }
  // zoomIn(event: MouseEvent , index: any) {
  //   const pre = document.getElementById('preview');
  //   pre.style.visibility = 'visible';
  //   if ($('#zoom1').is(':hover')) {
  //     pre.style.backgroundImage = 'url(' + this.productImagesFinal[index] + ')';
  //     }
  //     const posX = event.offsetX;
  //     const posY = event.offsetY;
  //     pre.style.backgroundPosition = (-posX * 2.5) + 'px ' + (-posY * 5.5) + 'px';
  // }

  // zoomOut() {
  //   const pre = document.getElementById('preview');
  //   pre.style.visibility = 'hidden';
  //   pre.style.backgroundImage = 'url()';
  // }

  // imageZoom(imgID, resultID) {
  //   let img, lens, result, cx, cy;
  //   img = document.getElementById(imgID);
  //   result = document.getElementById(resultID);
  //   /* Create lens: */
  //   lens = document.createElement('DIV');
  //   lens.setAttribute('class', 'img-zoom-lens');
  //   /* Insert lens: */
  //   img.parentElement.insertBefore(lens, img);
  //   /* Calculate the ratio between result DIV and lens: */
  //   cx = result.offsetWidth / lens.offsetWidth;
  //   cy = result.offsetHeight / lens.offsetHeight;
  //   /* Set background properties for the result DIV */
  //   result.style.backgroundImage = 'url(\'' + img.src + '\')';
  //   result.style.backgroundSize = (img.width * cx) + 'px ' + (img.height * cy) + 'px';
  //   /* Execute a function when someone moves the cursor over the image, or the lens: */
  //   lens.addEventListener('mousemove', moveLens);
  //   img.addEventListener('mousemove', moveLens);
  //   /* And also for touch screens: */
  //   lens.addEventListener('touchmove', moveLens);
  //   img.addEventListener('touchmove', moveLens);
  //   function moveLens(e) {
  //     let pos, x, y;
  //     /* Prevent any other actions that may occur when moving over the image */
  //     e.preventDefault();
  //     /* Get the cursor's x and y positions: */
  //     pos = getCursorPos(e);
  //     /* Calculate the position of the lens: */
  //     x = pos.x - (lens.offsetWidth / 2);
  //     y = pos.y - (lens.offsetHeight / 2);
  //     /* Prevent the lens from being positioned outside the image: */
  //     if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth; }
  //     if (x < 0) {x = 0; }
  //     if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight; }
  //     if (y < 0) {y = 0; }
  //     /* Set the position of the lens: */
  //     lens.style.left = x + 'px';
  //     lens.style.top = y + 'px';
  //     /* Display what the lens "sees": */
  //     result.style.backgroundPosition = '-' + (x * cx) + 'px -' + (y * cy) + 'px';
  //   }
  //   function getCursorPos(e) {
  //     let a, x = 0, y = 0;
  //     e = e || window.event;
  //     /* Get the x and y positions of the image: */
  //     a = img.getBoundingClientRect();
  //     /* Calculate the cursor's x and y coordinates, relative to the image: */
  //     x = e.pageX - a.left;
  //     y = e.pageY - a.top;
  //     /* Consider any page scrolling: */
  //     x = x - window.pageXOffset;
  //     y = y - window.pageYOffset;
  //     return {x : x, y : y};
  //   }
  // }


  // magnify(imgID, zoom) {
  //   let img, glass, w, h, bw;
  //   img = document.getElementById(imgID);

  //   /* Create magnifier glass: */
  //   glass = document.createElement('DIV');
  //   glass.setAttribute('class', 'img-magnifier-glass');

  //   /* Insert magnifier glass: */
  //   img.parentElement.insertBefore(glass, img);

  //   /* Set background properties for the magnifier glass: */
  //   glass.style.backgroundImage = 'url(\'' + img.src + '\')';
  //   glass.style.backgroundRepeat = 'no-repeat';
  //   glass.style.backgroundSize = (img.width * zoom) + 'px ' + (img.height * zoom) + 'px';
  //   bw = 3;
  //   w = glass.offsetWidth / 2;
  //   h = glass.offsetHeight / 2;

  //   /* Execute a function when someone moves the magnifier glass over the image: */
  //   glass.addEventListener('mousemove', moveMagnifier);
  //   img.addEventListener('mousemove', moveMagnifier);

  //   /*and also for touch screens:*/
  //   glass.addEventListener('touchmove', moveMagnifier);
  //   img.addEventListener('touchmove', moveMagnifier);
  //   function moveMagnifier(e) {
  //     let pos, x, y;
  //     /* Prevent any other actions that may occur when moving over the image */
  //     e.preventDefault();
  //     /* Get the cursor's x and y positions: */
  //     pos = getCursorPos(e);
  //     x = pos.x;
  //     y = pos.y;
  //     /* Prevent the magnifier glass from being positioned outside the image: */
  //     if (x > img.width - (w / zoom)) {x = img.width - (w / zoom); }
  //     if (x < w / zoom) {x = w / zoom; }
  //     if (y > img.height - (h / zoom)) {y = img.height - (h / zoom); }
  //     if (y < h / zoom) {y = h / zoom; }
  //     /* Set the position of the magnifier glass: */
  //     glass.style.left = (x - w) + 'px';
  //     glass.style.top = (y - h) + 'px';
  //     /* Display what the magnifier glass "sees": */
  //     glass.style.backgroundPosition = '-' + ((x * zoom) - w + bw) + 'px -' + ((y * zoom) - h + bw) + 'px';
  //   }

  //   function getCursorPos(e) {
  //     let a, x = 0, y = 0;
  //     e = e || window.event;
  //     /* Get the x and y positions of the image: */
  //     a = img.getBoundingClientRect();
  //     /* Calculate the cursor's x and y coordinates, relative to the image: */
  //     x = e.pageX - a.left;
  //     y = e.pageY - a.top;
  //     /* Consider any page scrolling: */
  //     x = x - window.pageXOffset;
  //     y = y - window.pageYOffset;
  //     return {x : x, y : y};
  //   }
  // }



  // @HostListener('mousemove', ['$event'])
  // zoomIn(event: MouseEvent) {
  //   const element = document.getElementById('overlay');
  //   element.style.display = 'inline-block';
  //   const img = document.getElementById('imgZoom');
  //   const posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
  //   const posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
  //   element.style.backgroundPosition = (posX * 4) + 'px ' + (posY * 4) + 'px';
  // }

  // @HostListener('mouseout')
  // zoomOut() {
  //   const element = document.getElementById('overlay');
  //   element.style.display = 'none';
  // }
}
