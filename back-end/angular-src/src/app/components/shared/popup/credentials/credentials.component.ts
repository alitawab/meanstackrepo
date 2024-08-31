import { Component, OnInit, Inject, Optional,  AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Contact } from '../../../../models/Contact.model';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css'],
})

export class CredentialsComponent implements OnInit, AfterViewInit {

  @ViewChild('stepper') stepper;

  @ViewChild('mapContainer', {read: false}) gmap: ElementRef;
  map: google.maps.Map;
  geocoder: google.maps.Geocoder;
  options = {
    center: {
      lat: 34.0479,
      lng: 100.6197
    },
    zoom: 18,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    draggable: true,
    MapTypeId: google.maps.MapTypeId.TERRAIN
  };

  latitude: number;
  longitude: number;

  contactInfo: Contact = {
    FullName: '',
    Phone_Number: '',
    Email: '',
    Address: '',
    Card_Details: {
      card_cvv: null,
      card_number: null,
      expiry_month: null,
      expiry_year: null,
      holder_name: '',
    },
    DeliveryLocation: {
      latitude: 0,
      longitude: 0
    }
  };
  showCardinput = false;
  paymentMethod = 'cod';

  submitted = false;

  constructor(
    private orderService: OrderService,
    private notification: NotificationService,
    @Optional() @Inject(MAT_DIALOG_DATA) public customerCart: any,
    public dialogRef: MatDialogRef<CredentialsComponent>
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

// createForm() {
//   this.registerForm = this.formBuilder.group({
//     fullName: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]],
//     address: ['', Validators.required],
//     phone: ['', Validators.required],
//   });
// }

// get f() {
//   return this.registerForm.controls;
// }
// onSubmit() {
//   this.submitted = true;
//   // stop here if form is invalid
//   if (this.registerForm.invalid) {
//     console.log(this.registerForm.controls.fullName);
//     return;
//   } else {
//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
//   }
// }

// onReset() {
//   this.submitted = false;
//   this.registerForm.reset();
// }

// confirmDeliveryLocation(event: Event , index: any) {
//   console.log(this.latitude, this.longitude);
// }

onSubmitPayment(paymentForm: NgForm) {
  if (paymentForm.status === 'VALID') {
    if (this.paymentMethod === 'card') {
      this.contactInfo.FullName = paymentForm.value['name'];
      this.contactInfo.Phone_Number = paymentForm.value['number'];
      this.contactInfo.Email = paymentForm.value['email'];
      this.contactInfo.Address = paymentForm.value['address'];
      this.contactInfo.DeliveryLocation = {
        latitude: this.latitude,
        longitude: this.longitude,
      };
      this.contactInfo.Card_Details = {
        card_cvv: paymentForm.value['cc_cvv'],
        card_number: paymentForm.value['cc_number'],
        expiry_month: paymentForm.value['cc_month'],
        expiry_year: paymentForm.value['cc_year'],
        holder_name: paymentForm.value['cc_name'],
      };
      this.apiCall(this.stepper.selectedIndex);
      paymentForm.reset();
    }
    if (this.paymentMethod === 'cod') {
      this.contactInfo.FullName = paymentForm.value['name'];
      this.contactInfo.Phone_Number = paymentForm.value['number'];
      this.contactInfo.Email = paymentForm.value['email'];
      this.contactInfo.Address = paymentForm.value['address'];
      this.contactInfo.DeliveryLocation = {
        latitude: this.latitude,
        longitude: this.longitude,
      };
      this.contactInfo.Card_Details = {
        card_cvv: null,
        card_number: null,
        expiry_month: null,
        expiry_year: null,
        holder_name: null,
      };
      console.log('in cod');
      this.apiCall(this.stepper.selectedIndex);
      paymentForm.reset();
    }
} else {
  alert('Customer Information Is Required');
  this.notification.error('invalid information added in the form', false);
  return {error: 'invalid information added in the form '};
}
  // if (this.showCardinput === true) {
  //   if (paymentForm.valid) {
  //     const StreetAddress = paymentForm.value['address'];
  //     const CardCvv = paymentForm.value['cc_cvv'];
  //     const CardExpiryMonth = paymentForm.value['cc_month'];
  //     const CardHolderName = paymentForm.value['cc_name'];
  //     const CardNumber = paymentForm.value['cc_number'];
  //     const CardExpiryYear = paymentForm.value['cc_year'];
  //     const Country = paymentForm.value['country'];
  //     const Email = paymentForm.value['email'];
  //     const FirstName = paymentForm.value['firstname'];
  //     const LastName = paymentForm.value['lastname'];
  //     const Phone = paymentForm.value['phone'];
  //     const same_address_checkbox: Boolean = paymentForm.value['same_address'];
  //     const save_info_checkbox: Boolean = paymentForm.value['save_info'];
  //     const State = paymentForm.value['state'];
  //     const Zip = paymentForm.value['zip'];
        // console.log(BillingAddress);
        // console.log(CreditCardCvv);
        // console.log(CreditCardExpiryMonth);
        // console.log(CreditCardHolderName);
        // console.log(CreditCardNumber);
        // console.log(CreditCardExpiryYear);
        // console.log(Country);
        // console.log(Email);
        // console.log(FirstName);
        // console.log(LastName);
        // console.log(same_address_checkbox);
        // console.log(save_info_checkbox);
        // console.log(State);
        // console.log(zip);
  //     this.contactInfo.FirstName = FirstName;
  //     this.contactInfo.LastName = LastName;
  //     this.contactInfo.Email = Email;
  //     this.contactInfo.Phone_Number = Phone;
  //     this.contactInfo.Billing_Address = {
  //       country: Country,
  //       state: State,
  //       street_address: StreetAddress,
  //       zip: Zip,
  //     };
  //     this.contactInfo.Card_Details = {
  //       card_cvv: CardCvv,
  //       card_number: CardNumber,
  //       expiry_month: CardExpiryMonth,
  //       expiry_year: CardExpiryYear,
  //       holder_name: CardHolderName,
  //     };

  //   } else {
  //     console.log('i am not valid');
  //   }
  // } else {
  //   console.log('Payment details are compulsory');
  // }
}

printClicked() {
  this.dialogRef.close();
}

  onSubmitPromo(promoForm: NgForm) {
    console.log('data');
  }

  radioInput(radio: Event) {
    this.showCardinput = true;
  }



   // placeOrder() {
  //   console.log('Order Placed ' + this.contactInfo);
  //   this.dialogref.close();
  //   this.router.navigateByUrl('/');
  // }

  apiCall (index) {
      this.orderService.createOrder(this.contactInfo , this.customerCart.cart).subscribe(result1 => {
        if (result1) {
          this.notification.success('Your Order has been Successfully created.', false);
        }
      });
    this.stepperHandler(index + 1);
  }

  stepperHandler(index) {
    this.stepper.selectedIndex = index;
  }


  // GOOGLE MAPS IMPLEMENTATION

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.options);
    this.getcurrentLocation();
  }

  getcurrentLocation() {
    if (navigator.geolocation) {
      const self = this;
      navigator.geolocation.getCurrentPosition(function(response) {
        self.showPosition(response, self);
      }, function () {
        alert('Unable to get GPS location');
      }, {
        enableHighAccuracy: true
      });
    } else {
      alert('Geolocation is not supported by the browser');
    }
  }

  showPosition(position: any, self: any) {
    const icon = {
      url: '../../../../../assets/images/marker.png',
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0)
    };
    let myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    self.marker = new google.maps.Marker({
      position: myLatLng,
      map: self.map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      title: 'Delivery Location',
    });

    self.accuracy = position.coords.accuracy;
    self.map.panTo(myLatLng);
    this.latitude = myLatLng.lat();
    this.longitude = myLatLng.lng();
    // self.marker.setPosition(self.map.getCenter());

    google.maps.event.addListener(self.map, 'dragstart', () => {
      myLatLng = new google.maps.LatLng(self.marker.getPosition().lat(), self.marker.getPosition().lng());
      self.marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
      self.marker.setPosition(myLatLng);
    });
    google.maps.event.addListener(self.map, 'drag', () => {
      myLatLng = new google.maps.LatLng(self.map.getCenter().lat(), self.map.getCenter().lng());
      self.marker.setPosition(myLatLng);
    });
    google.maps.event.addListener(self.map, 'dragend', (result, status) => {
      myLatLng = new google.maps.LatLng(self.marker.getPosition().lat(), self.marker.getPosition().lng());
      self.marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
      self.marker.setPosition(myLatLng);
      this.latitude = myLatLng.lat();
      this.longitude = myLatLng.lng();
    });
    // google.maps.event.addListener(self.map, 'bounds_changed', function(result) {
    //   self.map.panTo(myLatLng);
    //   console.log(self.marker.getPosition());
    //   self.marker.setPosition(myLatLng);
    // });
    google.maps.event.addListener(self.map, 'zoom_changed', () => {
      // self.marker.setPosition(myLatLng);
      self.map.panTo(myLatLng);
    });
  }

  autoFormat(value: any) {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{7})$/);
    if (match) {
      (<HTMLInputElement>document.getElementById('number')).value = '(' + match[1] + ') - ' + match[2];
    }
  }

  methodSelected(value: string) {
    if (value === 'card') {
      this.paymentMethod = 'card';
    }
    if (value === 'cod') {
      this.paymentMethod = 'cod';
    }
  }

}
