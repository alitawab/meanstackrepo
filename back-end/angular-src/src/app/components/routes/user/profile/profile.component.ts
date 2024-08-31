import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/User.model';
import { NgForm } from '@angular/forms';

import { Product } from 'src/app/models/Product.model';

import { ValidateService } from 'src/app/services/validate.service';

import { ProductService } from 'src/app/services/product.service';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  details: User;
  isAdmin: Boolean;
  showAddproduct: Boolean;

  productUpload: Product = {
    _id: '',
    name: '',
    category: '',
    offer: '',
    price: '',
    quantity: null,
    productImage: [null]
  };

  constructor(
    private userAuth: AuthenticationService,
    private validate_product: ValidateService,
    private productservice: ProductService
    ) { }

  ngOnInit() {
    this.userAuth.profile().subscribe(user => {
      this.details = user;
      this.checkUserstatus(this.details.email);
    }, (err) => {
      console.log(err);
    });
  }

  checkUserstatus(email: string) {
    this.isAdmin = false;
    if (email === 'tech@onlineshoppingbazaar.com') {
      this.isAdmin = true;
    }
  }

  addProduct() {
    this.showAddproduct = true;
  }

  onFileSelected(event) {
    const files = <Array<File>>event.target.files;
    this.productUpload.productImage = files;
  }


  onSubmit(f: NgForm) {
    if (!this.validate_product.validateProduct(this.productUpload)) {
      return false;
    }
    this.productservice.createProduct(this.productUpload).subscribe(data => {
      console.log('product created successfully');
    });
    f.resetForm();
  }

}
