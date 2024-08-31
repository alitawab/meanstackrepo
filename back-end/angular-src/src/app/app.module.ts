import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule , Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './core/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ValidateService } from './services/validate.service';
import { ProductService } from './services/product.service';
import { SharedService } from './services/shared.service';
import { ShoppingcartService } from './services/shoppingcart.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthguardService } from './services/authguard.service';
import { NotificationService } from './services/notification.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/routes/home/home.component';
import { ProductComponent } from './components/shared/popup/product/product.component';
import { ClothingComponent } from './components/routes/clothing/clothing.component';
import { BeddingComponent } from './components/routes/bedding/bedding.component';
import { BabyComponent } from './components/routes/baby/baby.component';
import { BlanketComponent } from './components/routes/blanket/blanket.component';
import { ToyComponent } from './components/routes/toy/toy.component';
import { CartComponent } from './components/routes/cart/cart.component';
import { ProfileComponent } from './components/routes/user/profile/profile.component';
import { SigninComponent } from './components/routes/user/signin/signin.component';
import { SignupComponent } from './components/routes/user/signup/signup.component';
import { CredentialsComponent } from './components/shared/popup/credentials/credentials.component';
import { HeaderComponent } from './components/header/header.component';
import { ResetPasswordComponent } from './components/routes/user/reset-password/reset-password.component';
import { ActivationComponent } from './components/routes/user/activation/activation.component';
import { NotificationComponent } from './components/shared/notification/notification.component';
import { FooterComponent } from './components/footer/footer.component';
import { RatingComponent } from './components/shared/rating/rating.component';



const appRoutes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'user/signup' , component: SignupComponent },
  { path: 'user/signin' , component: SigninComponent },
  { path: 'user/reset' , component: ResetPasswordComponent},
  { path: 'user/activation/:token', component: ActivationComponent},
  { path: 'user/profile' , component: ProfileComponent , canActivate: [AuthguardService] },
  { path: 'cart' , component: CartComponent},
  { path: 'clothing' , component: ClothingComponent },
  { path: 'bedding' , component: BeddingComponent },
  { path: 'baby' , component: BabyComponent },
  { path: 'blankets' , component: BlanketComponent },
  { path: 'toys' , component: ToyComponent },
  { path: 'product/:data' , component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ClothingComponent,
    BeddingComponent,
    BabyComponent,
    BlanketComponent,
    ToyComponent,
    CartComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    CredentialsComponent,
    HeaderComponent,
    ResetPasswordComponent,
    ActivationComponent,
    NotificationComponent,
    FooterComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUilH5zil7erTDL6ZWm5zYQuOHZ8iz46k'
    }),
    FlexLayoutModule,
    MaterialModule,
    CarouselModule
  ],
  providers: [
    ValidateService,
    ProductService,
    ShoppingcartService,
    SharedService,
    AuthenticationService,
    AuthguardService,
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: ValidateService, multi: true }
  ],
  entryComponents: [CredentialsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
