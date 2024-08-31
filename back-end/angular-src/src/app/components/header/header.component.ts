import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { Router } from '@angular/router';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SharedService } from 'src/app/services/shared.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showDropDown = false;
  departmentShow = false;
  searchValue: any;
  searchTerm$ = new Subject<string>();
  results: Product;
  cartCount: any;

  departments: any[] = [
    {category: 'Clothing' , value: 'clothing'},
    {category: 'Baby Accessories' , value: 'baby'},
    {category: 'Bedding' , value: 'bedding'},
    {category: 'Blankets & Quilts' , value: 'blankets'},
    {category: 'Stuff Toys' , value: 'toys'}
  ];

  constructor(
    private productservice: ProductService,
    private router: Router,
    private cartservice: ShoppingcartService,
    public userAuth: AuthenticationService,
    public sharedService: SharedService,
    private data: DataService
  ) { }


  ngOnInit() {
    this.cartservice.getAllProductFromCart().subscribe(result => {
      this.data.changeCount(result.totalQuantity);
  });
    this.data.currentCount.subscribe(cartCount => this.cartCount = cartCount);
}

showDepartment() {
  this.departmentShow = !this.departmentShow;
}

departmentSelected(depart: Event) {
  this.router.navigate(['/' + depart]);
  this.departmentShow = false;
}

showResults(event: any) {
  this.searchTerm$.next(event.target.value);
  this.seacrhProduct();
}

seacrhProduct() {
  this.productservice.search(this.searchTerm$).subscribe(result => {
    this.showDropDown = true;
    this.results = result;
  });
}

productSelected(identifier: string) {
  this.searchValue = '';
  this.showDropDown = false;
  this.router.navigate(['/products/upload', {'data': identifier}]);

}

cartClicked() {
  this.router.navigate(['/cart']);
}
}
