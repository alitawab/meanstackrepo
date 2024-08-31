(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* container{\r\n  width: 100%;\r\n  height: 100%;\r\n} */\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59ICovXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n\r\n<!-- <div fxLayout=\"column\">\r\n  <flash-messages></flash-messages>\r\n  <div fxLayout=\"row\">\r\n    <app-navbar></app-navbar>\r\n  </div>\r\n  <div fxLayout=\"row\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div fxLayout=\"row\" >\r\n    <h1>Footer</h1>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(cdRef, mediaObserver) {
        this.cdRef = cdRef;
        this.mediaObserver = mediaObserver;
        this.title = 'angular-src';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mediaSub = this.mediaObserver.media$.subscribe(function (change) {
            _this.device = change;
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.cdRef.detectChanges();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.mediaSub) {
            this.mediaSub.unsubscribe();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_routes_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/routes/home/home.component */ "./src/app/components/routes/home/home.component.ts");
/* harmony import */ var _components_shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/shared/popup/product/product.component */ "./src/app/components/shared/popup/product/product.component.ts");
/* harmony import */ var _components_routes_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/routes/clothing/clothing.component */ "./src/app/components/routes/clothing/clothing.component.ts");
/* harmony import */ var _components_routes_bedding_bedding_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/routes/bedding/bedding.component */ "./src/app/components/routes/bedding/bedding.component.ts");
/* harmony import */ var _components_routes_baby_baby_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/routes/baby/baby.component */ "./src/app/components/routes/baby/baby.component.ts");
/* harmony import */ var _components_routes_blanket_blanket_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/routes/blanket/blanket.component */ "./src/app/components/routes/blanket/blanket.component.ts");
/* harmony import */ var _components_routes_toy_toy_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/routes/toy/toy.component */ "./src/app/components/routes/toy/toy.component.ts");
/* harmony import */ var _components_routes_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/routes/cart/cart.component */ "./src/app/components/routes/cart/cart.component.ts");
/* harmony import */ var _components_routes_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/routes/user/profile/profile.component */ "./src/app/components/routes/user/profile/profile.component.ts");
/* harmony import */ var _components_routes_user_signin_signin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/routes/user/signin/signin.component */ "./src/app/components/routes/user/signin/signin.component.ts");
/* harmony import */ var _components_routes_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/routes/user/signup/signup.component */ "./src/app/components/routes/user/signup/signup.component.ts");
/* harmony import */ var _components_shared_popup_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/shared/popup/credentials/credentials.component */ "./src/app/components/shared/popup/credentials/credentials.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_routes_user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/routes/user/reset-password/reset-password.component */ "./src/app/components/routes/user/reset-password/reset-password.component.ts");
/* harmony import */ var _components_routes_user_activation_activation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/routes/user/activation/activation.component */ "./src/app/components/routes/user/activation/activation.component.ts");
/* harmony import */ var _components_shared_notification_notification_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/shared/notification/notification.component */ "./src/app/components/shared/notification/notification.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_shared_rating_rating_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/shared/rating/rating.component */ "./src/app/components/shared/rating/rating.component.ts");





































var appRoutes = [
    { path: '', component: _components_routes_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"] },
    { path: 'user/signup', component: _components_routes_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_29__["SignupComponent"] },
    { path: 'user/signin', component: _components_routes_user_signin_signin_component__WEBPACK_IMPORTED_MODULE_28__["SigninComponent"] },
    { path: 'user/reset', component: _components_routes_user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__["ResetPasswordComponent"] },
    { path: 'user/activation/:token', component: _components_routes_user_activation_activation_component__WEBPACK_IMPORTED_MODULE_33__["ActivationComponent"] },
    { path: 'user/profile', component: _components_routes_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_16__["AuthguardService"]] },
    { path: 'cart', component: _components_routes_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"] },
    { path: 'clothing', component: _components_routes_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_21__["ClothingComponent"] },
    { path: 'bedding', component: _components_routes_bedding_bedding_component__WEBPACK_IMPORTED_MODULE_22__["BeddingComponent"] },
    { path: 'baby', component: _components_routes_baby_baby_component__WEBPACK_IMPORTED_MODULE_23__["BabyComponent"] },
    { path: 'blankets', component: _components_routes_blanket_blanket_component__WEBPACK_IMPORTED_MODULE_24__["BlanketComponent"] },
    { path: 'toys', component: _components_routes_toy_toy_component__WEBPACK_IMPORTED_MODULE_25__["ToyComponent"] },
    { path: 'product/:data', component: _components_shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_20__["ProductComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _components_routes_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _components_shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_20__["ProductComponent"],
                _components_routes_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_21__["ClothingComponent"],
                _components_routes_bedding_bedding_component__WEBPACK_IMPORTED_MODULE_22__["BeddingComponent"],
                _components_routes_baby_baby_component__WEBPACK_IMPORTED_MODULE_23__["BabyComponent"],
                _components_routes_blanket_blanket_component__WEBPACK_IMPORTED_MODULE_24__["BlanketComponent"],
                _components_routes_toy_toy_component__WEBPACK_IMPORTED_MODULE_25__["ToyComponent"],
                _components_routes_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"],
                _components_routes_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"],
                _components_routes_user_signin_signin_component__WEBPACK_IMPORTED_MODULE_28__["SigninComponent"],
                _components_routes_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_29__["SignupComponent"],
                _components_shared_popup_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_30__["CredentialsComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_31__["HeaderComponent"],
                _components_routes_user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__["ResetPasswordComponent"],
                _components_routes_user_activation_activation_component__WEBPACK_IMPORTED_MODULE_33__["ActivationComponent"],
                _components_shared_notification_notification_component__WEBPACK_IMPORTED_MODULE_34__["NotificationComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__["FooterComponent"],
                _components_shared_rating_rating_component__WEBPACK_IMPORTED_MODULE_36__["RatingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAUilH5zil7erTDL6ZWm5zYQuOHZ8iz46k'
                }),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"]
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_11__["ValidateService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"],
                _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_14__["ShoppingcartService"],
                _services_shared_service__WEBPACK_IMPORTED_MODULE_13__["SharedService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"],
                _services_authguard_service__WEBPACK_IMPORTED_MODULE_16__["AuthguardService"],
                _services_notification_service__WEBPACK_IMPORTED_MODULE_17__["NotificationService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_validate_service__WEBPACK_IMPORTED_MODULE_11__["ValidateService"], multi: true }
            ],
            entryComponents: [_components_shared_popup_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_30__["CredentialsComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n}\r\n\r\n@media (max-height:800px){\r\n\tfooter { position: static; }\r\n\theader { padding-top:40px; }\r\n}\r\n\r\n.footer-distributed{\r\n\tbackground-color: rgb(0, 0, 95);\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tfont: bold 16px sans-serif;\r\n\tpadding: 50px 50px 60px 50px;\r\n\tmargin-top: 80px;\r\n}\r\n\r\n.footer-distributed .footer-left,\r\n.footer-distributed .footer-center,\r\n.footer-distributed .footer-right{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n\r\n/* Footer left */\r\n\r\n.footer-distributed .footer-left{\r\n\twidth: 30%;\r\n}\r\n\r\n.footer-distributed h3{\r\n\tcolor:  #ffffff;\r\n\tfont: normal 36px 'Cookie', cursive;\r\n\tmargin: 0;\r\n}\r\n\r\n/* The company logo */\r\n\r\n.footer-distributed .footer-left img{\r\n\twidth: 30%;\r\n}\r\n\r\n.footer-distributed h3 span{\r\n\tcolor:  #e0ac1c;\r\n}\r\n\r\n/* Footer links */\r\n\r\n.footer-distributed .footer-links{\r\n\tcolor:  #ffffff;\r\n\tmargin: 20px 0 12px;\r\n}\r\n\r\n.footer-distributed .footer-links a{\r\n\tdisplay:inline-block;\r\n\tline-height: 1.8;\r\n\ttext-decoration: none;\r\n\tcolor:  inherit;\r\n}\r\n\r\n.footer-distributed .footer-company-name{\r\n\tcolor:  #8f9296;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n\r\n/* Footer Center */\r\n\r\n.footer-distributed .footer-center{\r\n\twidth: 35%;\r\n}\r\n\r\n.footer-distributed .footer-center i{\r\n\tbackground-color:  #33383b;\r\n\tcolor: #ffffff;\r\n\tfont-size: 25px;\r\n\twidth: 38px;\r\n\theight: 38px;\r\n\tborder-radius: 50%;\r\n\ttext-align: center;\r\n\tline-height: 42px;\r\n\tmargin: 10px 15px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.footer-distributed .footer-center i.fa-envelope{\r\n\tfont-size: 17px;\r\n\tline-height: 38px;\r\n}\r\n\r\n.footer-distributed .footer-center p{\r\n\tdisplay: inline-block;\r\n\tcolor: #ffffff;\r\n\tvertical-align: middle;\r\n\tmargin:0;\r\n}\r\n\r\n.footer-distributed .footer-center p span{\r\n\tdisplay:block;\r\n\tfont-weight: normal;\r\n\tfont-size:14px;\r\n\tline-height:2;\r\n}\r\n\r\n.footer-distributed .footer-center p a{\r\n\tcolor:  #e0ac1c;\r\n\ttext-decoration: none;;\r\n}\r\n\r\n/* Footer Right */\r\n\r\n.footer-distributed .footer-right{\r\n\twidth: 30%;\r\n}\r\n\r\n.footer-distributed .footer-company-about{\r\n\tline-height: 20px;\r\n\tcolor:  #92999f;\r\n\tfont-size: 13px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n\r\n.footer-distributed .footer-company-about span{\r\n\tdisplay: block;\r\n\tcolor:  #ffffff;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.footer-distributed .footer-icons{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.footer-distributed .footer-icons a{\r\n\tdisplay: inline-block;\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tcursor: pointer;\r\n\tbackground-color:  #33383b;\r\n\tborder-radius: 2px;\r\n\r\n\tfont-size: 20px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tline-height: 35px;\r\n\r\n\tmargin-right: 3px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n/* Here is the code for Responsive Footer */\r\n\r\n/* You can remove below code if you don't want Footer to be responsive */\r\n\r\n@media (max-width: 880px) {\r\n\r\n\t.footer-distributed .footer-left,\r\n\t.footer-distributed .footer-center,\r\n\t.footer-distributed .footer-right{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 40px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.footer-distributed .footer-center i{\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWOztBQUVEO0NBQ0MsU0FBUyxpQkFBaUIsRUFBRTtDQUM1QixTQUFTLGlCQUFpQixFQUFFO0NBQzVCOztBQUdEO0NBQ0MsZ0NBQWdDO0NBQ2hDLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLDJCQUEyQjtDQUMzQiw2QkFBNkI7Q0FDN0IsaUJBQWlCO0NBQ2pCOztBQUVEOzs7Q0FHQyxzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCOztBQUVELGlCQUFpQjs7QUFFakI7Q0FDQyxXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsb0NBQW9DO0NBQ3BDLFVBQVU7Q0FDVjs7QUFFRCxzQkFBc0I7O0FBRXRCO0NBQ0MsV0FBVztDQUNYOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUVELGtCQUFrQjs7QUFFbEI7Q0FDQyxnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsVUFBVTtDQUNWOztBQUVELG1CQUFtQjs7QUFFbkI7Q0FDQyxXQUFXO0NBQ1g7O0FBR0Q7Q0FDQywyQkFBMkI7Q0FDM0IsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkI7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsU0FBUztDQUNUOztBQUVEO0NBQ0MsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsY0FBYztDQUNkOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0Qjs7QUFHRCxrQkFBa0I7O0FBRWxCO0NBQ0MsV0FBVztDQUNYOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLFVBQVU7Q0FDVjs7QUFFRDtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEI7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsMkJBQTJCO0NBQzNCLG1CQUFtQjs7Q0FFbkIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsa0JBQWtCOztDQUVsQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25COztBQUVELDRDQUE0Qzs7QUFDNUMseUVBQXlFOztBQUd6RTs7Q0FFQzs7O0VBR0MsZUFBZTtFQUNmLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25COztDQUVEO0VBQ0MsZUFBZTtFQUNmOztDQUVEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OjgwMHB4KXtcclxuXHRmb290ZXIgeyBwb3NpdGlvbjogc3RhdGljOyB9XHJcblx0aGVhZGVyIHsgcGFkZGluZy10b3A6NDBweDsgfVxyXG59XHJcblxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgOTUpO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRmb250OiBib2xkIDE2cHggc2Fucy1zZXJpZjtcclxuXHRwYWRkaW5nOiA1MHB4IDUwcHggNjBweCA1MHB4O1xyXG5cdG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi8qIEZvb3RlciBsZWZ0ICovXHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdHtcclxuXHR3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIGgze1xyXG5cdGNvbG9yOiAgI2ZmZmZmZjtcclxuXHRmb250OiBub3JtYWwgMzZweCAnQ29va2llJywgY3Vyc2l2ZTtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIFRoZSBjb21wYW55IGxvZ28gKi9cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0IGltZ3tcclxuXHR3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIGgzIHNwYW57XHJcblx0Y29sb3I6ICAjZTBhYzFjO1xyXG59XHJcblxyXG4vKiBGb290ZXIgbGlua3MgKi9cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rc3tcclxuXHRjb2xvcjogICNmZmZmZmY7XHJcblx0bWFyZ2luOiAyMHB4IDAgMTJweDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIGF7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0bGluZS1oZWlnaHQ6IDEuODtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICBpbmhlcml0O1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1uYW1le1xyXG5cdGNvbG9yOiAgIzhmOTI5NjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZvb3RlciBDZW50ZXIgKi9cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXJ7XHJcblx0d2lkdGg6IDM1JTtcclxufVxyXG5cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAgIzMzMzgzYjtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRmb250LXNpemU6IDI1cHg7XHJcblx0d2lkdGg6IDM4cHg7XHJcblx0aGVpZ2h0OiAzOHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDQycHg7XHJcblx0bWFyZ2luOiAxMHB4IDE1cHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpLmZhLWVudmVsb3Ble1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuXHRsaW5lLWhlaWdodDogMzhweDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwe1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdG1hcmdpbjowO1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHAgc3BhbntcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0bGluZS1oZWlnaHQ6MjtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIGF7XHJcblx0Y29sb3I6ICAjZTBhYzFjO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTs7XHJcbn1cclxuXHJcblxyXG4vKiBGb290ZXIgUmlnaHQgKi9cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodHtcclxuXHR3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1hYm91dHtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRjb2xvcjogICM5Mjk5OWY7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1hYm91dCBzcGFue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGNvbG9yOiAgI2ZmZmZmZjtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWljb25ze1xyXG5cdG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1pY29ucyBhe1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMzVweDtcclxuXHRoZWlnaHQ6IDM1cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICAjMzMzODNiO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRsaW5lLWhlaWdodDogMzVweDtcclxuXHJcblx0bWFyZ2luLXJpZ2h0OiAzcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4vKiBIZXJlIGlzIHRoZSBjb2RlIGZvciBSZXNwb25zaXZlIEZvb3RlciAqL1xyXG4vKiBZb3UgY2FuIHJlbW92ZSBiZWxvdyBjb2RlIGlmIHlvdSBkb24ndCB3YW50IEZvb3RlciB0byBiZSByZXNwb25zaXZlICovXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcblxyXG5cdC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG5cdC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcblx0LmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGl7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-distributed\">\n\n  <div class=\"footer-left\">\n      <img src=\"../../../assets/images/logo.jpg\">\n    <h3>Online<span>Bazaar</span></h3>\n\n    <p class=\"footer-links\">\n      <a href=\"#\">Home</a>\n      |\n      <a href=\"#\">Blog</a>\n      |\n      <a href=\"#\">About</a>\n      |\n      <a href=\"#\">Contact</a>\n    </p>\n\n    <p class=\"footer-company-name\">© 2019 Online Shopping Bazaar Pvt. Ltd.</p>\n  </div>\n\n  <div class=\"footer-center\">\n    <div>\n      <i class=\"fa fa-map-marker\"></i>\n        <p><span>Shope # 114 -\n          New Anarkali.</span>\n        Lahore, Punjab - 54000</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-phone\"></i>\n      <p>+92 (423) - 7321942</p>\n    </div>\n    <div>\n      <i class=\"fa fa-envelope\"></i>\n      <p><a href=\"mailto:support@eduonix.com\">support@onlineshoppingbazaar.com</a></p>\n    </div>\n  </div>\n  <div class=\"footer-right\">\n    <p class=\"footer-company-about\">\n      <span>About the company</span>\n      We offer a wide product range. We deal in all kind of ready made childeren clothing. We also deal in bed-sheets, cushions, towel, pray mat and complete dowry packages.</p>\n    <div class=\"footer-icons\">\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-instagram\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-youtube\"></i></a>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* *{\r\n  margin: 0;\r\n  padding: 0;\r\n  color:#fefefe;\r\n  box-sizing: border-box;\r\n  text-transform: uppercase;\r\n}\r\n\r\nnav{\r\n  background:rgb(0, 0, 95);\r\n  opacity: 0.8;\r\n  padding: 10px 40px 10px 70px;\r\n  border: 1px solid yellow;\r\n  border-left: none;\r\n  border-top: none;\r\n  border-right: none;\r\n}\r\n\r\nnav ul{\r\n  display: flex;\r\n  list-style: none;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n}\r\nnav ul li {\r\n  padding: 0 3px;\r\n}\r\n\r\nnav ul li.logo  {\r\n  flex: 1;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n}\r\n\r\nnav ul li.logo a:hover{\r\n  cursor: pointer;\r\n}\r\n\r\nnav ul li.categories{\r\n  padding: 0 20px 0 0;\r\n}\r\nnav ul li.categories a{\r\n  display: inline-flex;\r\n  padding: 0 10px;\r\n  font-weight: 700;\r\n  border-right: 1px solid cyan;\r\n  cursor: pointer;\r\n}\r\n\r\nnav ul li.cartclass {\r\n  display: inline-flex;\r\n}\r\n\r\nnav ul li.dropdown{\r\n  display: inline-flex;\r\n  padding: 10px 0 0 0;\r\n}\r\n\r\nnav ul li.dropdown a i {\r\n  height: 20px;\r\n  width: 30px;\r\n  text-align: center;\r\n  line-height: 10px;\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\nnav ul li.dropdown a span {\r\n  font-size: 10px;\r\n}\r\n\r\nnav ul li.dropdown ul.dropdown-menu{\r\n  display: none;\r\n  min-width: fit-content;\r\n  max-width: 100%;\r\n  padding: 2px 2px 2px 2px;\r\n  border: 1px solid #cccccc;\r\n}\r\n\r\nnav ul li.dropdown ul.dropdown-menu a{\r\n  color: #000000;\r\n  text-decoration: none;\r\n  padding: 2px;\r\n}\r\n\r\nnav ul li.dropdown:hover .dropdown-menu{\r\n  display: block;\r\n}\r\n\r\nnav ul li.dropdown a:hover{\r\n  color: yellow;\r\n}\r\n\r\nnav ul li.search-icon {\r\n  height: 40px;\r\n  width: 220px;\r\n  display: none;\r\n  background: #f2f2f2;\r\n  border-radius: 5px;\r\n}\r\n\r\nnav ul li.search-icon input {\r\n  height: 100%;\r\n  width: 180px;\r\n  border: none;\r\n  outline: none;\r\n  padding: 0 10px;\r\n  color: #000;\r\n  font-size: 16px;\r\n  border-radius: 5px 0 0 5px;\r\n}\r\n\r\nnav ul li.search-icon .icon{\r\n  height: 100%;\r\n  width: 40px;\r\n  line-height: 40px;\r\n  text-align: center;\r\n  border: 1px solid #cccccc;\r\n  border-radius: 0 5px 5px 0;\r\n}\r\n\r\nnav ul li.search-icon .icon:hover{\r\n  background: #e6e6e6;\r\n}\r\n\r\nnav ul li.search-icon .icon span {\r\n  color: #222222;\r\n  font-size: 18px;\r\n}\r\n\r\nnav ul li.search-icon ul{\r\n  background: black;\r\n}\r\n\r\nnav ul li.btn{\r\n  font-size: 30px;\r\n  padding: 0 .2em 0 .3em;\r\n  display: none;\r\n}\r\n\r\nnav ul li.btn span{\r\n  height: 40px;\r\n  width: 40px;\r\n  text-align: center;\r\n  line-height: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\nnav ul li.cart{\r\n  font-size: 30px;\r\n  padding: 0 0 0 0;\r\n\r\n}\r\n\r\nnav ul li.cart i{\r\n  height: 40px;\r\n  width: 40px;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  cursor: pointer;\r\n}\r\nnav ul li.cart span {\r\n  font-size: 20px;\r\n}\r\n\r\n@media screen and (max-width: 1100px){\r\n  nav{\r\n    padding: 10px 40px 10px 0;\r\n  }\r\n  nav ul li.logo{\r\n    display: none;\r\n  }\r\n  nav ul li.categories{\r\n    display: none;\r\n  }\r\n\r\n  nav ul li.btn{\r\n    flex: 1;\r\n    display: inline-flex;\r\n  }\r\n\r\n\r\n}\r\n\r\n/* Smartphones (portrait) -----------\r\n@media screen and (max-width : 900px) {\r\n  nav ul li.categories{\r\n    display: none;\r\n  }\r\n  nav ul li.btn{\r\n    display: inline-flex;\r\n    flex: 1;\r\n  }\r\n\r\n  nav ul li.search-icon{\r\n    display:none;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 1100px){\r\n  div img{\r\n    height: 200px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width : 900px){\r\n  div {\r\n    display: none;\r\n  }\r\n  mat-form-field{\r\n    display: block;\r\n\r\n  }\r\n}\r\n */\r\n\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n\r\nheader {\r\n  position: relative;\r\n  top: 0px;\r\n  background-color: rgb(0, 0, 95);\r\n  width: 100%;\r\n  z-index: 1000;\r\n}\r\n\r\n\r\n.container {\r\n  max-width: 130rem;\r\n  padding: 0 2rem;\r\n  height: 5.9rem;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n\r\n.logo-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.nav-btn {\r\n  flex: 3;\r\n  display: flex;\r\n}\r\n\r\n\r\n.nav-links {\r\n  flex: 2;\r\n}\r\n\r\n\r\n.log-sign {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.logo-img {\r\n  height: 1.4rem;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: 1.8s;\r\n  behavior: smooth;\r\n}\r\n\r\n\r\n.logo-img:hover {\r\n  transform: rotate(720deg);\r\n\r\n}\r\n\r\n\r\n.logo {\r\n  color: #fff;\r\n  font-size: 1.2rem;\r\n  margin: 2px auto;\r\n  font-weight: 600;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  line-height: 3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.logo span {\r\n  font-weight: 300;\r\n}\r\n\r\n\r\n.cart{\r\n  display: flex;\r\n  align-items: center;\r\n  padding: .3rem 1.1rem;\r\n  font-size: 2.6rem;\r\n  line-height: 1;\r\n  margin: 0 .2rem;\r\n  color: #fff;\r\n  transition: .3s;\r\n}\r\n\r\n\r\n.cart:hover {\r\n  background-color: tomato;\r\n}\r\n\r\n\r\n.btn {\r\n  display: inline-block;\r\n  padding: .5rem 1.3rem;\r\n  font-size: 1rem;\r\n\r\n  line-height: 1;\r\n  margin: 0 .2rem;\r\n  transition: .3s;\r\n}\r\n\r\n\r\n.btn.solid, .btn.transparent:hover {\r\n  background-color: tomato;\r\n  color: #69bde7;\r\n}\r\n\r\n\r\n.btn.transparent, .btn.solid:hover {\r\n  background-color: transparent;\r\n  color: white;\r\n}\r\n\r\n\r\n.nav-links>ul {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.nav-link {\r\n  display: block;\r\n  padding: 0.5rem 0.6rem;\r\n}\r\n\r\n\r\n.nav-link>a {\r\n  line-height: 5rem;\r\n  color: #fff;\r\n  padding: 0 .6rem;\r\n  letter-spacing: 1px;\r\n  font-size: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  transition: .5s;\r\n}\r\n\r\n\r\n.nav-link>a>i {\r\n  margin-left: .1rem;\r\n}\r\n\r\n\r\n.nav-link:hover>a {\r\n  transform: scale(1.1);\r\n  background-color: rgb(0, 0, 85);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.hamburger-menu-container {\r\n  flex: 1;\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n\r\n.hamburger-menu {\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n\r\n.hamburger-menu div {\r\n  width: 1.6rem;\r\n  height: 3px;\r\n  border-radius: 3px;\r\n  background-color: #fff;\r\n  position: relative;\r\n  transition: .5s;\r\n  z-index: 1001;\r\n}\r\n\r\n\r\n.hamburger-menu div:before,\r\n.hamburger-menu div:after{\r\n    content: '';\r\n    position: absolute;\r\n    width: inherit;\r\n    height: inherit;\r\n    background-color: #fff;\r\n    border-radius: 3px;\r\n    transition: .5s;\r\n}\r\n\r\n\r\n.hamburger-menu div:before{\r\n    transform: translateY(-7px);\r\n}\r\n\r\n\r\n.hamburger-menu div:after{\r\n    transform: translateY(7px);\r\n}\r\n\r\n\r\n#check {\r\n  position: absolute;\r\n  top: 40%;\r\n  right: 2rem;\r\n  transform: translateY(-50%);\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  z-index: 90000;\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  display: none;\r\n}\r\n\r\n\r\n#check:checked ~.hamburger-menu-container\r\n.hamburger-menu div{\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n#check:checked ~.hamburger-menu-container\r\n.hamburger-menu div::before{\r\n  transform: translateY(0) rotate(-45deg);\r\n}\r\n\r\n\r\n#check:checked ~.hamburger-menu-container\r\n.hamburger-menu div::after{\r\n  transform: translateY(0) rotate(45deg);\r\n}\r\n\r\n\r\n@-webkit-keyframes animation {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(15px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n\r\n@keyframes animation {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(15px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n\r\n@media (max-width:1270px) {\r\n  .hamburger-menu-container {\r\n    display: flex;\r\n  }\r\n  #check {\r\n    display: block;\r\n  }\r\n  .nav-btn {\r\n    position: fixed;\r\n    height: calc(100vh - 3rem);\r\n    top: 3rem;\r\n    left: 0;\r\n    width: 100%;\r\n    background-color: blue;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    transform: translateX(100%);\r\n    transition: .65s;\r\n  }\r\n\r\n  #check:checked~.nav-btn {\r\n    transform: translateX(0);\r\n  }\r\n  #check:checked~.nav-btn .log-sign {\r\n    -webkit-animation: animation .5s ease forwards var(--i);\r\n            animation: animation .5s ease forwards var(--i);\r\n  }\r\n  .nav-links {\r\n    display: none;\r\n  }\r\n  .log-sign {\r\n    flex: initial;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    padding: 1.5rem 1.9rem;\r\n    opacity: 0;\r\n    transform: translateY(15px);\r\n\r\n  }\r\n\r\n  .btn {\r\n    padding: 1.5rem 2.3rem;\r\n    font-size: 1.8rem;\r\n    margin: .8rem 1rem;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdU5HOzs7QUFHSDtFQUNFLGlCQUFpQjtDQUNsQjs7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkI7OztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGNBQWM7Q0FDZjs7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtDQUNwQjs7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCOzs7QUFFRDtFQUNFLFFBQVE7RUFDUixjQUFjO0NBQ2Y7OztBQUVEO0VBQ0UsUUFBUTtDQUNUOzs7QUFFRDtFQUNFLFFBQVE7RUFDUixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtDQUNyQjs7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOzs7QUFFRDtFQUNFLDBCQUEwQjs7Q0FFM0I7OztBQUVEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjs7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7OztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjs7O0FBRUQ7RUFDRSx5QkFBeUI7Q0FDMUI7OztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixnQkFBZ0I7O0VBRWhCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCOzs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0NBQ2hCOzs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0NBQ2Q7OztBQUVEO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7Q0FDckI7OztBQUVEO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtDQUN4Qjs7O0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLGdCQUFnQjtDQUNqQjs7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7OztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxnQkFBZ0I7Q0FDakI7OztBQUdEO0VBQ0UsUUFBUTtFQUNSLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsMEJBQTBCO0NBQzNCOzs7QUFFRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7O0NBRXpCOzs7QUFFRDtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7Q0FDZjs7O0FBRUQ7O0lBRUksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25COzs7QUFFRDtJQUNJLDRCQUE0QjtDQUMvQjs7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7OztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztDQUNmOzs7QUFDRDs7RUFFRSw4QkFBOEI7Q0FDL0I7OztBQUVEOztFQUVFLHdDQUF3QztDQUN6Qzs7O0FBRUQ7O0VBRUUsdUNBQXVDO0NBQ3hDOzs7QUFFRDtFQUNFO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtHQUM3QjtFQUNEO0lBQ0UsV0FBVztJQUNYLDJCQUEyQjtHQUM1QjtDQUNGOzs7QUFURDtFQUNFO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtHQUM3QjtFQUNEO0lBQ0UsV0FBVztJQUNYLDJCQUEyQjtHQUM1QjtDQUNGOzs7QUFFRDtFQUNFO0lBQ0UsY0FBYztHQUNmO0VBQ0Q7SUFDRSxlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSx5QkFBeUI7R0FDMUI7RUFDRDtJQUNFLHdEQUFnRDtZQUFoRCxnREFBZ0Q7R0FDakQ7RUFDRDtJQUNFLGNBQWM7R0FDZjtFQUNEO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCw0QkFBNEI7O0dBRTdCOztFQUVEO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtHQUNiO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICp7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6I2ZlZmVmZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbm5hdntcclxuICBiYWNrZ3JvdW5kOnJnYigwLCAwLCA5NSk7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDcwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG5uYXYgdWx7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbm5hdiB1bCBsaSB7XHJcbiAgcGFkZGluZzogMCAzcHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5sb2dvICB7XHJcbiAgZmxleDogMTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxubmF2IHVsIGxpLmxvZ28gYTpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5jYXRlZ29yaWVze1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XHJcbn1cclxubmF2IHVsIGxpLmNhdGVnb3JpZXMgYXtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBjeWFuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubmF2IHVsIGxpLmNhcnRjbGFzcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5kcm9wZG93bntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG59XHJcblxyXG5uYXYgdWwgbGkuZHJvcGRvd24gYSBpIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxubmF2IHVsIGxpLmRyb3Bkb3duIGEgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5uYXYgdWwgbGkuZHJvcGRvd24gdWwuZHJvcGRvd24tbWVudXtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG59XHJcblxyXG5uYXYgdWwgbGkuZHJvcGRvd24gdWwuZHJvcGRvd24tbWVudSBhe1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudXtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxubmF2IHVsIGxpLmRyb3Bkb3duIGE6aG92ZXJ7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxubmF2IHVsIGxpLnNlYXJjaC1pY29uIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5zZWFyY2gtaWNvbiBpbnB1dCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG59XHJcblxyXG5uYXYgdWwgbGkuc2VhcmNoLWljb24gLmljb257XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG59XHJcblxyXG5uYXYgdWwgbGkuc2VhcmNoLWljb24gLmljb246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxufVxyXG5cclxubmF2IHVsIGxpLnNlYXJjaC1pY29uIC5pY29uIHNwYW4ge1xyXG4gIGNvbG9yOiAjMjIyMjIyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxubmF2IHVsIGxpLnNlYXJjaC1pY29uIHVse1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG5uYXYgdWwgbGkuYnRue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwYWRkaW5nOiAwIC4yZW0gMCAuM2VtO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5idG4gc3BhbntcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubmF2IHVsIGxpLmNhcnR7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDA7XHJcblxyXG59XHJcblxyXG5uYXYgdWwgbGkuY2FydCBpe1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbm5hdiB1bCBsaS5jYXJ0IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KXtcclxuICBuYXZ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCAwO1xyXG4gIH1cclxuICBuYXYgdWwgbGkubG9nb3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIG5hdiB1bCBsaS5jYXRlZ29yaWVze1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIG5hdiB1bCBsaS5idG57XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCkgLS0tLS0tLS0tLS1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDkwMHB4KSB7XHJcbiAgbmF2IHVsIGxpLmNhdGVnb3JpZXN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBuYXYgdWwgbGkuYnRue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgbmF2IHVsIGxpLnNlYXJjaC1pY29ue1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCl7XHJcbiAgZGl2IGltZ3tcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDkwMHB4KXtcclxuICBkaXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgfVxyXG59XHJcbiAqL1xyXG5cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCA5NSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMzByZW07XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIGhlaWdodDogNS45cmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubG9nby1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1idG4ge1xyXG4gIGZsZXg6IDM7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm5hdi1saW5rcyB7XHJcbiAgZmxleDogMjtcclxufVxyXG5cclxuLmxvZy1zaWduIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28taW1nIHtcclxuICBoZWlnaHQ6IDEuNHJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDEuOHM7XHJcbiAgYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLmxvZ28taW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xyXG5cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbjogMnB4IGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9nbyBzcGFuIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uY2FydHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogLjNyZW0gMS4xcmVtO1xyXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIG1hcmdpbjogMCAuMnJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5jYXJ0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAuNXJlbSAxLjNyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG5cclxuICBsaW5lLWhlaWdodDogMTtcclxuICBtYXJnaW46IDAgLjJyZW07XHJcbiAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4uYnRuLnNvbGlkLCAuYnRuLnRyYW5zcGFyZW50OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XHJcbiAgY29sb3I6ICM2OWJkZTc7XHJcbn1cclxuXHJcbi5idG4udHJhbnNwYXJlbnQsIC5idG4uc29saWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdi1saW5rcz51bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjZyZW07XHJcbn1cclxuLm5hdi1saW5rPmEge1xyXG4gIGxpbmUtaGVpZ2h0OiA1cmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgLjZyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5uYXYtbGluaz5hPmkge1xyXG4gIG1hcmdpbi1sZWZ0OiAuMXJlbTtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyPmEge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgODUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5oYW1idXJnZXItbWVudS1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5oYW1idXJnZXItbWVudSB7XHJcbiAgd2lkdGg6IDIuNXJlbTtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uaGFtYnVyZ2VyLW1lbnUgZGl2IHtcclxuICB3aWR0aDogMS42cmVtO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgei1pbmRleDogMTAwMTtcclxufVxyXG5cclxuLmhhbWJ1cmdlci1tZW51IGRpdjpiZWZvcmUsXHJcbi5oYW1idXJnZXItbWVudSBkaXY6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLmhhbWJ1cmdlci1tZW51IGRpdjpiZWZvcmV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XHJcbn1cclxuXHJcbi5oYW1idXJnZXItbWVudSBkaXY6YWZ0ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KTtcclxufVxyXG5cclxuI2NoZWNrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MCU7XHJcbiAgcmlnaHQ6IDJyZW07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgei1pbmRleDogOTAwMDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jY2hlY2s6Y2hlY2tlZCB+LmhhbWJ1cmdlci1tZW51LWNvbnRhaW5lclxyXG4uaGFtYnVyZ2VyLW1lbnUgZGl2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jY2hlY2s6Y2hlY2tlZCB+LmhhbWJ1cmdlci1tZW51LWNvbnRhaW5lclxyXG4uaGFtYnVyZ2VyLW1lbnUgZGl2OjpiZWZvcmV7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4jY2hlY2s6Y2hlY2tlZCB+LmhhbWJ1cmdlci1tZW51LWNvbnRhaW5lclxyXG4uaGFtYnVyZ2VyLW1lbnUgZGl2OjphZnRlcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRpb24ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTI3MHB4KSB7XHJcbiAgLmhhbWJ1cmdlci1tZW51LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAjY2hlY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5uYXYtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDNyZW0pO1xyXG4gICAgdG9wOiAzcmVtO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IC42NXM7XHJcbiAgfVxyXG5cclxuICAjY2hlY2s6Y2hlY2tlZH4ubmF2LWJ0biB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gICNjaGVjazpjaGVja2Vkfi5uYXYtYnRuIC5sb2ctc2lnbiB7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGlvbiAuNXMgZWFzZSBmb3J3YXJkcyB2YXIoLS1pKTtcclxuICB9XHJcbiAgLm5hdi1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubG9nLXNpZ24ge1xyXG4gICAgZmxleDogaW5pdGlhbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjlyZW07XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG5cclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgcGFkZGluZzogMS41cmVtIDIuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbWFyZ2luOiAuOHJlbSAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf= 'sharedService.isLoading | async' class=\"loader-container\">\r\n<mat-progress-bar  mode=\"indeterminate\"></mat-progress-bar>\r\n</div>\r\n<nav>\r\n  <ul>\r\n    <li class=\"logo\">\r\n      <a [routerLink]=\"['']\">Online Shopping Bazaar</a>\r\n    </li>\r\n\r\n    <li class=\"btn\">\r\n      <span class=\"fa fa-home\" [routerLink]=\"['']\"></span>\r\n    </li>\r\n\r\n    <li class=\"categories\">\r\n      <ul>\r\n        <li *ngFor=\"let depart of departments\">\r\n          <a (click)=\"departmentSelected(depart.value)\">{{depart.category}}</a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n\r\n    <li class=\"search-icon\">\r\n      <input type=\"search\" placeholder=\"Search...\" (keyup)=\"showResults($event)\" [(ngModel)]=\"searchValue\" name=\"searchValue\">\r\n      <label class=\"icon\">\r\n        <span class=\"fa fa-search\"></span>\r\n      </label>\r\n      <li class=\"dropdown\">\r\n      <ul class=\"dropdown-menu\" *ngIf='showDropDown'>\r\n        <li *ngFor=\"let r of results\" (click)=\"productSelected(r._id)\">\r\n          <a>{{r.name}}</a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n\r\n\r\n    <li class=\"cart\">\r\n      <a [routerLink]=\"['/cart']\"><i class=\"fa fa-shopping-cart\"></i><span class=\"badge\">{{cartCount.totalQuantity}}</span></a>\r\n    </li> -->\r\n\r\n    <!-- <a mat-button routerLink=\"['/user/signin']\">Login</a> -->\r\n\r\n    <!-- <li class=\"dropdown\">\r\n      <a data-toggle=\"dropdown\" role=\"button\"><i class=\"fa fa-user\"></i><span class=\"fa fa-caret-down\"></span></a>\r\n      <ul class=\"dropdown-menu\">\r\n        <li *ngIf=\"!userAuth.isLoggedIn()\"><a [routerLink]=\"['/user/signup']\">Sign Up</a></li>\r\n        <li *ngIf=\"!userAuth.isLoggedIn()\"><a [routerLink]=\"['/user/signin']\">Sign In</a></li>\r\n        <li *ngIf=\"userAuth.isLoggedIn()\"><a [routerLink]=\"['/user/profile']\">{{ userAuth.getUserDetails()?.username }}</a></li>\r\n        <li *ngIf=\"userAuth.isLoggedIn()\"><a (click)=\"userAuth.logout()\">Logout</a></li>\r\n      </ul>\r\n    </li>\r\n  </ul>\r\n</nav> -->\r\n\r\n\r\n<header>\r\n  <div class=\"container\">\r\n    <input type=\"checkbox\" id=\"check\">\r\n    <div class=\"logo-container\" [routerLink]=\"['']\">\r\n      <img class=\"logo-img\" src=\"../../../assets/images/logo.png\">\r\n      <h3 class=\"logo\">Online Shopping <span>Bazaar</span></h3>\r\n    </div>\r\n\r\n    <div class=\"nav-btn\">\r\n      <div class=\"nav-links\">\r\n        <ul>\r\n          <li class=\"nav-link\" *ngFor=\"let depart of departments\">\r\n            <a (click)=\"departmentSelected(depart.value)\">{{depart.category}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"log-sign\" style=\"--i: .4s\">\r\n        <a *ngIf=\"!userAuth.isLoggedIn()\" [routerLink]=\"['/user/signin']\" class=\"btn transparent\">Log In</a>\r\n        <a *ngIf=\"!userAuth.isLoggedIn()\" [routerLink]=\"['/user/signup']\" class=\"btn solid\">Sign Up</a>\r\n        <a *ngIf=\"userAuth.isLoggedIn()\" [routerLink]=\"['/user/profile']\" class=\"btn solid\">{{ userAuth.getUserDetails()?.username }}</a>\r\n        <a [routerLink]=\"['/cart']\"><i class=\"cart fa fa-shopping-cart\"><span matBadge=\"{{cartCount}}\"></span></i></a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"hamburger-menu-container\">\r\n      <div class=\"hamburger-menu\">\r\n        <div></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</header>\r\n\r\n<!-- <div class=\"basic-container\">\r\n  <img src=\"/assets/images/b3.jpg\">\r\n  <label><h1 class=\"heading\">Online Shopping Bazaar</h1></label>\r\n  <p class=\"lead\"></p>\r\n</div> -->\r\n\r\n\r\n\r\n<!--\r\n<div fxLayout = \"column\" fxFlex = \"80\">\r\n\r\n<div fxLayout = \"row\">\r\n  <img  mat-card-image src=\"/assets/images/b3.jpg\" alt=\"Free image\">\r\n\r\n</div>\r\n\r\n\r\n\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");









var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(productservice, router, cartservice, userAuth, sharedService, data) {
        this.productservice = productservice;
        this.router = router;
        this.cartservice = cartservice;
        this.userAuth = userAuth;
        this.sharedService = sharedService;
        this.data = data;
        this.showDropDown = false;
        this.departmentShow = false;
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.departments = [
            { category: 'Clothing', value: 'clothing' },
            { category: 'Baby Accessories', value: 'baby' },
            { category: 'Bedding', value: 'bedding' },
            { category: 'Blankets & Quilts', value: 'blankets' },
            { category: 'Stuff Toys', value: 'toys' }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartservice.getAllProductFromCart().subscribe(function (result) {
            _this.data.changeCount(result.totalQuantity);
        });
        this.data.currentCount.subscribe(function (cartCount) { return _this.cartCount = cartCount; });
    };
    HeaderComponent.prototype.showDepartment = function () {
        this.departmentShow = !this.departmentShow;
    };
    HeaderComponent.prototype.departmentSelected = function (depart) {
        this.router.navigate(['/' + depart]);
        this.departmentShow = false;
    };
    HeaderComponent.prototype.showResults = function (event) {
        this.searchTerm$.next(event.target.value);
        this.seacrhProduct();
    };
    HeaderComponent.prototype.seacrhProduct = function () {
        var _this = this;
        this.productservice.search(this.searchTerm$).subscribe(function (result) {
            _this.showDropDown = true;
            _this.results = result;
        });
    };
    HeaderComponent.prototype.productSelected = function (identifier) {
        this.searchValue = '';
        this.showDropDown = false;
        this.router.navigate(['/products/upload', { 'data': identifier }]);
    };
    HeaderComponent.prototype.cartClicked = function () {
        this.router.navigate(['/cart']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingcartService"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/baby/baby.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/routes/baby/baby.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 100%;\r\n  height: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.title{\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  text-align: center;\r\n}\r\n\r\n.items{\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n\r\n.cardclass{\r\n  width: 250px;\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  display: inline-block;\r\n}\r\n\r\n.image-container{\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.mat-img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 250px;\r\n  transition: transform .2s;\r\n  scale: 1;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n  opacity: .4;\r\n  background-color: #5c636d;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 0;\r\n  transition: .5s ease;\r\n}\r\n\r\n.image-container:hover .overlay{\r\n  height: 10%;\r\n}\r\n\r\n.mat-img:hover{\r\n  transform: scale(1.03);\r\n  cursor: pointer;\r\n}\r\n\r\n.text {\r\n  color: white;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.mat-card-title{\r\n  font-weight: 1000;\r\n  text-transform: uppercase;\r\n  margin-top: 4px;\r\n  font-size: 25px;\r\n  color: #5E6977;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  cursor: pointer;\r\n}\r\n\r\n.price {\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .container{\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .cardclass{\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    margin:0 0 50px 0;\r\n    display:inline-block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvYmFieS9iYWJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsU0FBUztDQUNWOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtDQUN0Qjs7QUFDRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUdWLGlDQUFpQztFQUNqQyxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFHRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0dBQ3RCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JvdXRlcy9iYWJ5L2JhYnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBtYXJnaW46IDJweCBhdXRvIDEwcHggYXV0bztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUU4RUU7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGNvbG9yOiAjNUU2OTc3O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW1ze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkY2xhc3N7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDEwcHggMTBweCA1MHB4IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxuICBzY2FsZTogMTtcclxufVxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAuNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2MzZkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG59XHJcbi5pbWFnZS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXl7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5tYXQtaW1nOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50ZXh0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjNUU2OTc3O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFOEVFO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBtYXJnaW46IDJweCBhdXRvIDEwcHggYXV0bztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGNvbG9yOiAjNUU2OTc3O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5jYXJkY2xhc3N7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46MCAwIDUwcHggMDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/routes/baby/baby.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/routes/baby/baby.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron title\">\n    BABY ACCESSORIES\n  </div>\n  <mat-card class=\"cardclass\" *ngFor=\"let prod of products; let i = index\">\n    <div class=\"image-container\">\n      <img [src]= prod.productImage[0] alt=\"...\" class=\"mat-img\" (click)=\"productClicked(prod._id)\">\n      <div class=\"overlay\">\n        <div class=\"text\" (click)=\"productClicked(prod._id)\">Quick View</div>\n      </div>\n    </div>\n\n    <mat-card-title class=\"mat-card-title\" (click)=\"productClicked(prod._id)\">{{prod.name}}</mat-card-title>\n    <mat-label>{{prod.price | currency:'PKR'}}</mat-label>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/routes/baby/baby.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/routes/baby/baby.component.ts ***!
  \**********************************************************/
/*! exports provided: BabyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabyComponent", function() { return BabyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/popup/product/product.component */ "./src/app/components/shared/popup/product/product.component.ts");







var BabyComponent = /** @class */ (function () {
    function BabyComponent(productservice, dialog, router, cartService) {
        this.productservice = productservice;
        this.dialog = dialog;
        this.router = router;
        this.cartService = cartService;
        this.category = 'baby';
        this.products = [];
        this.productImage = [];
    }
    BabyComponent.prototype.ngOnInit = function () {
        this.fetchAllProducts(this.category);
    };
    BabyComponent.prototype.fetchAllProducts = function (category) {
        var _this = this;
        this.productservice.getAllProduct(category).subscribe(function (res) {
            _this.products = res;
        }, function (error) { return console.log('Error: ', error); }, function () { return _this.fetchProductImage(_this.products); });
    };
    BabyComponent.prototype.fetchProductImage = function (product) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.productservice.getProductImage(product[i]._id).subscribe(function (res) {
                _this.productImage[i] = res;
            }, function (error) { return console.log('Error: ', error); }, function () { return _this.createImageFromBlob(_this.productImage[i], i); });
        };
        var this_1 = this;
        for (var i = 0; i < product.length; i++) {
            _loop_1(i);
        }
    };
    BabyComponent.prototype.createImageFromBlob = function (image, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.products[i].productImage[0] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    BabyComponent.prototype.productClicked = function (product_data) {
        var _this = this;
        var product_details;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = product_data;
        var dialogRef = this.dialog.open(_shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], dialogConfig);
        // this.router.navigate(['/product/' + data]);
        dialogRef.beforeClosed().subscribe(function (result) {
            if (result) {
                product_details = result;
                _this.cartService.addProductToCart(product_details._id).subscribe(function (result1) {
                });
            }
            else {
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    BabyComponent.prototype.addToCart = function (id) {
        this.cartService.addProductToCart(id).subscribe(function (result) {
        });
    };
    BabyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-baby',
            template: __webpack_require__(/*! ./baby.component.html */ "./src/app/components/routes/baby/baby.component.html"),
            styles: [__webpack_require__(/*! ./baby.component.css */ "./src/app/components/routes/baby/baby.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingcartService"]])
    ], BabyComponent);
    return BabyComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/bedding/bedding.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/routes/bedding/bedding.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 100%;\r\n  height: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.title{\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  text-align: center;\r\n}\r\n\r\n.items{\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n\r\n.cardclass{\r\n  width: 250px;\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  display: inline-block;\r\n}\r\n\r\n.image-container{\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.mat-img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 250px;\r\n  transition: transform .2s;\r\n  scale: 1;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n  opacity: .4;\r\n  background-color: #5c636d;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 0;\r\n  transition: .5s ease;\r\n}\r\n\r\n.image-container:hover .overlay{\r\n  height: 10%;\r\n}\r\n\r\n.mat-img:hover{\r\n  transform: scale(1.03);\r\n  cursor: pointer;\r\n}\r\n\r\n.text {\r\n  color: white;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.mat-card-title{\r\n  font-weight: 1000;\r\n  text-transform: uppercase;\r\n  margin-top: 4px;\r\n  font-size: 20px;\r\n  color: #5E6977;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  cursor: pointer;\r\n}\r\n\r\n.price {\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .container{\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .cardclass{\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    margin:0 0 50px 0;\r\n    display:inline-block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvYmVkZGluZy9iZWRkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsU0FBUztDQUNWOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtDQUN0Qjs7QUFDRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUdWLGlDQUFpQztFQUNqQyxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFHRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0dBQ3RCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JvdXRlcy9iZWRkaW5nL2JlZGRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBtYXJnaW46IDJweCBhdXRvIDEwcHggYXV0bztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUU4RUU7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGNvbG9yOiAjNUU2OTc3O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW1ze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkY2xhc3N7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDEwcHggMTBweCA1MHB4IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxuICBzY2FsZTogMTtcclxufVxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAuNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2MzZkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG59XHJcbi5pbWFnZS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXl7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5tYXQtaW1nOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50ZXh0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNUU2OTc3O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFOEVFO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBtYXJnaW46IDJweCBhdXRvIDEwcHggYXV0bztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGNvbG9yOiAjNUU2OTc3O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5jYXJkY2xhc3N7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46MCAwIDUwcHggMDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/routes/bedding/bedding.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/routes/bedding/bedding.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron title\">\n    BEDDING\n  </div>\n  <mat-card class=\"cardclass\" *ngFor=\"let prod of products; let i = index\">\n    <div class=\"image-container\">\n      <img [src]= prod.productImage[0] alt=\"...\" class=\"mat-img\" (click)=\"productClicked(prod._id)\">\n      <div class=\"overlay\">\n        <div class=\"text\" (click)=\"productClicked(prod._id)\">Quick View</div>\n      </div>\n    </div>\n\n    <mat-card-title class=\"mat-card-title\" (click)=\"productClicked(prod._id)\">{{prod.name}}</mat-card-title>\n    <mat-label>{{prod.price | currency:'PKR'}}</mat-label>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/routes/bedding/bedding.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/routes/bedding/bedding.component.ts ***!
  \****************************************************************/
/*! exports provided: BeddingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeddingComponent", function() { return BeddingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/popup/product/product.component */ "./src/app/components/shared/popup/product/product.component.ts");







var BeddingComponent = /** @class */ (function () {
    function BeddingComponent(productservice, dialog, router, cartService) {
        this.productservice = productservice;
        this.dialog = dialog;
        this.router = router;
        this.cartService = cartService;
        this.category = 'bedding';
        this.products = [];
        this.productImage = [];
    }
    BeddingComponent.prototype.ngOnInit = function () {
        this.fetchAllProducts(this.category);
    };
    BeddingComponent.prototype.fetchAllProducts = function (category) {
        var _this = this;
        this.productservice.getAllProduct(category).subscribe(function (res) {
            _this.products = res;
        }, function (error) { return console.log('Error: ', error); }, function () { return _this.fetchProductImage(_this.products); });
    };
    BeddingComponent.prototype.fetchProductImage = function (product) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.productservice.getProductImage(product[i]._id).subscribe(function (res) {
                _this.productImage[i] = res;
            }, function (error) { return console.log('Error: ', error); }, function () { return _this.createImageFromBlob(_this.productImage[i], i); });
        };
        var this_1 = this;
        for (var i = 0; i < product.length; i++) {
            _loop_1(i);
        }
    };
    BeddingComponent.prototype.createImageFromBlob = function (image, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.products[i].productImage[0] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    BeddingComponent.prototype.productClicked = function (product_data) {
        var _this = this;
        var product_details;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = product_data;
        var dialogRef = this.dialog.open(_shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], dialogConfig);
        // this.router.navigate(['/product/' + data]);
        dialogRef.beforeClosed().subscribe(function (result) {
            if (result) {
                product_details = result;
                _this.cartService.addProductToCart(product_details._id).subscribe(function (result1) {
                });
            }
            else {
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    BeddingComponent.prototype.addToCart = function (id) {
        this.cartService.addProductToCart(id).subscribe(function (result) {
        });
    };
    BeddingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bedding',
            template: __webpack_require__(/*! ./bedding.component.html */ "./src/app/components/routes/bedding/bedding.component.html"),
            styles: [__webpack_require__(/*! ./bedding.component.css */ "./src/app/components/routes/bedding/bedding.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingcartService"]])
    ], BeddingComponent);
    return BeddingComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/blanket/blanket.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/routes/blanket/blanket.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 100%;\r\n  height: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.title{\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  text-align: center;\r\n}\r\n\r\n.items{\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n\r\n.cardclass{\r\n  width: 250px;\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  display: inline-block;\r\n}\r\n\r\n.image-container{\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.mat-img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 250px;\r\n  transition: transform .2s;\r\n  scale: 1;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n  opacity: .4;\r\n  background-color: #5c636d;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 0;\r\n  transition: .5s ease;\r\n}\r\n\r\n.image-container:hover .overlay{\r\n  height: 10%;\r\n}\r\n\r\n.mat-img:hover{\r\n  transform: scale(1.03);\r\n  cursor: pointer;\r\n}\r\n\r\n.text {\r\n  color: white;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.mat-card-title{\r\n  font-weight: 1000;\r\n  text-transform: uppercase;\r\n  margin-top: 4px;\r\n  font-size: 25px;\r\n  color: #5E6977;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  cursor: pointer;\r\n}\r\n\r\n.price {\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .container{\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .cardclass{\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    margin:0 0 50px 0;\r\n    display:inline-block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvYmxhbmtldC9ibGFua2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsU0FBUztDQUNWOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtDQUN0Qjs7QUFDRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUdWLGlDQUFpQztFQUNqQyxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFHRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0dBQ3RCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JvdXRlcy9ibGFua2V0L2JsYW5rZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBtYXJnaW46IDJweCBhdXRvIDEwcHggYXV0bztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUU4RUU7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGNvbG9yOiAjNUU2OTc3O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW1ze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkY2xhc3N7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDEwcHggMTBweCA1MHB4IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxuICBzY2FsZTogMTtcclxufVxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAuNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2MzZkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG59XHJcbi5pbWFnZS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXl7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5tYXQtaW1nOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50ZXh0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjNUU2OTc3O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFOEVFO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBtYXJnaW46IDJweCBhdXRvIDEwcHggYXV0bztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGNvbG9yOiAjNUU2OTc3O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5jYXJkY2xhc3N7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46MCAwIDUwcHggMDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/routes/blanket/blanket.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/routes/blanket/blanket.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron title\">\n    BLANKET\n  </div>\n  <mat-card class=\"cardclass\" *ngFor=\"let prod of products; let i = index\">\n    <div class=\"image-container\">\n      <img [src]= prod.productImage[0] alt=\"...\" class=\"mat-img\" (click)=\"productClicked(prod._id)\">\n      <div class=\"overlay\">\n        <div class=\"text\" (click)=\"productClicked(prod._id)\">Quick View</div>\n      </div>\n    </div>\n\n    <mat-card-title class=\"mat-card-title\" (click)=\"productClicked(prod._id)\">{{prod.name}}</mat-card-title>\n    <mat-label>{{prod.price | currency:'PKR'}}</mat-label>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/routes/blanket/blanket.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/routes/blanket/blanket.component.ts ***!
  \****************************************************************/
/*! exports provided: BlanketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlanketComponent", function() { return BlanketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/popup/product/product.component */ "./src/app/components/shared/popup/product/product.component.ts");







var BlanketComponent = /** @class */ (function () {
    function BlanketComponent(productservice, dialog, router, cartService) {
        this.productservice = productservice;
        this.dialog = dialog;
        this.router = router;
        this.cartService = cartService;
        this.category = 'blanket';
        this.products = [];
        this.productImage = [];
    }
    BlanketComponent.prototype.ngOnInit = function () {
        this.fetchAllProducts(this.category);
    };
    BlanketComponent.prototype.fetchAllProducts = function (category) {
        var _this = this;
        this.productservice.getAllProduct(category).subscribe(function (res) {
            _this.products = res;
        }, function (error) { return console.log('Error: ', error); }, function () { return _this.fetchProductImage(_this.products); });
    };
    BlanketComponent.prototype.fetchProductImage = function (product) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.productservice.getProductImage(product[i]._id).subscribe(function (res) {
                _this.productImage[i] = res;
            }, function (error) { return console.log('Error: ', error); }, function () { return _this.createImageFromBlob(_this.productImage[i], i); });
        };
        var this_1 = this;
        for (var i = 0; i < product.length; i++) {
            _loop_1(i);
        }
    };
    BlanketComponent.prototype.createImageFromBlob = function (image, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.products[i].productImage[0] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    BlanketComponent.prototype.productClicked = function (product_data) {
        var _this = this;
        var product_details;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = product_data;
        var dialogRef = this.dialog.open(_shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], dialogConfig);
        // this.router.navigate(['/product/' + data]);
        dialogRef.beforeClosed().subscribe(function (result) {
            if (result) {
                product_details = result;
                _this.cartService.addProductToCart(product_details._id).subscribe(function (result1) {
                });
            }
            else {
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    BlanketComponent.prototype.addToCart = function (id) {
        this.cartService.addProductToCart(id).subscribe(function (result) {
        });
    };
    BlanketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blanket',
            template: __webpack_require__(/*! ./blanket.component.html */ "./src/app/components/routes/blanket/blanket.component.html"),
            styles: [__webpack_require__(/*! ./blanket.component.css */ "./src/app/components/routes/blanket/blanket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingcartService"]])
    ], BlanketComponent);
    return BlanketComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/cart/cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/routes/cart/cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .shopping-cart {\r\n  width: 750px;\r\n  height: auto;\r\n  margin: 80px auto;\r\n  background: #FFFFFF;\r\n  box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);\r\n  border-radius: 6px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.title {\r\n  height: 60px;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.item {\r\n  padding: 20px 30px;\r\n  height: 120px;\r\n  display: flex;\r\n}\r\n\r\n.item:nth-child(3) {\r\n  border-top:  1px solid #E1E8EE;\r\n  border-bottom:  1px solid #E1E8EE;\r\n}\r\n.buttons {\r\n  position: relative;\r\n  padding-top: 30px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.delete-btn {\r\n  font-size: 20px;\r\n  display: inline-block;\r\n  Cursor: pointer;\r\n  color: rgb(189, 71, 71);\r\n}\r\n\r\n.is-active {\r\n  animation-name: animate;\r\n  animation-duration: .8s;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: steps(28);\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes animate {\r\n  0%   { background-position: left;  }\r\n  50%  { background-position: right; }\r\n  100% { background-position: right; }\r\n}\r\n.image {\r\n  width: 250px;\r\n  padding-left: 40px;\r\n}\r\n.image img {\r\n  height: 100%;\r\n}\r\n.description {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  margin-right: 40px;\r\n  width: 115px;\r\n}\r\n\r\n.description span {\r\n  display: block;\r\n  font-size: 14px;\r\n  color: #43484D;\r\n  font-weight: 400;\r\n}\r\n\r\n.description span:first-child {\r\n  margin-bottom: 5px;\r\n}\r\n.description span:last-child {\r\n  font-weight: 300;\r\n  margin-top: 8px;\r\n  color: #86939E;\r\n}\r\n.quantity {\r\n  padding-top: 20px;\r\n  margin-right: 40px;\r\n}\r\n.quantity input {\r\n  -webkit-appearance: none;\r\n  border: none;\r\n  text-align: center;\r\n  width: 32px;\r\n  font-size: 16px;\r\n  color: #43484D;\r\n  font-weight: 300;\r\n}\r\n\r\nbutton[class*=btn] {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #E1E8EE;\r\n  border-radius: 6px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.minus-btn img {\r\n  margin-bottom: 3px;\r\n}\r\n.plus-btn img {\r\n  margin-top: 2px;\r\n}\r\n\r\nbutton:focus,\r\ninput:focus {\r\n  outline:0;\r\n}\r\n.total-price {\r\n  width: 83px;\r\n  padding-top: 27px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  color: #43484D;\r\n  font-weight: 300;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .shopping-cart {\r\n    width: 100%;\r\n    height: auto;\r\n    margin: 0px auto;\r\n    overflow: hidden;\r\n  }\r\n  .item {\r\n    padding: 0;\r\n    height: auto;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n  .image img {\r\n    width: 50%;\r\n  }\r\n  .image,\r\n  .quantity,\r\n  .description {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin: 6px 0;\r\n  }\r\n  .buttons {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-top: 0px;\r\n    margin-right: 0px;\r\n  }\r\n} */\r\n\r\n.container {\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container > h1 {\r\n  padding: 20px 0;\r\n}\r\n\r\n.cart {\r\n  display: flex;\r\n}\r\n\r\n.products {\r\n  flex:0.75;\r\n}\r\n\r\n.product {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 200px;\r\n  overflow: hidden;\r\n  border: 1px solid silver;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.product:hover {\r\n  border: none;\r\n  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);\r\n  transform: scale(1.01);\r\n}\r\n\r\n.product > img {\r\n  width: 100%;\r\n  height: auto;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n}\r\n\r\n.product > img:hover {\r\n  transform: scale(1.04);\r\n}\r\n\r\n.product-info {\r\n  padding: 20px;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.product-name,.product-price,.product-offer,.product-quantity {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.product-remove {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  padding: 10px 25px;\r\n  background-color: green;\r\n  color: white;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n\r\n.product-remove:hover {\r\n  background-color: white;\r\n  color: green;\r\n  font-weight: 600;\r\n  border: 1px solid green;\r\n}\r\n\r\n.product-quantity{\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.product-quantity i {\r\n    display: inline-block;\r\n    padding: 0.1em 0.3em;\r\n    text-decoration: none;\r\n    color: #67c5ff;\r\n    border: solid 2px #67c5ff;\r\n    border-radius: 3px;\r\n    transition: .4s;\r\n}\r\n\r\n.product-quantity i:hover{\r\n  background: #67c5ff;\r\n  color: white;\r\n}\r\n\r\n.product-quantity > input{\r\n  width: 25px;\r\n  border: none;\r\n  padding: 0px 6px 0px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.fa {\r\n  margin-right: 5px;\r\n}\r\n\r\n.cart-total {\r\n  flex: 0.25;\r\n  margin-left: 20px;\r\n  padding: 20px;\r\n  height: -webkit-max-content;\r\n  height: -moz-max-content;\r\n  height: max-content;\r\n  border: 1px solid black;\r\n}\r\n\r\n.cart-total p {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 30px;\r\n  font-size: 20px;\r\n}\r\n\r\n.cart-total a {\r\n  display: block;\r\n  text-align: center;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  background-color: tomato;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.cart-total a:hover {\r\n  background-color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n.form span input {\r\n  width: 60%;\r\n  margin-left: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .remove {\r\n    display: none;\r\n  }\r\n\r\n  .product-remove {\r\n    bottom: 0px;\r\n  }\r\n\r\n  .product {\r\n    height: 150px;\r\n  }\r\n  .product > img {\r\n    height: 150px;\r\n    width: 130px;\r\n  }\r\n\r\n  .product-quantity i {\r\n    padding: 0.1em 0.3em;\r\n    color: #67c5ff;\r\n    border: solid 1px #67c5ff;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .product-quantity i:hover{\r\n    background: #67c5ff;\r\n    color: white;\r\n    display: inline-block;\r\n  }\r\n\r\n  .product-quantity > input{\r\n    width: 12px;\r\n    border: none;\r\n    padding: 0px 3px 0px 0px;\r\n    text-align: center;\r\n  }\r\n  .product-name, .product-price, .product-offer {\r\n    margin-bottom: 10px;\r\n  }\r\n  .product-remove {\r\n    right: 15px;\r\n    padding: 7px 20px;\r\n    border-radius: 2px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .cart {\r\n    flex-direction: column;\r\n  }\r\n  .cart-total {\r\n    margin-left: 0;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 1220px) {\r\n  .container {\r\n    max-width: 95%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRKSTs7QUFFSjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHVCQUF1QjtDQUN4Qjs7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQW9CO0tBQXBCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0NBQ3BCOztBQUdEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsd0JBQXdCO0NBQ3pCOztBQUNEO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFO0lBQ0UsY0FBYztHQUNmOztFQUVEO0lBQ0UsWUFBWTtHQUNiOztFQUVEO0lBQ0UsY0FBYztHQUNmO0VBQ0Q7SUFDRSxjQUFjO0lBQ2QsYUFBYTtHQUNkOztFQUVEO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0Usb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7R0FDdkI7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7Q0FDRjs7QUFDRDtFQUNFO0lBQ0UsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0dBQ3JCOztDQUVGOztBQUNEO0VBQ0U7SUFDRSxlQUFlO0dBQ2hCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JvdXRlcy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5zaG9wcGluZy1jYXJ0IHtcclxuICB3aWR0aDogNzUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogODBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4xMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnRpdGxlIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUU4RUU7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGNvbG9yOiAjNUU2OTc3O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLml0ZW06bnRoLWNoaWxkKDMpIHtcclxuICBib3JkZXItdG9wOiAgMXB4IHNvbGlkICNFMUU4RUU7XHJcbiAgYm9yZGVyLWJvdHRvbTogIDFweCBzb2xpZCAjRTFFOEVFO1xyXG59XHJcbi5idXR0b25zIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBDdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYigxODksIDcxLCA3MSk7XHJcbn1cclxuXHJcbi5pcy1hY3RpdmUge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjhzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMjgpO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIDAlICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0OyAgfVxyXG4gIDUwJSAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDsgfVxyXG59XHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG4uaW1hZ2UgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDExNXB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNDM0ODREO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY29sb3I6ICM4NjkzOUU7XHJcbn1cclxuLnF1YW50aXR5IHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuLnF1YW50aXR5IGlucHV0IHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMzJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM0MzQ4NEQ7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuYnV0dG9uW2NsYXNzKj1idG5dIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRThFRTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWludXMtYnRuIGltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbi5wbHVzLWJ0biBpbWcge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzLFxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTowO1xyXG59XHJcbi50b3RhbC1wcmljZSB7XHJcbiAgd2lkdGg6IDgzcHg7XHJcbiAgcGFkZGluZy10b3A6IDI3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzQzNDg0RDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuc2hvcHBpbmctY2FydCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLmltYWdlLFxyXG4gIC5xdWFudGl0eSxcclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gIH1cclxuICAuYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbn0gKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lciA+IGgxIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuLmNhcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wcm9kdWN0cyB7XHJcbiAgZmxleDowLjc1O1xyXG59XHJcblxyXG4ucHJvZHVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0OmhvdmVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbn1cclxuLnByb2R1Y3QgPiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4ucHJvZHVjdCA+IGltZzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3QtbmFtZSwucHJvZHVjdC1wcmljZSwucHJvZHVjdC1vZmZlciwucHJvZHVjdC1xdWFudGl0eSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ucHJvZHVjdC1yZW1vdmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1yZW1vdmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4ucHJvZHVjdC1xdWFudGl0eXtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucHJvZHVjdC1xdWFudGl0eSBpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAuMWVtIDAuM2VtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM2N2M1ZmY7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjNjdjNWZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4ucHJvZHVjdC1xdWFudGl0eSBpOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICM2N2M1ZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1xdWFudGl0eSA+IGlucHV0e1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwcHggNnB4IDBweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmNhcnQtdG90YWwge1xyXG4gIGZsZXg6IDAuMjU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5jYXJ0LXRvdGFsIHAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY2FydC10b3RhbCBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY2FydC10b3RhbCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybSBzcGFuIGlucHV0IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLnJlbW92ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtcmVtb3ZlIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3Qge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbiAgLnByb2R1Y3QgPiBpbWcge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LXF1YW50aXR5IGkge1xyXG4gICAgcGFkZGluZzogMC4xZW0gMC4zZW07XHJcbiAgICBjb2xvcjogIzY3YzVmZjtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICM2N2M1ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1xdWFudGl0eSBpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzY3YzVmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LXF1YW50aXR5ID4gaW5wdXR7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCAzcHggMHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnByb2R1Y3QtbmFtZSwgLnByb2R1Y3QtcHJpY2UsIC5wcm9kdWN0LW9mZmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LXJlbW92ZSB7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5jYXJ0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5jYXJ0LXRvdGFsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/routes/cart/cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/routes/cart/cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"shopping-cart\">\r\n\r\n  <div class=\"jumbotron title\">\r\n    My Shopping Bag\r\n  </div>\r\n\r\n   <div class=\"item\" *ngFor=\"let cartitem of cart.products; let i = index\">\r\n    <div class=\"item\" *ngFor=\"let cartitem of [1,2,3,4,5,6]; let i = index\">\r\n    <div class=\"buttons\">\r\n      <span class=\"delete-btn fa fa-times\"></span>\r\n      <span class=\"like-btn\"></span>\r\n    </div>\r\n    <div class=\"image\">\r\n     {{imgUrl}}\r\n      <img src=\"../../../../assets/images/i13.jpg\" alt=\"\" />\r\n    </div>\r\n    <div class=\"description\">\r\n      <span>cartitem.item.category</span>\r\n      <span>cartitem.item.name</span>\r\n      <span>cartitem.item.offer</span>\r\n      <span> hello cartitem.item.qtyhello</span>\r\n\r\n    </div>\r\n\r\n    <div class=\"quantity\">\r\n      <button class=\"plus-btn\" type=\"button\" name=\"button\">\r\n        <img src=\"plus.svg\" alt=\"+\" />\r\n      </button>\r\n      <input type=\"text\" name=\"name\" value=1>\r\n      <button class=\"minus-btn\" type=\"button\" name=\"button\">\r\n        <img src=\"minus.svg\" alt=\"-\" />\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"total-price\">1205PKR</div>\r\n  </div>\r\n</div> -->\r\n\r\n<div>\r\n  <div *ngIf=\"cartEmpty\">\r\n    <mat-card >\r\n      <mat-card-content>\r\n        <h1 style=\"text-align: center; margin-top: 20px;\">\r\n          Cart is Empty. Follow the <a [routerLink]=\"['']\">link</a> to continue shopping.\r\n        </h1>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"container\" *ngIf=\"!cartEmpty\">\r\n    <h1 style=\"text-align: center;\">Shopping Cart</h1>\r\n    <!-- <div *ngIf=\"cartEmpty\">\r\n      <app-notification></app-notification>\r\n      <h1 style=\"text-align: center;\">{{message}}</h1>\r\n      <div><h1 style=\"text-align: center;\"><a href=\"#\">Click Here </a>to continue shopping.</h1>\r\n      </div> -->\r\n      <div class=\"cart\">\r\n        <div class=\"products\">\r\n          <div class=\"product\" *ngFor=\"let cartitem of cart.products; let i = index\">\r\n            <img [src]= imgUrl[i]>\r\n            <div class=\"product-info\">\r\n              <h4 class=\"product-name\">{{cartitem.item.name}}</h4>\r\n              <h5 class=\"product-price\">{{cartitem.item.price | currency:'PKR'}}</h5>\r\n              <h5 class=\"product-offer\">{{cartitem.item.offer}}</h5>\r\n\r\n              <p class=\"product-quantity\">\r\n                Qty:\r\n                <i class=\"fa fa-minus\" aria-hidden=\"true\" (click) = \"reduceQuantity(cartitem)\"></i>\r\n                <input value=\"{{cartitem.quantity}}\" name=\"\">\r\n                <i class=\"fa fa-plus\" aria-hidden=\"true\" (click) = \"increaseQuantity(cartitem)\"></i>\r\n              </p>\r\n              <p class=\"product-remove\" (click)=\"removeItem(cartitem.item._id)\">\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                <span class=\"remove\">Remove</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"cart-total\">\r\n          <p>\r\n            <span>Total Price</span>\r\n            <span>{{cart.totalPrice}}</span>\r\n          </p>\r\n          <p>\r\n            <span>Number of Items</span>\r\n            <span>{{cart.totalQuantity}}</span>\r\n          </p>\r\n\r\n          <a (click)=\"checkout()\">Proceed to Checkout</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!--\r\n<body class=\"skin-light\">\r\n  <header>\r\n    <div class=\"jumbotron color-grey-light mt-70\">\r\n      <div class=\"d-flex align-items-center h-100\">\r\n        <div class=\"container text-center py-5\">\r\n          <h3 class=\"mb-0\">Shopping cart</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <section>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-8\">\r\n\r\n        <div class=\"mb-3\">\r\n          <div class=\"pt-4 wish-list\">\r\n\r\n            <h5 class=\"mb-4\">Cart (<span>2</span> items)</h5>\r\n\r\n            <div class=\"row mb-4\">\r\n              <div class=\"col-md-5 col-lg-3 col-xl-3\">\r\n                <div class=\"view zoom overlay z-depth-1 rounded mb-3 mb-md-0\">\r\n                  <img class=\"img-fluid w-100\"\r\n                    src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg\" alt=\"Sample\">\r\n                  <a href=\"#!\">\r\n                    <div class=\"mask\">\r\n                      <img class=\"img-fluid w-100\"\r\n                        src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg\">\r\n                      <div class=\"mask rgba-black-slight\"></div>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-7 col-lg-9 col-xl-9\">\r\n                <div>\r\n                  <div class=\"d-flex justify-content-between\">\r\n                    <div>\r\n                      <h5>Blue denim shirt</h5>\r\n                      <p class=\"mb-3 text-muted text-uppercase small\">Shirt - blue</p>\r\n                      <p class=\"mb-2 text-muted text-uppercase small\">Color: blue</p>\r\n                      <p class=\"mb-3 text-muted text-uppercase small\">Size: M</p>\r\n                    </div>\r\n                    <div>\r\n                      <div class=\"def-number-input number-input safari_only mb-0 w-100\">\r\n                        <button onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\"\r\n                          class=\"minus decrease\"></button>\r\n                        <input class=\"quantity\" min=\"0\" name=\"quantity\" value=\"1\" type=\"number\">\r\n                        <button onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\"\r\n                          class=\"plus increase\"></button>\r\n                      </div>\r\n                      <small id=\"passwordHelpBlock\" class=\"form-text text-muted text-center\">\r\n                        (Note, 1 piece)\r\n                      </small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-flex justify-content-between align-items-center\">\r\n                    <div>\r\n                      <a href=\"#!\" type=\"button\" class=\"card-link-secondary small text-uppercase mr-3\"><i\r\n                          class=\"fas fa-trash-alt mr-1\"></i> Remove item </a>\r\n                      <a href=\"#!\" type=\"button\" class=\"card-link-secondary small text-uppercase\"><i\r\n                          class=\"fas fa-heart mr-1\"></i> Move to wish list </a>\r\n                    </div>\r\n                    <p class=\"mb-0\"><span><strong id=\"summary\">$17.99</strong></span></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr class=\"mb-4\">\r\n            <div class=\"row mb-4\">\r\n              <div class=\"col-md-5 col-lg-3 col-xl-3\">\r\n                <div class=\"view zoom overlay z-depth-1 rounded mb-3 mb-md-0\">\r\n                  <img class=\"img-fluid w-100\"\r\n                    src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg\" alt=\"Sample\">\r\n                  <a href=\"#!\">\r\n                    <div class=\"mask\">\r\n                      <img class=\"img-fluid w-100\"\r\n                        src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg\">\r\n                      <div class=\"mask rgba-black-slight\"></div>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-7 col-lg-9 col-xl-9\">\r\n                <div>\r\n                  <div class=\"d-flex justify-content-between\">\r\n                    <div>\r\n                      <h5>Red hoodie</h5>\r\n                      <p class=\"mb-3 text-muted text-uppercase small\">Shirt - red</p>\r\n                      <p class=\"mb-2 text-muted text-uppercase small\">Color: red</p>\r\n                      <p class=\"mb-3 text-muted text-uppercase small\">Size: M</p>\r\n                    </div>\r\n                    <div>\r\n                      <div class=\"def-number-input number-input safari_only mb-0 w-100\">\r\n                        <button onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\"\r\n                          class=\"minus\"></button>\r\n                        <input class=\"quantity\" min=\"0\" name=\"quantity\" value=\"1\" type=\"number\">\r\n                        <button onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\"\r\n                          class=\"plus\"></button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-flex justify-content-between align-items-center\">\r\n                    <div>\r\n                      <a href=\"#!\" type=\"button\" class=\"card-link-secondary small text-uppercase mr-3\"><i\r\n                          class=\"fas fa-trash-alt mr-1\"></i> Remove item </a>\r\n                      <a href=\"#!\" type=\"button\" class=\"card-link-secondary small text-uppercase\"><i\r\n                          class=\"fas fa-heart mr-1\"></i> Move to wish list </a>\r\n                    </div>\r\n                    <p class=\"mb-0\"><span><strong>$35.99</strong></span></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <p class=\"text-primary mb-0\"><i class=\"fas fa-info-circle mr-1\"></i> Do not delay the purchase, adding\r\n              items to your cart does not mean booking them.</p>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n          <div class=\"pt-4\">\r\n\r\n            <h5 class=\"mb-4\">Expected shipping delivery</h5>\r\n\r\n            <p class=\"mb-0\"> Thu., 12.03. - Mon., 16.03.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n          <div class=\"pt-4\">\r\n\r\n            <h5 class=\"mb-4\">We accept</h5>\r\n\r\n            <img class=\"mr-2\" width=\"45px\"\r\n              src=\"https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg\"\r\n              alt=\"Visa\">\r\n            <img class=\"mr-2\" width=\"45px\"\r\n              src=\"https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg\"\r\n              alt=\"American Express\">\r\n            <img class=\"mr-2\" width=\"45px\"\r\n              src=\"https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg\"\r\n              alt=\"Mastercard\">\r\n            <img class=\"mr-2\" width=\"45px\"\r\n              src=\"https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png\"\r\n              alt=\"PayPal acceptance mark\">\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n\r\n\r\n        <div class=\"mb-3\">\r\n          <div class=\"pt-4\">\r\n\r\n            <h5 class=\"mb-3\">The total amount of</h5>\r\n\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0\">\r\n                Temporary amount\r\n                <span>$25.98</span>\r\n              </li>\r\n              <li class=\"list-group-item d-flex justify-content-between align-items-center px-0\">\r\n                Shipping\r\n                <span>Gratis</span>\r\n              </li>\r\n              <li class=\"list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3\">\r\n                <div>\r\n                  <strong>The total amount of</strong>\r\n                  <strong>\r\n                    <p class=\"mb-0\">(including VAT)</p>\r\n                  </strong>\r\n                </div>\r\n                <span><strong>$53.98</strong></span>\r\n              </li>\r\n            </ul>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary btn-block\">go to checkout</button>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n          <div class=\"pt-4\">\r\n\r\n            <a class=\"dark-grey-text d-flex justify-content-between\" data-toggle=\"collapse\" href=\"#collapseExample\"\r\n              aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n              Add a discount code (optional)\r\n              <span><i class=\"fas fa-chevron-down pt-1\"></i></span>\r\n            </a>\r\n\r\n            <div class=\"collapse\" id=\"collapseExample\">\r\n              <div class=\"mt-3\">\r\n                <div class=\"md-form md-outline mb-0\">\r\n                  <input type=\"text\" id=\"discount-code\" class=\"form-control font-weight-light\"\r\n                    placeholder=\"Enter discount code\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </section>\r\n</body>\r\n -->\r\n\r\n<!-- <mat-card >\r\n  <mat-card-content *ngIf=\"cartEmpty\">\r\n    <h1 style=\"text-align: center; margin-top: 20px;\">\r\n      Cart is Empty. Follow the <a href=\"/\">link</a> to continue shopping.\r\n    </h1>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<div class=\"card\" *ngIf=\"!cartEmpty\">\r\n  <div class=\"card-body\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table product-table\">\r\n        <thead class=\"mdb-color lighten-5\">\r\n          <tr>\r\n            <th></th>\r\n            <th class=\"font-weight-bold\">\r\n              <strong>Product</strong>\r\n            </th>\r\n            <th class=\"font-weight-bold\">\r\n              <strong>Color</strong>\r\n            </th>\r\n            <th></th>\r\n            <th class=\"font-weight-bold\">\r\n              <strong>Price</strong>\r\n            </th>\r\n            <th class=\"font-weight-bold\">\r\n              <strong>QTY</strong>\r\n            </th>\r\n            <th class=\"font-weight-bold\">\r\n              <strong>Amount</strong>\r\n            </th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody> -->\r\n\r\n          <!-- First row -->\r\n          <!-- <tr *ngFor=\"let cartitem of cart.products; let i = index\">\r\n            <td scope=\"row\">\r\n              <img src = {{imgUrl[i]}} alt=\"\" class=\"img-cart-product\">\r\n            </td>\r\n            <td>\r\n              <h4>\r\n                <strong>{{cartitem.item.name}}</strong>\r\n              </h4>\r\n              <p class=\"text-muted\">{{cartitem.item.category}}</p>\r\n            </td>\r\n            <td>{{cartitem.item.offer}}</td>\r\n            <td></td>\r\n            <td>{{cartitem.item.price | currency:'PKR'}}</td>\r\n            <td>\r\n              <input type=\"number\" value=\"{{cartitem.qty}}\" aria-label=\"Search\" class=\"form-control\"\r\n              style=\"width: 100px\" min=\"1\" max=\"10\" (change)=\"quantityChanged($event.target.value)\">\r\n            </td>\r\n            <td class=\"font-weight-bold\">\r\n              <strong>{{cartitem.price}}</strong>\r\n            </td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-sm btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                title=\"Remove item\" (click)=\"removeItem(cartitem.item._id)\">X\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td colspan=\"3\"></td>\r\n            <td>\r\n              <h4 class=\"mt-2\">\r\n                <strong>Total</strong>\r\n              </h4>\r\n            </td>\r\n            <td class=\"text-right\">\r\n              <h4 class=\"mt-2\">\r\n                <strong>{{cart.totalPrice}}</strong>\r\n              </h4>\r\n            </td>\r\n            <td colspan=\"3\" class=\"text-right\">\r\n              <button (click)=\"checkout()\" type=\"button\" class=\"btn btn-primary btn-rounded\">Complete purchase\r\n                <i class=\"fas fa-angle-right right\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div> -->\r\n\r\n\r\n\r\n<!-- <li *ngFor=\"let item of cart.products\">\r\n\r\n  {{item.item._id}}\r\n  {{item.item.name}}\r\n  {{item.item.category}}\r\n  {{item.item.price}}\r\n  {{item.item.productImage[0].image}}\r\n</li> -->\r\n"

/***/ }),

/***/ "./src/app/components/routes/cart/cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/routes/cart/cart.component.ts ***!
  \**********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_popup_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/popup/credentials/credentials.component */ "./src/app/components/shared/popup/credentials/credentials.component.ts");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");








var CartComponent = /** @class */ (function () {
    // addScript: Boolean = false;
    // finalAmount: Number = 1;
    // paypalConfig = {
    //   env: 'sandbox',
    //   client: {
    //     sandbox:
    //   }
    // }
    function CartComponent(cartservice, productservice, dialog, notification, data) {
        this.cartservice = cartservice;
        this.productservice = productservice;
        this.dialog = dialog;
        this.notification = notification;
        this.data = data;
        this.isPopupOpen = false;
        this.cartEmpty = true;
        this.cart = {
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
        this.productImage = [];
        this.imgUrl = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.fetchProductsFromCart();
    };
    CartComponent.prototype.fetchProductsFromCart = function () {
        var _this = this;
        this.cartservice.getAllProductFromCart().subscribe(function (result) {
            _this.cart = result;
            if (_this.cart.totalQuantity === 0 || _this.cart.totalQuantity === undefined) {
                _this.cartEmpty = true;
                _this.notification.error('Cart is Empty', false);
            }
            else {
                _this.cartEmpty = false;
            }
        }, function (error) { return console.log(error); }, function () { return _this.fetchProductImage(_this.cart.products); });
    };
    CartComponent.prototype.fetchProductImage = function (product) {
        var _this = this;
        if (!product) {
            product = '';
        }
        else {
            var _loop_1 = function (i) {
                this_1.productservice.getProductImage(product[i].item._id).subscribe(function (res) {
                    _this.productImage[i] = res;
                }, function (error) { return console.log('Error: ', error); }, function () { return _this.createImageFromBlob(_this.productImage[i], i); });
            };
            var this_1 = this;
            for (var i = 0; i < product.length; i++) {
                _loop_1(i);
            }
        }
    };
    CartComponent.prototype.createImageFromBlob = function (image, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.imgUrl[i] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    CartComponent.prototype.reduceQuantity = function (cart_product) {
        var _this = this;
        var newQty;
        newQty = cart_product.qty - 1;
        if (newQty === 0) {
            // this.cartservice.removeProductFromCart()
        }
        else {
            cart_product.qty = newQty;
            this.cartservice.removeOneFromCart(cart_product.item._id).subscribe(function (result) {
                if (result) {
                    _this.ngOnInit();
                }
            });
            // console.log(cart_product);
        }
        // console.log(this.cart);
    };
    CartComponent.prototype.increaseQuantity = function (cart_product) {
        var _this = this;
        this.cartservice.addProductToCart(cart_product.item._id).subscribe(function (result1) {
            if (result1) {
                _this.ngOnInit();
            }
        });
    };
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
    CartComponent.prototype.removeItem = function (id) {
        var _this = this;
        this.cartservice.removeProductFromCart(id).subscribe(function (result) {
            if (result) {
                _this.data.changeCount(result.totalQuantity);
                _this.ngOnInit();
            }
        });
    };
    CartComponent.prototype.emptyCart = function () {
        console.log('empty cart');
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        if (this.cart.totalPrice && this.cart.totalQuantity === 0) {
            alert('Cart is Empty');
        }
        else {
            this.isPopupOpen = true;
            var dialogRef = this.dialog.open(_shared_popup_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_5__["CredentialsComponent"], {
                data: {
                    cart: this.cart
                },
                panelClass: 'custom-dialog-container'
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.isPopupOpen = false;
            });
        }
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/routes/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/components/routes/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingcartService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/clothing/clothing.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/routes/clothing/clothing.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 100%;\r\n  height: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.title{\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  text-align: center;\r\n}\r\n\r\n.items{\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n\r\n.cardclass{\r\n  width: 250px;\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  display: inline-block;\r\n}\r\n\r\n.image-container{\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.mat-img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 250px;\r\n  transition: transform .2s;\r\n  scale: 1;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n  opacity: .4;\r\n  background-color: #5c636d;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 0;\r\n  transition: .5s ease;\r\n}\r\n\r\n.image-container:hover .overlay{\r\n  height: 10%;\r\n}\r\n\r\n.mat-img:hover{\r\n  transform: scale(1.03);\r\n  cursor: pointer;\r\n}\r\n\r\n.text {\r\n  color: white;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.mat-card-title{\r\n  font-weight: 1000;\r\n  text-transform: uppercase;\r\n  margin-top: 4px;\r\n  font-size: 25px;\r\n  color: #5E6977;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  cursor: pointer;\r\n}\r\n\r\n.price {\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .container{\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .cardclass{\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    margin:0 0 50px 0;\r\n    display:inline-block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvY2xvdGhpbmcvY2xvdGhpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLDBCQUEwQjtFQUMxQixTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0NBQ3RCOztBQUNEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBR1YsaUNBQWlDO0VBQ2pDLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztBQUdEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7R0FDdEI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGVzL2Nsb3RoaW5nL2Nsb3RoaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgbWFyZ2luOiAycHggYXV0byAxMHB4IGF1dG87XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFOEVFO1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBjb2xvcjogIzVFNjk3NztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZGNsYXNze1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggNTBweCAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XHJcbiAgc2NhbGU6IDE7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogLjQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjM2ZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMDtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxufVxyXG4uaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5vdmVybGF5e1xyXG4gIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG4ubWF0LWltZzpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzVFNjk3NztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRThFRTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgbWFyZ2luOiAycHggYXV0byAxMHB4IGF1dG87XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBjb2xvcjogIzVFNjk3NztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuY2FyZGNsYXNze1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOjAgMCA1MHB4IDA7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/routes/clothing/clothing.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/routes/clothing/clothing.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron title\">\n    CLOTHING\n  </div>\n  <mat-card class=\"cardclass\" *ngFor=\"let prod of products; let i = index\">\n    <div class=\"image-container\">\n      <img [src]= prod.productImage[0] alt=\"...\" class=\"mat-img\" (click)=\"productClicked(prod._id)\">\n      <div class=\"overlay\">\n        <div class=\"text\" (click)=\"productClicked(prod._id)\">Quick View</div>\n      </div>\n    </div>\n\n    <mat-card-title class=\"mat-card-title\" (click)=\"productClicked(prod._id)\">{{prod.name}}</mat-card-title>\n    <mat-label>{{prod.price | currency:'PKR'}}</mat-label>\n  </mat-card>\n\n</div>\n<!--\n<div style=\"float: left;\" *ngFor=\"let prod of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]; let i = index\">\n  <mat-card class=\"cardclass\">\n    <img src= \"../../../../assets/images/i1.jpg\" alt=\"...\" class=\"mat-img\">\n\n    <mat-card-title><a>prod.name</a></mat-card-title>\n    <mat-card-subtitle><a>prod.category</a></mat-card-subtitle>\n\n    <mat-card-content>\n      <p>prod.offer</p>\n      <hr>\n      <mat-label>prod.price | currency:'PKR'</mat-label>\n      <span class=\"float-right \">\n        <i class=\"fa fa-shopping-cart\" (click)=\"addToCart(prod._id)\"></i>\n      </span>\n    </mat-card-content>\n\n     <button (click)=\"addToCart(prod._id)\" mat-raised-button>Add</button>\n    <button mat-flat-button color=\"primary\">Details</button> -->\n    <!--<mat-card-footer>\n      Copyright @2020-OSB\n    </mat-card-footer>\n  </mat-card>\n\n</div> -->\n"

/***/ }),

/***/ "./src/app/components/routes/clothing/clothing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/routes/clothing/clothing.component.ts ***!
  \******************************************************************/
/*! exports provided: ClothingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothingComponent", function() { return ClothingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/popup/product/product.component */ "./src/app/components/shared/popup/product/product.component.ts");







var ClothingComponent = /** @class */ (function () {
    function ClothingComponent(router, dialog, productservice, cartService) {
        this.router = router;
        this.dialog = dialog;
        this.productservice = productservice;
        this.cartService = cartService;
        this.category = 'clothing';
        this.products = [];
        this.productImage = [];
    }
    ClothingComponent.prototype.ngOnInit = function () {
        this.fetchAllProducts(this.category);
    };
    ClothingComponent.prototype.fetchAllProducts = function (category) {
        var _this = this;
        this.productservice.getAllProduct(category).subscribe(function (res) {
            _this.products = res;
        }, function (error) { return console.log('Error: ', error); }, function () { return _this.fetchProductImage(_this.products); });
    };
    ClothingComponent.prototype.fetchProductImage = function (product) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.productservice.getProductImage(product[i]._id).subscribe(function (res) {
                _this.productImage[i] = res;
            }, function (error) { return console.log('Error: ', error); }, function () { return _this.createImageFromBlob(_this.productImage[i], i); });
        };
        var this_1 = this;
        for (var i = 0; i < product.length; i++) {
            _loop_1(i);
        }
    };
    ClothingComponent.prototype.createImageFromBlob = function (image, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.products[i].productImage[0] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    ClothingComponent.prototype.productClicked = function (product_data) {
        var _this = this;
        var product_details;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = product_data;
        var dialogRef = this.dialog.open(_shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], dialogConfig);
        // this.router.navigate(['/product/' + data]);
        dialogRef.beforeClosed().subscribe(function (result) {
            if (result) {
                product_details = result;
                _this.cartService.addProductToCart(product_details._id).subscribe(function (result1) {
                });
            }
            else {
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ClothingComponent.prototype.addToCart = function (id) {
        this.cartService.addProductToCart(id).subscribe(function (result) {
        });
    };
    ClothingComponent.prototype.ngOnDestroy = function () {
        this.cartService.getAllProductFromCart().subscribe(function (result) {
            console.log(result);
        });
    };
    ClothingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clothing',
            template: __webpack_require__(/*! ./clothing.component.html */ "./src/app/components/routes/clothing/clothing.component.html"),
            styles: [__webpack_require__(/*! ./clothing.component.css */ "./src/app/components/routes/clothing/clothing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingcartService"]])
    ], ClothingComponent);
    return ClothingComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/home/home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/routes/home/home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* div{\r\n  display: flex;\r\n  position: relative;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  word-wrap: break-word;\r\n} */\r\n\r\n.loader {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 99;\r\n}\r\n\r\n.spinner-position {\r\n  top: 40%;\r\n  left: 45%;\r\n}\r\n\r\n.banner{\r\n  display: flex;\r\n  position: relative;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  height: 500px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.banner-overlay{\r\n  color:#fff;\r\n  position:absolute;\r\n  z-index:12;\r\n  top:0;\r\n  left:0;\r\n  width:50%;\r\n  height: 500px;\r\n  text-align:center;\r\n}\r\n\r\n.banner-img{\r\n  height: 500px;\r\n  width: 100%;\r\n  -webkit-filter: blur(0px);\r\n          filter: blur(0px);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-radius: 2px;\r\n}\r\n\r\n.banner-label {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  background-color: rgba(0,0,0, 0.2); /* Black w/opacity/see-through */\r\n  border: none;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 500px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.banner-heading {\r\n  font-size: 60px;\r\n  margin-top: 17%;\r\n  font-weight: 600;\r\n  padding: 10px 0 0 0;\r\n  text-align: center;\r\n}\r\n\r\n.banner-lead{\r\n  line-height: 1.4;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n.banner-button {\r\n  background-color: rgba(0,0,0, 0.3);\r\n  padding: 14px 40px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  border: 2px solid #e7e7e7;\r\n  border-radius: 8px;\r\n  transition-duration: 0.4s;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.banner-button:hover {\r\n  background-color:  rgba(0,0,0, 10);\r\n  color: white;\r\n}\r\n\r\n/* mat-form-field {\r\n  display: none;\r\n  width: 100%;\r\n  height: 40px;\r\n}\r\nmat-form-field mat-label {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #000000;\r\n  font-size: 14px;\r\n  font-weight: 450;\r\n  box-sizing: border-box;\r\n  text-transform: uppercase;\r\n\r\n}\r\nmat-form-field mat-select mat-option a{\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #000000;\r\n  font-size: 14px;\r\n  font-weight: 450;\r\n  box-sizing: border-box;\r\n  text-transform: uppercase;\r\n\r\n}\r\n::ng-deep .mat-form-field-type-mat-select .mat-form-field-label {\r\n  color: white;\r\n} */\r\n\r\n.categoryContainer{\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0 9% 0 9%;\r\n  display: flex;\r\n}\r\n\r\n.cat-img {\r\n  height: 200px;\r\n}\r\n\r\n.categoryItem{\r\n  position: relative;\r\n  flex: 20%;\r\n  padding: 5px;\r\n  z-index: 2;\r\n}\r\n\r\n.cat-title {\r\n  display: none;\r\n}\r\n\r\n.category-overlay {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  padding: .7em .8em;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: auto;\r\n  transform: scale(0);\r\n  transition: .3s ease;\r\n}\r\n\r\n.category-overlay-text {\r\n  color: #000000;\r\n  text-transform: uppercase;\r\n  font-family: 'Times New Roman', Times, serif;\r\n  font-weight: bolder;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.categoryItem:hover .category-overlay {\r\n  transform: scale(1);\r\n}\r\n\r\na[href], input[type='submit'], input[type='image'], label[for], select, button, .pointer .text{\r\n  cursor: pointer;\r\n}\r\n\r\n.container{\r\n  position: relative;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n\r\n.product-section {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.title{\r\n  margin: 2px auto;\r\n  height: 60px;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 28px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n}\r\n\r\n.items{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.cardclass{\r\n  width: 250px;\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  display: inline-block;\r\n  text-align: left;\r\n}\r\n\r\n.image-container{\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.mat-img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 250px;\r\n  transition: transform .2s;\r\n  scale: 1;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n  opacity: .4;\r\n  background-color: #5c636d;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 0;\r\n  transition: .5s ease;\r\n}\r\n\r\n.image-container:hover .overlay{\r\n  height: 10%;\r\n}\r\n\r\n.mat-img:hover{\r\n  transform: scale(1.03);\r\n  cursor: pointer;\r\n}\r\n\r\n.text {\r\n  color: white;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.mat-card-title{\r\n  font-weight: 1000;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  text-transform: uppercase;\r\n  margin-top: 4px;\r\n  font-size: 25px;\r\n  color: #5E6977;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  cursor: pointer;\r\n}\r\n\r\n.mat-card-title:hover{\r\n  color: lightblue;\r\n}\r\n\r\n.price {\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  text-align: left;\r\n}\r\n\r\n/* Smartphones (landscape) ----------- */\r\n\r\n@media screen and (max-width: 1100px){\r\n  /* Styles */\r\n  }\r\n\r\n/* Smartphones (portrait) ----------- */\r\n\r\n@media (max-width : 800px) {\r\n  .banner,\r\n  .category-overlay-text {\r\n    display: none;\r\n  }\r\n\r\n  .categoryContainer{\r\n    padding: 0 7% 0 7%;\r\n  }\r\n\r\n.cat-img {\r\n  height: 50px;\r\n}\r\n\r\n.cat-title {\r\n  display: block;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-weight: 460;\r\n  font-size: 1.005em;\r\n  letter-spacing: 0.06em;\r\n}\r\n\r\n.title{\r\n  margin-bottom: 4px;\r\n  height: 20px;\r\n  padding: 20px 30px;\r\n  border: none;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  text-align: center;\r\n}\r\n\r\n\r\n  .cardclass{\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    margin:0 0 40px 0;\r\n    display:inline-block;\r\n  }\r\n\r\n  .text {\r\n    color: white;\r\n    font-size: 10px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-card-title{\r\n    font-weight: 1000;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    text-transform: uppercase;\r\n    margin-top: 10px;\r\n    font-size: 15px;\r\n    color: #5E6977;\r\n    border-bottom: 1px solid #E1E8EE;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .price {\r\n    margin: 1px auto 5px auto;\r\n    height: 60px;\r\n    padding: 20px 20px;\r\n    color: #5E6977;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    text-align: left;\r\n  }\r\n\r\n  .loader {\r\n    width: 320px;\r\n    height: 100%;\r\n  }\r\n  .spinner-position {\r\n    width: 50px;\r\n    height: 50px;\r\n    top: 40%;\r\n    left: 40%;\r\n  }\r\n\r\n  .container{\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/* Keyframes */\r\n\r\n/*empty*/\r\n\r\n@-webkit-keyframes empty {\r\n0% {opacity: 1}\r\n}\r\n\r\n@keyframes empty {\r\n0% {opacity: 1}\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n0% { opacity:0; }\r\n100% { opacity:1; }\r\n}\r\n\r\n@keyframes fadeIn {\r\n0% { opacity:0; }\r\n100% { opacity:1; }\r\n}\r\n\r\n@-webkit-keyframes fadeOut {\r\n0% { opacity:1; }\r\n100% { opacity:0; }\r\n}\r\n\r\n@keyframes fadeOut {\r\n0% { opacity:1; }\r\n100% { opacity:0; }\r\n}\r\n\r\n@-webkit-keyframes backSlideOut {\r\n25% { opacity: .5; -webkit-transform: translateZ(-500px); }\r\n75% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }\r\n100% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }\r\n}\r\n\r\n@keyframes backSlideOut {\r\n25% { opacity: .5; transform: translateZ(-500px); }\r\n75% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }\r\n100% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }\r\n}\r\n\r\n@-webkit-keyframes backSlideIn {\r\n0%, 25% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(200%); }\r\n75% { opacity: .5; -webkit-transform: translateZ(-500px); }\r\n100% { opacity: 1; -webkit-transform: translateZ(0) translateX(0); }\r\n}\r\n\r\n@keyframes backSlideIn {\r\n0%, 25% { opacity: .5; transform: translateZ(-500px) translateX(200%); }\r\n75% { opacity: .5; transform: translateZ(-500px); }\r\n100% { opacity: 1; transform: translateZ(0) translateX(0); }\r\n}\r\n\r\n@-webkit-keyframes scaleToFade {\r\nto { opacity: 0; -webkit-transform: scale(.8); }\r\n}\r\n\r\n@keyframes scaleToFade {\r\nto { opacity: 0; transform: scale(.8); }\r\n}\r\n\r\n@-webkit-keyframes goDown {\r\nfrom { -webkit-transform: translateY(-100%); }\r\n}\r\n\r\n@keyframes goDown {\r\nfrom { transform: translateY(-100%); }\r\n}\r\n\r\n@-webkit-keyframes scaleUpFrom {\r\nfrom { opacity: 0; -webkit-transform: scale(1.5); }\r\n}\r\n\r\n@keyframes scaleUpFrom {\r\nfrom { opacity: 0; transform: scale(1.5); }\r\n}\r\n\r\n@-webkit-keyframes scaleUpTo {\r\nto { opacity: 0; -webkit-transform: scale(1.5); }\r\n}\r\n\r\n@keyframes scaleUpTo {\r\nto { opacity: 0; transform: scale(1.5); }\r\n}\r\n\r\n/*----responsive-mediaquries-----*/\r\n\r\n@media (max-width: 900px){\r\n}\r\n\r\n@media (max-width: 800px){\r\n\r\n}\r\n\r\n@media (max-width:768px){\r\n.owl-carousel {\r\nwidth: 80%;\r\n}\r\n#owl-demo .item img {\r\nheight: auto;\r\ntext-align: center;\r\nmargin: 0 auto;\r\n}\r\n\r\n}\r\n\r\n@media (max-width: 667px){\r\n}\r\n\r\n@media (max-width: 640px){\r\n@media (max-width: 568px){\r\n\r\n}\r\n@media (max-width: 480px){\r\n\r\n}\r\n}\r\n\r\n@media (max-width:320px){\r\n.owl-carousel {\r\nwidth: 80%;\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7OztJQVFJOztBQUVKO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEO0VBQ0UsU0FBUztFQUNULFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtDQUN6Qjs7QUFDRDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLDBCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUNBQW1DLENBQUMsaUNBQWlDO0VBQ3JFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7Q0FFbEI7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0NBQ2Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCSTs7QUFFSjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtDQUN0Qjs7QUFDRDtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsNkNBQTZDO0VBQzdDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLFNBQVM7Q0FDVjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7Q0FDdEI7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFHVixpQ0FBaUM7RUFDakMsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOztBQUNELHlDQUF5Qzs7QUFDekM7RUFDRSxZQUFZO0dBQ1g7O0FBRUQsd0NBQXdDOztBQUMxQztFQUNFOztJQUVFLGNBQWM7R0FDZjs7RUFFRDtJQUNFLG1CQUFtQjtHQUNwQjs7QUFFSDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7OztFQUdDO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtHQUN0Qjs7RUFFRDtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBR1YsaUNBQWlDO0lBQ2pDLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLGFBQWE7SUFDYixhQUFhO0dBQ2Q7RUFDRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7R0FDWDs7RUFFRDtJQUNFLFlBQVk7R0FDYjtDQUNGOztBQUlELGVBQWU7O0FBQ2YsU0FBUzs7QUFDVDtBQUNBLElBQUksVUFBVSxDQUFDO0NBQ2Q7O0FBSUQ7QUFDQSxJQUFJLFVBQVUsQ0FBQztDQUNkOztBQUNEO0FBQ0EsS0FBSyxVQUFVLEVBQUU7QUFDakIsT0FBTyxVQUFVLEVBQUU7Q0FDbEI7O0FBS0Q7QUFDQSxLQUFLLFVBQVUsRUFBRTtBQUNqQixPQUFPLFVBQVUsRUFBRTtDQUNsQjs7QUFDRDtBQUNBLEtBQUssVUFBVSxFQUFFO0FBQ2pCLE9BQU8sVUFBVSxFQUFFO0NBQ2xCOztBQUtEO0FBQ0EsS0FBSyxVQUFVLEVBQUU7QUFDakIsT0FBTyxVQUFVLEVBQUU7Q0FDbEI7O0FBQ0Q7QUFDQSxNQUFNLFlBQVksQ0FBQyxzQ0FBc0MsRUFBRTtBQUMzRCxNQUFNLFlBQVksQ0FBQyx3REFBd0QsRUFBRTtBQUM3RSxPQUFPLFlBQVksQ0FBQyx3REFBd0QsRUFBRTtDQUM3RTs7QUFNRDtBQUNBLE1BQU0sWUFBWSxDQUFDLDhCQUE4QixFQUFFO0FBQ25ELE1BQU0sWUFBWSxDQUFDLGdEQUFnRCxFQUFFO0FBQ3JFLE9BQU8sWUFBWSxDQUFDLGdEQUFnRCxFQUFFO0NBQ3JFOztBQUNEO0FBQ0EsVUFBVSxZQUFZLENBQUMsdURBQXVELEVBQUU7QUFDaEYsTUFBTSxZQUFZLENBQUMsc0NBQXNDLEVBQUU7QUFDM0QsT0FBTyxXQUFXLENBQUMsK0NBQStDLEVBQUU7Q0FDbkU7O0FBTUQ7QUFDQSxVQUFVLFlBQVksQ0FBQywrQ0FBK0MsRUFBRTtBQUN4RSxNQUFNLFlBQVksQ0FBQyw4QkFBOEIsRUFBRTtBQUNuRCxPQUFPLFdBQVcsQ0FBQyx1Q0FBdUMsRUFBRTtDQUMzRDs7QUFDRDtBQUNBLEtBQUssV0FBVyxDQUFDLDZCQUE2QixFQUFFO0NBQy9DOztBQUlEO0FBQ0EsS0FBSyxXQUFXLENBQUMscUJBQXFCLEVBQUU7Q0FDdkM7O0FBQ0Q7QUFDQSxPQUFPLHFDQUFxQyxFQUFFO0NBQzdDOztBQUlEO0FBQ0EsT0FBTyw2QkFBNkIsRUFBRTtDQUNyQzs7QUFFRDtBQUNBLE9BQU8sV0FBVyxDQUFDLDhCQUE4QixFQUFFO0NBQ2xEOztBQUlEO0FBQ0EsT0FBTyxXQUFXLENBQUMsc0JBQXNCLEVBQUU7Q0FDMUM7O0FBRUQ7QUFDQSxLQUFLLFdBQVcsQ0FBQyw4QkFBOEIsRUFBRTtDQUNoRDs7QUFJRDtBQUNBLEtBQUssV0FBVyxDQUFDLHNCQUFzQixFQUFFO0NBQ3hDOztBQUNELG1DQUFtQzs7QUFDbkM7Q0FDQzs7QUFDRDs7Q0FFQzs7QUFDRDtBQUNBO0FBQ0EsV0FBVztDQUNWO0FBQ0Q7QUFDQSxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLGVBQWU7Q0FDZDs7Q0FFQTs7QUFDRDtDQUNDOztBQUNEO0FBQ0E7O0NBRUM7QUFDRDs7Q0FFQztDQUNBOztBQUNEO0FBQ0E7QUFDQSxXQUFXO0NBQ1Y7Q0FDQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGVzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIGRpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn0gKi9cclxuXHJcbi5sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5zcGlubmVyLXBvc2l0aW9uIHtcclxuICB0b3A6IDQwJTtcclxuICBsZWZ0OiA0NSU7XHJcbn1cclxuXHJcbi5iYW5uZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYmFubmVyLW92ZXJsYXl7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB6LWluZGV4OjEyO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICB3aWR0aDo1MCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmJhbm5lci1pbWd7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmaWx0ZXI6IGJsdXIoMHB4KTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uYmFubmVyLWxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjIpOyAvKiBCbGFjayB3L29wYWNpdHkvc2VlLXRocm91Z2ggKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uYmFubmVyLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBtYXJnaW4tdG9wOiAxNyU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhbm5lci1sZWFke1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5cclxufVxyXG5cclxuLmJhbm5lci1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuMyk7XHJcbiAgcGFkZGluZzogMTRweCA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJhbm5lci1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsMCwwLCAxMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBtYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxubWF0LWZvcm0tZmllbGQgbWF0LWxhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG59XHJcbm1hdC1mb3JtLWZpZWxkIG1hdC1zZWxlY3QgbWF0LW9wdGlvbiBhe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDUwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuXHJcbi5jYXRlZ29yeUNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMCA5JSAwIDklO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXQtaW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnlJdGVte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiAyMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5jYXQtdGl0bGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHBhZGRpbmc6IC43ZW0gLjhlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcbn1cclxuLmNhdGVnb3J5LW92ZXJsYXktdGV4dCB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhdGVnb3J5SXRlbTpob3ZlciAuY2F0ZWdvcnktb3ZlcmxheSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuYVtocmVmXSwgaW5wdXRbdHlwZT0nc3VibWl0J10sIGlucHV0W3R5cGU9J2ltYWdlJ10sIGxhYmVsW2Zvcl0sIHNlbGVjdCwgYnV0dG9uLCAucG9pbnRlciAudGV4dHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRpdGxle1xyXG4gIG1hcmdpbjogMnB4IGF1dG87XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFOEVFO1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBjb2xvcjogIzVFNjk3NztcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLml0ZW1ze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhcmRjbGFzc3tcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMTBweCAxMHB4IDUwcHggMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XHJcbiAgc2NhbGU6IDE7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogLjQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjM2ZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMDtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxufVxyXG4uaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5vdmVybGF5e1xyXG4gIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG4ubWF0LWltZzpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICM1RTY5Nzc7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUU4RUU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tYXQtY2FyZC10aXRsZTpob3ZlcntcclxuICBjb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gIG1hcmdpbjogMnB4IGF1dG8gMTBweCBhdXRvO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgY29sb3I6ICM1RTY5Nzc7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4vKiBTbWFydHBob25lcyAobGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpe1xyXG4gIC8qIFN0eWxlcyAqL1xyXG4gIH1cclxuXHJcbiAgLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0KSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aCA6IDgwMHB4KSB7XHJcbiAgLmJhbm5lcixcclxuICAuY2F0ZWdvcnktb3ZlcmxheS10ZXh0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnlDb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwIDclIDAgNyU7XHJcbiAgfVxyXG5cclxuLmNhdC1pbWcge1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmNhdC10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0NjA7XHJcbiAgZm9udC1zaXplOiAxLjAwNWVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICM1RTY5Nzc7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuICAuY2FyZGNsYXNze1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOjAgMCA0MHB4IDA7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJkLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjNUU2OTc3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUU4RUU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAucHJpY2Uge1xyXG4gICAgbWFyZ2luOiAxcHggYXV0byA1cHggYXV0bztcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGNvbG9yOiAjNUU2OTc3O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLnNwaW5uZXItcG9zaXRpb24ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyogS2V5ZnJhbWVzICovXHJcbi8qZW1wdHkqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZW1wdHkge1xyXG4wJSB7b3BhY2l0eTogMX1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgZW1wdHkge1xyXG4wJSB7b3BhY2l0eTogMX1cclxufVxyXG5Aa2V5ZnJhbWVzIGVtcHR5IHtcclxuMCUge29wYWNpdHk6IDF9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbjAlIHsgb3BhY2l0eTowOyB9XHJcbjEwMCUgeyBvcGFjaXR5OjE7IH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcclxuMCUgeyBvcGFjaXR5OjA7IH1cclxuMTAwJSB7IG9wYWNpdHk6MTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuMCUgeyBvcGFjaXR5OjA7IH1cclxuMTAwJSB7IG9wYWNpdHk6MTsgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcclxuMCUgeyBvcGFjaXR5OjE7IH1cclxuMTAwJSB7IG9wYWNpdHk6MDsgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlT3V0IHtcclxuMCUgeyBvcGFjaXR5OjE7IH1cclxuMTAwJSB7IG9wYWNpdHk6MDsgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbjAlIHsgb3BhY2l0eToxOyB9XHJcbjEwMCUgeyBvcGFjaXR5OjA7IH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFja1NsaWRlT3V0IHtcclxuMjUlIHsgb3BhY2l0eTogLjU7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MDBweCk7IH1cclxuNzUlIHsgb3BhY2l0eTogLjU7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MDBweCkgdHJhbnNsYXRlWCgtMjAwJSk7IH1cclxuMTAwJSB7IG9wYWNpdHk6IC41OyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTAwcHgpIHRyYW5zbGF0ZVgoLTIwMCUpOyB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGJhY2tTbGlkZU91dCB7XHJcbjI1JSB7IG9wYWNpdHk6IC41OyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTAwcHgpOyB9XHJcbjc1JSB7IG9wYWNpdHk6IC41OyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTAwcHgpIHRyYW5zbGF0ZVgoLTIwMCUpOyB9XHJcbjEwMCUgeyBvcGFjaXR5OiAuNTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwMHB4KSB0cmFuc2xhdGVYKC0yMDAlKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgYmFja1NsaWRlT3V0IHtcclxuMjUlIHsgb3BhY2l0eTogLjU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTAwcHgpOyB9XHJcbjc1JSB7IG9wYWNpdHk6IC41OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwMHB4KSB0cmFuc2xhdGVYKC0yMDAlKTsgfVxyXG4xMDAlIHsgb3BhY2l0eTogLjU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTAwcHgpIHRyYW5zbGF0ZVgoLTIwMCUpOyB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tTbGlkZUluIHtcclxuMCUsIDI1JSB7IG9wYWNpdHk6IC41OyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTAwcHgpIHRyYW5zbGF0ZVgoMjAwJSk7IH1cclxuNzUlIHsgb3BhY2l0eTogLjU7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MDBweCk7IH1cclxuMTAwJSB7IG9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHRyYW5zbGF0ZVgoMCk7IH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgYmFja1NsaWRlSW4ge1xyXG4wJSwgMjUlIHsgb3BhY2l0eTogLjU7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MDBweCkgdHJhbnNsYXRlWCgyMDAlKTsgfVxyXG43NSUgeyBvcGFjaXR5OiAuNTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwMHB4KTsgfVxyXG4xMDAlIHsgb3BhY2l0eTogMTsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWCgwKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgYmFja1NsaWRlSW4ge1xyXG4wJSwgMjUlIHsgb3BhY2l0eTogLjU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTAwcHgpIHRyYW5zbGF0ZVgoMjAwJSk7IH1cclxuNzUlIHsgb3BhY2l0eTogLjU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTAwcHgpOyB9XHJcbjEwMCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWCgwKTsgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZVRvRmFkZSB7XHJcbnRvIHsgb3BhY2l0eTogMDsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC44KTsgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBzY2FsZVRvRmFkZSB7XHJcbnRvIHsgb3BhY2l0eTogMDsgLW1vei10cmFuc2Zvcm06IHNjYWxlKC44KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2NhbGVUb0ZhZGUge1xyXG50byB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoLjgpOyB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGdvRG93biB7XHJcbmZyb20geyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgZ29Eb3duIHtcclxuZnJvbSB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgZ29Eb3duIHtcclxuZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlVXBGcm9tIHtcclxuZnJvbSB7IG9wYWNpdHk6IDA7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNjYWxlVXBGcm9tIHtcclxuZnJvbSB7IG9wYWNpdHk6IDA7IC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyB9XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZVVwRnJvbSB7XHJcbmZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlVXBUbyB7XHJcbnRvIHsgb3BhY2l0eTogMDsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc2NhbGVVcFRvIHtcclxudG8geyBvcGFjaXR5OiAwOyAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2NhbGVVcFRvIHtcclxudG8geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IH1cclxufVxyXG4vKi0tLS1yZXNwb25zaXZlLW1lZGlhcXVyaWVzLS0tLS0qL1xyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCl7XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuLm93bC1jYXJvdXNlbCB7XHJcbndpZHRoOiA4MCU7XHJcbn1cclxuI293bC1kZW1vIC5pdGVtIGltZyB7XHJcbmhlaWdodDogYXV0bztcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5tYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjY3cHgpe1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCl7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCl7XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCl7XHJcblxyXG59XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MzIwcHgpe1xyXG4ub3dsLWNhcm91c2VsIHtcclxud2lkdGg6IDgwJTtcclxufVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/routes/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/routes/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"banner\">\r\n    <div class=\"banner-overlay\">\r\n    <label class=\"banner-label\">\r\n      <h1 class=\"banner-heading\">OSB</h1>\r\n      <p class=\"banner-lead\">This Is Online Shopping Bazaar.</p>\r\n      <button class=\"banner-button\" (click)=\"scrollToview()\">SHOP NOW</button>\r\n    </label>\r\n  </div>\r\n  <img class=\"banner-img\" [src]=images[1].src>\r\n\r\n    <!-- <ng-container *ngFor=\"let slide of images; let i=index\">\r\n      <ng-template carouselSlide>\r\n        <img [src]=\"slide\">\r\n        <label><h1 class=\"heading\">Online Shopping Bazaar</h1></label>\r\n        <p class=\"lead\"></p>\r\n      </ng-template>\r\n    </ng-container>-->\r\n   </div>\r\n\r\n<!-- <div class=\"banner\">\r\n  <div class=\"banner-overlay\">\r\n  <label class=\"banner-label\">\r\n    <h1 class=\"banner-heading\">Online Shopping Bazaar</h1>\r\n    <p class=\"banner-lead\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, porro saepe voluptatibus cumque, harum iusto rem nobis et illo cupiditate aut cum qui fugit, sint perspiciatis est ipsa error vitae.</p>\r\n    <button class=\"banner-button\" (click)=\"scrollToview()\">SHOP NOW</button>\r\n  </label>\r\n</div>\r\n<owl-carousel-o [options]=\"customBannerOptions\">\r\n  <ng-container *ngFor=\"let bannerslides of images\">\r\n    <ng-template carouselSlide>\r\n      {{bannerslides.src}}\r\n      <img src = {{bannerslides.src}}>\r\n    </ng-template>\r\n  </ng-container> -->\r\n\r\n  <!-- <ng-container *ngFor=\"let slide of images; let i=index\">\r\n    <ng-template carouselSlide>\r\n      <img [src]=\"slide\">\r\n      <label><h1 class=\"heading\">Online Shopping Bazaar</h1></label>\r\n      <p class=\"lead\"></p>\r\n    </ng-template>\r\n  </ng-container>\r\n </owl-carousel-o> -->\r\n\r\n<!-- <mat-form-field appearance=\"fill\">\r\n  <mat-label>select Category </mat-label>\r\n  <mat-select (selectionChange) = \"departmentSelected($event.value)\" placeholder=\"select Category\">\r\n    <mat-option class=\"empty-select\"></mat-option>\r\n    <mat-option style=\"color: black;\" *ngFor=\"let department of departments\" [value]=\"department.value\">{{department.category}}</mat-option>\r\n  </mat-select>\r\n</mat-form-field> -->\r\n\r\n<div class=\"categoryContainer\">\r\n  <div class=\"categoryItem\" *ngFor=\"let cat of category; let i = index\" (click)=\"categoryClicked(i)\">\r\n    <img [src]= cat.categoryImage alt=\"...\" class=\"cat-img\"/>\r\n    <p class=\"cat-title\">{{cat.title}}</p>\r\n    <div class=\"category-overlay\">\r\n      <div class=\"category-overlay-text\">{{ cat.title }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"mainContainer\" class=\"container\">\r\n  <div *ngIf= 'loading' class=\"loader\">\r\n    <mat-spinner class=\"spinner-position\"  mode=\"indeterminate\"></mat-spinner>\r\n  </div>\r\n  <div class=\"product-section\">\r\n  <div class=\"title\">\r\n    ------ Top Deals ------\r\n  </div>\r\n  <div class=\"items\">\r\n    <owl-carousel-o [options]=\"customItemsOptions\">\r\n      <ng-container *ngFor=\"let prod of topDeals; let i = index\">\r\n        <ng-template carouselSlide >\r\n            <mat-card class=\"cardclass\">\r\n              <div class=\"image-container\">\r\n                <img [src]= prod.productImage[0] alt=\"...\" class=\"mat-img\" (click)=\"productClicked(prod._id)\">\r\n                <div class=\"overlay\">\r\n                  <div class=\"text\" (click)=\"productClicked(prod._id)\">Quick View</div>\r\n                </div>\r\n              </div>\r\n\r\n              <mat-card-title class=\"mat-card-title\" (click)=\"productClicked(prod._id)\">{{prod.name}}</mat-card-title>\r\n              <mat-label>{{prod.price | currency:'PKR'}}</mat-label>\r\n            </mat-card>\r\n          </ng-template>\r\n\r\n        </ng-container>\r\n      </owl-carousel-o>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"product-section\">\r\n    <div class=\"title\">\r\n      ------ Top Selling ------\r\n    </div>\r\n    <div class=\"items\">\r\n    <owl-carousel-o [options]=\"customItemsOptions\">\r\n      <ng-container class=\"item\"  *ngFor=\"let prod of topSelling; let i = index\">\r\n        <ng-template  class=\"item\" carouselSlide >\r\n            <mat-card class=\"cardclass\">\r\n              <div class=\"image-container\">\r\n                <img [src]= prod.productImage[0] alt=\"...\" class=\"mat-img\" (click)=\"productClicked(prod._id)\">\r\n                <div class=\"overlay\">\r\n                  <div class=\"text\" (click)=\"productClicked(prod._id)\">Quick View</div>\r\n                </div>\r\n              </div>\r\n              <mat-card-title class=\"mat-card-title\" (click)=\"productClicked(prod._id)\">{{prod.name}}</mat-card-title>\r\n              <mat-label>{{prod.price | currency:'PKR'}}</mat-label>\r\n            </mat-card>\r\n          </ng-template>\r\n        </ng-container>\r\n      </owl-carousel-o>\r\n    </div>\r\n  </div>\r\n  <div class=\"product-section\">\r\n    <div class=\"title\">\r\n      ------ Top Products ------\r\n    </div>\r\n    <div class=\"items\">\r\n      <owl-carousel-o [options]=\"customItemsOptions\">\r\n        <ng-container *ngFor=\"let prod of topProducts; let i = index\">\r\n          <ng-template carouselSlide >\r\n            <mat-card class=\"cardclass\">\r\n              <div class=\"image-container\">\r\n                <img [src]= prod.productImage[0] alt=\"...\" class=\"mat-img\" (click)=\"productClicked(prod._id)\">\r\n                <div class=\"overlay\">\r\n                  <div class=\"text\" (click)=\"productClicked(prod._id)\">Quick View</div>\r\n                </div>\r\n              </div>\r\n\r\n              <mat-card-title class=\"mat-card-title\" (click)=\"productClicked(prod._id)\">{{prod.name}}</mat-card-title>\r\n                <mat-label>{{prod.price | currency:'PKR'}}</mat-label>\r\n              </mat-card>\r\n            </ng-template>\r\n          </ng-container>\r\n        </owl-carousel-o>\r\n      </div>\r\n    </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/components/routes/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/routes/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/popup/product/product.component */ "./src/app/components/shared/popup/product/product.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(productservice, router, cartService, dialog, data) {
        this.productservice = productservice;
        this.router = router;
        this.cartService = cartService;
        this.dialog = dialog;
        this.data = data;
        this.category = [];
        this.categoryImage = [];
        this.topProductImage = [];
        this.topSellingImage = [];
        this.topDealsImage = [];
        this.topDeals = [];
        this.topSelling = [];
        this.topProducts = [];
        this.imageBlobUrl = [];
        this.offerBlobUrl = [];
        this.departmentShow = false;
        this.customBannerOptions = {
            items: 1,
            loop: true,
            dots: false,
            margin: 10,
            autoHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,
            autoplayHoverPause: false
        };
        this.images = [{ src: '../../../../assets/images/b1.jpg' },
            { src: '../../../../assets/images/b2.jpg' },
            { src: '../../../../assets/images/b3.jpg' },
            { src: '../../../../assets/images/b4.jpg' },
            { src: '../../../../assets/images/b5.jpg' }];
        this.departments = [
            { category: 'Clothing', value: 'Clothing' },
            { category: 'Baby Accessories', value: 'Baby' },
            { category: 'Bedding', value: 'Bedding' },
            { category: 'Blankets & Quilts', value: 'Blankets' },
            { category: 'Stuff Toys', value: 'Toys' }
        ];
        this.customItemsOptions = {
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
        this.loading = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initialize();
    };
    HomeComponent.prototype.initialize = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.fetchAllCategory();
                this.fetchSpecialOfferProduct('products');
                this.fetchSpecialOfferProduct('selling');
                this.fetchSpecialOfferProduct('deals');
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.fetchAllCategory = function () {
        var _this = this;
        this.productservice.getCategory().subscribe(function (res) {
            _this.category = res;
            console.log(res);
        }, function (error) { return console.log('Error: ', error); }, function () { return _this.fetchCategoryImage(_this.category); });
    };
    HomeComponent.prototype.fetchCategoryImage = function (category) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.productservice.getCategoryImage(category[i]._id).subscribe(function (res) {
                _this.categoryImage[i] = res;
            }, function (error) { return console.log('Error: ', error); }, function () { return _this.createCategoryImageFromBlob(_this.categoryImage[i], i); });
        };
        var this_1 = this;
        for (var i = 0; i < category.length; i++) {
            _loop_1(i);
        }
    };
    HomeComponent.prototype.createCategoryImageFromBlob = function (image, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.category[i].categoryImage = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    HomeComponent.prototype.fetchSpecialOfferProduct = function (offer) {
        var _this = this;
        if (offer === 'deals') {
            this.productservice.getSpecialProducts(offer).subscribe(function (result) {
                _this.topDeals = result;
                _this.fetchProductImage(_this.topDeals);
            });
        }
        if (offer === 'selling') {
            this.productservice.getSpecialProducts(offer).subscribe(function (result) {
                _this.topSelling = result;
                _this.fetchProductImage(_this.topSelling);
            });
        }
        if (offer === 'products') {
            this.productservice.getSpecialProducts(offer).subscribe(function (result) {
                _this.topProducts = result;
                _this.fetchProductImage(_this.topProducts);
            });
        }
    };
    HomeComponent.prototype.fetchProductImage = function (product) {
        var _this = this;
        var _loop_2 = function (i) {
            if (product[i].offer === 'deals') {
                this_2.productservice.getProductImage(product[i]._id).subscribe(function (res) {
                    _this.topDealsImage[i] = res;
                }, function (error) { return console.log('Error: ', error); }, function () { return _this.createDealsImageFromBlob(_this.topDealsImage[i], i); });
            }
            if (product[i].offer === 'products') {
                this_2.productservice.getProductImage(product[i]._id).subscribe(function (res) {
                    _this.topProductImage[i] = res;
                }, function (error) { return console.log('Error: ', error); }, function () { return _this.createProductsImageFromBlob(_this.topProductImage[i], i); });
            }
            if (product[i].offer === 'selling') {
                this_2.productservice.getProductImage(product[i]._id).subscribe(function (res) {
                    _this.topSellingImage[i] = res;
                }, function (error) { return console.log('Error: ', error); }, function () { return _this.createSellingImageFromBlob(_this.topSellingImage[i], i); });
            }
        };
        var this_2 = this;
        for (var i = 0; i < product.length; i++) {
            _loop_2(i);
        }
    };
    HomeComponent.prototype.createDealsImageFromBlob = function (image, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.loading = false;
            _this.topDeals[i].productImage[0] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    HomeComponent.prototype.createProductsImageFromBlob = function (image, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.topProducts[i].productImage[0] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    HomeComponent.prototype.createSellingImageFromBlob = function (image, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.topSelling[i].productImage[0] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    HomeComponent.prototype.categoryClicked = function (index) {
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
    };
    HomeComponent.prototype.productClicked = function (product_data) {
        var _this = this;
        var product_details;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.data = product_data;
        var dialogRef = this.dialog.open(_shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], dialogConfig);
        // this.router.navigate(['/product/' + data]);
        dialogRef.beforeClosed().subscribe(function (result) {
            if (result) {
                product_details = result;
                _this.cartService.addProductToCart(product_details._id).subscribe(function (result1) {
                    _this.data.changeCount(result1.totalQuantity);
                });
            }
            else {
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    HomeComponent.prototype.scrollToview = function () {
        var target = document.getElementById('mainContainer');
        if (target == null) {
            this.router.navigate(['/']);
            this.router.events.subscribe(function (evt) {
                if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
                    return;
                }
                target = document.getElementById('mainContainer');
                target.scrollIntoView({ behavior: 'smooth' });
                return;
            });
        }
        else {
            document.getElementById('mainContainer').scrollIntoView({ behavior: 'smooth' });
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/routes/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/routes/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingcartService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/toy/toy.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/routes/toy/toy.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 100%;\r\n  height: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.title{\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  text-align: center;\r\n}\r\n\r\n.items{\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n\r\n.cardclass{\r\n  width: 250px;\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  display: inline-block;\r\n}\r\n\r\n.image-container{\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.mat-img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 250px;\r\n  transition: transform .2s;\r\n  scale: 1;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n  opacity: .4;\r\n  background-color: #5c636d;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 0;\r\n  transition: .5s ease;\r\n}\r\n\r\n.image-container:hover .overlay{\r\n  height: 10%;\r\n}\r\n\r\n.mat-img:hover{\r\n  transform: scale(1.03);\r\n  cursor: pointer;\r\n}\r\n\r\n.text {\r\n  color: white;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.mat-card-title{\r\n  font-weight: 1000;\r\n  text-transform: uppercase;\r\n  margin-top: 4px;\r\n  font-size: 25px;\r\n  color: #5E6977;\r\n  border-bottom: 1px solid #E1E8EE;\r\n  cursor: pointer;\r\n}\r\n\r\n.price {\r\n  margin: 2px auto 10px auto;\r\n  height: 60px;\r\n  padding: 20px 30px;\r\n  color: #5E6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .container{\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .cardclass{\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    margin:0 0 50px 0;\r\n    display:inline-block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvdG95L3RveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLFNBQVM7Q0FDVjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7Q0FDdEI7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFHVixpQ0FBaUM7RUFDakMsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7O0FBR0Q7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtHQUN0QjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvdG95L3RveS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIG1hcmdpbjogMnB4IGF1dG8gMTBweCBhdXRvO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRThFRTtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgY29sb3I6ICM1RTY5Nzc7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbXN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRjbGFzc3tcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMTBweCAxMHB4IDUwcHggMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xyXG4gIHNjYWxlOiAxO1xyXG59XHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IC40O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzYzNmQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbn1cclxuLmltYWdlLWNvbnRhaW5lcjpob3ZlciAub3ZlcmxheXtcclxuICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuLm1hdC1pbWc6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZXtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICM1RTY5Nzc7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUU4RUU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gIG1hcmdpbjogMnB4IGF1dG8gMTBweCBhdXRvO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgY29sb3I6ICM1RTY5Nzc7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmNhcmRjbGFzc3tcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjowIDAgNTBweCAwO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/routes/toy/toy.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/routes/toy/toy.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron title\">\n    TOYS\n  </div>\n  <mat-card class=\"cardclass\" *ngFor=\"let prod of products; let i = index\">\n    <div class=\"image-container\">\n      <img [src]= prod.productImage[0] alt=\"...\" class=\"mat-img\" (click)=\"productClicked(prod._id)\">\n      <div class=\"overlay\">\n        <div class=\"text\" (click)=\"productClicked(prod._id)\">Quick View</div>\n      </div>\n    </div>\n\n    <mat-card-title class=\"mat-card-title\" (click)=\"productClicked(prod._id)\">{{prod.name}}</mat-card-title>\n    <mat-label>{{prod.price | currency:'PKR'}}</mat-label>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/routes/toy/toy.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/routes/toy/toy.component.ts ***!
  \********************************************************/
/*! exports provided: ToyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToyComponent", function() { return ToyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/popup/product/product.component */ "./src/app/components/shared/popup/product/product.component.ts");






var ToyComponent = /** @class */ (function () {
    function ToyComponent(productservice, dialog, cartService) {
        this.productservice = productservice;
        this.dialog = dialog;
        this.cartService = cartService;
        this.category = 'toy';
        this.products = [];
        this.productImage = [];
    }
    ToyComponent.prototype.ngOnInit = function () {
        this.fetchAllProducts(this.category);
    };
    ToyComponent.prototype.fetchAllProducts = function (category) {
        var _this = this;
        this.productservice.getAllProduct(category).subscribe(function (res) {
            _this.products = res;
        }, function (error) { return console.log('Error: ', error); }, function () { return _this.fetchProductImage(_this.products); });
    };
    ToyComponent.prototype.fetchProductImage = function (product) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.productservice.getProductImage(product[i]._id).subscribe(function (res) {
                _this.productImage[i] = res;
            }, function (error) { return console.log('Error: ', error); }, function () { return _this.createImageFromBlob(_this.productImage[i], i); });
        };
        var this_1 = this;
        for (var i = 0; i < product.length; i++) {
            _loop_1(i);
        }
    };
    ToyComponent.prototype.createImageFromBlob = function (image, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.products[i].productImage[0] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    ToyComponent.prototype.productClicked = function (product_data) {
        var _this = this;
        var product_details;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.data = product_data;
        var dialogRef = this.dialog.open(_shared_popup_product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"], dialogConfig);
        // this.router.navigate(['/product/' + data]);
        dialogRef.beforeClosed().subscribe(function (result) {
            if (result) {
                product_details = result;
                _this.cartService.addProductToCart(product_details._id).subscribe(function (result1) {
                });
            }
            else {
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ToyComponent.prototype.addToCart = function (id) {
        this.cartService.addProductToCart(id).subscribe(function (result) {
        });
    };
    ToyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toy',
            template: __webpack_require__(/*! ./toy.component.html */ "./src/app/components/routes/toy/toy.component.html"),
            styles: [__webpack_require__(/*! ./toy.component.css */ "./src/app/components/routes/toy/toy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingcartService"]])
    ], ToyComponent);
    return ToyComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/user/activation/activation.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/routes/user/activation/activation.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGVzL3VzZXIvYWN0aXZhdGlvbi9hY3RpdmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/routes/user/activation/activation.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/routes/user/activation/activation.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <mat-card class=\"mat-elevation-z12\">\n    <mat-card-title style=\"text-align:center;\">Sign Up</mat-card-title>\n        <mat-card-content>\n          <form #registerForm=\"ngForm\" novalidate>\n            <mat-form-field>\n              <input\n              matInput\n              placeholder=\"User Name\"\n              required name=\"username\"\n              ngModel\n              #username=\"ngModel\">\n              <mat-icon matSuffix>perm_identity</mat-icon>\n              <mat-error *ngIf=\"username.invalid\">\n                Username is required\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n              matInput\n              placeholder=\"Email\"\n              required\n              name=\"email\"\n              ngModel\n              #email=\"ngModel\"\n              pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\n                <mat-error *ngIf=\"email.errors && email.errors.required\">\n                  Email is required\n                </mat-error>\n                <mat-error *ngIf=\"email.errors && email.errors.pattern\">\n                  Enter a valid email\n                </mat-error>\n              <mat-icon matSuffix>email</mat-icon>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n              matInput\n              placeholder=\"Password\"\n              type=\"password\"\n              required\n              minlength=\"6\"\n              name=\"password\"\n              ngModel\n              #password=\"ngModel\">\n                <mat-error *ngIf=\"password.errors && password.errors.required\">\n                  Password is required\n                </mat-error>\n                <mat-error *ngIf=\"password.errors && password.errors.minlength\">\n                  Password must be of length 6\n                </mat-error>\n              <mat-icon matSuffix>lock</mat-icon>\n            </mat-form-field>\n\n            <!-- <mat-form-field>\n                <input\n                matInput\n                placeholder=\"Password\"\n                type=\"password\"\n                required\n                minlength=\"6\"\n                name=\"repassword\"\n                ngModel\n                #repassword=\"ngModel\">\n                <mat-error *ngIf=\"repassword.errors && repassword.errors.required\">\n                  Re-Enter Password is required\n                </mat-error>\n              <mat-icon matSuffix>lock</mat-icon>\n            </mat-form-field> -->\n\n            <button mat-raised-button color=\"primary\" class=\"login-button\">\n              Sign Up\n            </button>\n          </form>\n        </mat-card-content>\n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/routes/user/activation/activation.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/routes/user/activation/activation.component.ts ***!
  \***************************************************************************/
/*! exports provided: ActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationComponent", function() { return ActivationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ActivationComponent = /** @class */ (function () {
    function ActivationComponent(userAuth, activeRoutes, router) {
        this.userAuth = userAuth;
        this.activeRoutes = activeRoutes;
        this.router = router;
    }
    ActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoutes.params.subscribe(function (result) {
            _this.token = result.token;
        });
        this.userAuth.confirmation(this.token).subscribe(function (result) {
            _this.router.navigateByUrl('/user/profile');
        });
    };
    ActivationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activation',
            template: __webpack_require__(/*! ./activation.component.html */ "./src/app/components/routes/user/activation/activation.component.html"),
            styles: [__webpack_require__(/*! ./activation.component.css */ "./src/app/components/routes/user/activation/activation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ActivationComponent);
    return ActivationComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/user/profile/profile.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/routes/user/profile/profile.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGVzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/routes/user/profile/profile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/routes/user/profile/profile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal\">\n\n  <!-- // ADMIN SECTION -->\n  <div class=\"admin\" *ngIf=\"isAdmin\">\n    <h1>Welcome Admin Sahab. {{ details.username }}</h1>\n\n    <button (click) = \"addProduct()\">Add Product</button>\n\n    <div *ngIf = \"showAddproduct\">\n      <h2 class=\"page-header\">ADD PRODUCT</h2>\n      <form #f=\"ngForm\" (submit)=\"onSubmit(f)\">\n        <div class=\"form-group\">\n          <label>Product Name</label>\n          <input\n            type=\"text\"\n            [(ngModel)]=\"productUpload.name\"\n            name=\"name\"\n            class=\"form-control\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label>Product Category</label>\n          <input\n            type=\"text\"\n            [(ngModel)]=\"productUpload.category\"\n            name=\"name\"\n            class=\"form-control\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label>Product Price</label>\n          <input\n            type=\"text\"\n            [(ngModel)]=\"productUpload.price\"\n            name=\"price\"\n            class=\"form-control\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label>Quantity</label>\n          <input type=\"text\" [(ngModel)]=\"productUpload.quantity\" name=\"name\" class=\"form-control\"/>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Special Offers</label>\n            <input type=\"text\" [(ngModel)]=\"productUpload.offer\" name=\"name\" class=\"form-control\"/>\n          </div>\n\n        <div class=\"form-group\">\n          <label>Product Image</label>\n          <input type=\"file\" (change)=\"onFileSelected($event)\" multiple />\n        </div>\n\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n        <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"\"></i>\n      </form>\n      </div>\n\n  </div>\n\n\n  <!-- //USER  SECTIONS -->\n  <div class=\"user\"  *ngIf=\"!isAdmin\">\n      <h1>Welcome : {{ details?.email }}</h1>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/routes/user/profile/profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/routes/user/profile/profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userAuth, validate_product, productservice) {
        this.userAuth = userAuth;
        this.validate_product = validate_product;
        this.productservice = productservice;
        this.productUpload = {
            _id: '',
            name: '',
            category: '',
            offer: '',
            price: '',
            quantity: null,
            productImage: [null]
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAuth.profile().subscribe(function (user) {
            _this.details = user;
            _this.checkUserstatus(_this.details.email);
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.checkUserstatus = function (email) {
        this.isAdmin = false;
        if (email === 'tech@onlineshoppingbazaar.com') {
            this.isAdmin = true;
        }
    };
    ProfileComponent.prototype.addProduct = function () {
        this.showAddproduct = true;
    };
    ProfileComponent.prototype.onFileSelected = function (event) {
        var files = event.target.files;
        this.productUpload.productImage = files;
    };
    ProfileComponent.prototype.onSubmit = function (f) {
        if (!this.validate_product.validateProduct(this.productUpload)) {
            return false;
        }
        this.productservice.createProduct(this.productUpload).subscribe(function (data) {
            console.log('product created successfully');
        });
        f.resetForm();
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/routes/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/routes/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/user/reset-password/reset-password.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/routes/user/reset-password/reset-password.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.reset-page {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n\r\nmat-card {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  border-radius: 8px;\r\n}\r\n\r\nmat-tab-group{\r\n  min-height: 400px;\r\n}\r\n\r\nmat-form-field, mat-checkbox {\r\n  width: 100%;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\nmat-card-content {\r\n  margin-top: 20px;\r\n}\r\n\r\n.reset-button {\r\n  margin-top: 20px;\r\n  display: block;\r\n  width: 80%;\r\n  margin: 20px auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0NBQ2Q7O0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JvdXRlcy91c2VyL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnJlc2V0LXBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5tYXQtdGFiLWdyb3Vwe1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkLCBtYXQtY2hlY2tib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucmVzZXQtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/routes/user/reset-password/reset-password.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/routes/user/reset-password/reset-password.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reset-page\">\n  <mat-card class=\"mat-elevation-z12\">\n    <mat-card-title style=\"text-align:center;\">Reset Password</mat-card-title>\n    <mat-card-content>\n\n      <form #resetForm=\"ngForm\" (ngSubmit)=\"reset(resetForm)\" novalidate>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Email\"\n          required\n          name=\"email\"\n          ngModel\n          #email=\"ngModel\"\n          pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\n            <mat-error *ngIf=\"email.errors && email.errors.required\">\n              Email is required\n            </mat-error>\n            <mat-error *ngIf=\"email.errors && email.errors.pattern\">\n              Enter a valid email\n            </mat-error>\n          <mat-icon matSuffix>email</mat-icon>\n        </mat-form-field>\n        <button\n        mat-raised-button\n        color=\"primary\"\n        class=\"reset-button\">\n        Send Reset Request\n      </button>\n    </form>\n  </mat-card-content>\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/routes/user/reset-password/reset-password.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/routes/user/reset-password/reset-password.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(userAuth, router) {
        this.userAuth = userAuth;
        this.router = router;
        this.credentials = {
            username: '',
            email: '',
            password: ''
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.reset = function (resetForm) {
        if (!resetForm.invalid) {
            this.credentials.email = resetForm.value.email;
        }
        else {
            return;
        }
        console.log(this.credentials);
        this.userAuth.reset(this.credentials).subscribe(function (result) {
            console.log(result);
        });
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/components/routes/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/components/routes/user/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/user/signin/signin.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/routes/user/signin/signin.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login-page {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n\r\nmat-card {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  border-radius: 8px;\r\n}\r\n\r\nmat-tab-group{\r\n  min-height: 400px;\r\n}\r\n\r\nmat-form-field, mat-checkbox {\r\n  width: 100%;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\nmat-card-content {\r\n  margin-top: 20px;\r\n}\r\n\r\n.login-button {\r\n  margin-top: 20px;\r\n  display: block;\r\n  width: 80%;\r\n  margin: 20px auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvdXNlci9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7Q0FDZDs7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGVzL3VzZXIvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dpbi1wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxubWF0LXRhYi1ncm91cHtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZCwgbWF0LWNoZWNrYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/routes/user/signin/signin.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/routes/user/signin/signin.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form (submit)=\"login()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">Sign in!</button>\n  </form> -->\n\n  <div class=\"login-page\">\n    <mat-card class=\"mat-elevation-z12\">\n      <mat-card-title style=\"text-align:center;\">SignIn</mat-card-title>\n  <mat-card-content>\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\" novalidate>\n      <mat-form-field>\n        <input\n          matInput\n          placeholder=\"Username\"\n          required\n          name=\"username\"\n          ngModel\n          #username=\"ngModel\">\n          <mat-error *ngIf=\"username.invalid\">Username is required</mat-error>\n        <mat-icon matSuffix>username</mat-icon>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input\n          matInput\n          placeholder=\"Password\"\n          type=\"password\"\n          required\n          minlength=\"6\"\n          name=\"password\"\n          ngModel\n          #password=\"ngModel\">\n          <mat-error\n            *ngIf=\"password.errors && password.errors.required\">\n            Password is required\n          </mat-error>\n          <mat-error\n            *ngIf=\"password.errors && password.errors.minlength\">\n            Password must be of length 6\n          </mat-error>\n        <mat-icon matSuffix>lock</mat-icon>\n      </mat-form-field>\n      <a [routerLink]= \"['/user/reset']\">Forget Password</a>\n      <button\n        mat-raised-button\n        class=\"login-button\">\n        Sign In\n      </button>\n      <button\n        mat-raised-button\n        color=\"warn\"\n        class=\"login-button\">\n        Login with Google\n      </button>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        class=\"login-button\">\n        Login with Facebook\n      </button>\n    </form>\n  </mat-card-content>\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/routes/user/signin/signin.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/routes/user/signin/signin.component.ts ***!
  \*******************************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SigninComponent = /** @class */ (function () {
    function SigninComponent(userAuth, router) {
        this.userAuth = userAuth;
        this.router = router;
        this.credentials = {
            username: '',
            email: '',
            password: ''
        };
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.login = function (loginForm) {
        var _this = this;
        if (!loginForm.invalid) {
            this.credentials.username = loginForm.value.username;
            this.credentials.password = loginForm.value.password;
        }
        else {
            return;
        }
        this.userAuth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/user/profile');
        }, function (err) {
            console.log(err);
        });
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/routes/user/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/routes/user/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/routes/user/signup/signup.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/routes/user/signup/signup.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .my-form{\r\n  width: 100%;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-section {\r\n  padding-bottom: 20px;\r\n  width: 100%;\r\n}\r\n.example-margin {\r\n  width: 100%;\r\n}\r\n\r\ndiv {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  width: 50%;\r\n  padding: 1rem;\r\n}\r\n\r\n.form-fields {\r\n  border-right: 1px dotted silver;\r\n}\r\n\r\n.form-buttons{\r\n  padding-left: 20px;\r\n  height: 100%;\r\n} */\r\n\r\n\r\n.login-page {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\nmat-card {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  border-radius: 8px;\r\n}\r\n\r\n\r\nmat-tab-group{\r\n  min-height: 400px;\r\n}\r\n\r\n\r\nmat-form-field, mat-checkbox {\r\n  width: 100%;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n\r\nmat-card-content {\r\n  margin-top: 20px;\r\n}\r\n\r\n\r\n.login-button {\r\n  margin-top: 20px;\r\n  display: block;\r\n  width: 80%;\r\n  margin: 20px auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTs7O0FBR0o7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixpQkFBaUI7Q0FDbEI7OztBQUVEO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7OztBQUNEO0VBQ0Usa0JBQWtCO0NBQ25COzs7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtDQUNkOzs7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjs7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JvdXRlcy91c2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5teS1mb3Jte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5leGFtcGxlLW1hcmdpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1maWVsZHMge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IGRvdHRlZCBzaWx2ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvbnN7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufSAqL1xyXG5cclxuXHJcbi5sb2dpbi1wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxubWF0LXRhYi1ncm91cHtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZCwgbWF0LWNoZWNrYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/routes/user/signup/signup.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/routes/user/signup/signup.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <mat-card class=\"mat-elevation-z12\">\n    <mat-card-title style=\"text-align:center;\">Sign Up</mat-card-title>\n        <mat-card-content>\n          <form #registerForm=\"ngForm\" (ngSubmit)=\"register(registerForm)\" novalidate>\n            <mat-form-field>\n              <input\n              matInput\n              placeholder=\"User Name\"\n              required name=\"username\"\n              ngModel\n              #username=\"ngModel\">\n              <mat-icon matSuffix>perm_identity</mat-icon>\n              <mat-error *ngIf=\"username.invalid\">\n                Username is required\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n              matInput\n              placeholder=\"Email\"\n              required\n              name=\"email\"\n              ngModel\n              #email=\"ngModel\"\n              pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\n                <mat-error *ngIf=\"email.errors && email.errors.required\">\n                  Email is required\n                </mat-error>\n                <mat-error *ngIf=\"email.errors && email.errors.pattern\">\n                  Enter a valid email\n                </mat-error>\n              <mat-icon matSuffix>email</mat-icon>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n              matInput\n              placeholder=\"Password\"\n              type=\"password\"\n              required\n              minlength=\"6\"\n              name=\"password\"\n              ngModel\n              #password=\"ngModel\">\n                <mat-error *ngIf=\"password.errors && password.errors.required\">\n                  Password is required\n                </mat-error>\n                <mat-error *ngIf=\"password.errors && password.errors.minlength\">\n                  Password must be of length 6\n                </mat-error>\n              <mat-icon matSuffix>lock</mat-icon>\n            </mat-form-field>\n\n            <!-- <mat-form-field>\n                <input\n                matInput\n                placeholder=\"Password\"\n                type=\"password\"\n                required\n                minlength=\"6\"\n                name=\"repassword\"\n                ngModel\n                #repassword=\"ngModel\">\n                <mat-error *ngIf=\"repassword.errors && repassword.errors.required\">\n                  Re-Enter Password is required\n                </mat-error>\n              <mat-icon matSuffix>lock</mat-icon>\n            </mat-form-field> -->\n\n            <button mat-raised-button color=\"primary\" class=\"login-button\">\n              Sign Up\n            </button>\n          </form>\n        </mat-card-content>\n  </mat-card>\n</div>\n\n<app-notification></app-notification>\n\n<!-- <div class=\"row\">\n  <div class=\"clo-md-4 col-md-offset-4\">\n    <h1>Sign Up</h1>\n    Validation Error\n    <form action=\"\" method=\"post\">\n      <div class=\"form-group\">\n        <label for=\"email\" >Email</label>\n        <input type=\"text\" id=\"email\" name=\"email\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"password\" >Password</label>\n          <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\">\n        </div>\n        <button type=\"submit\">Sign Up</button>\n\n    </form>\n  </div>\n\n</div> -->\n\n<!-- <form (submit)=\"register()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">Register!</button>\n  </form> -->\n"

/***/ }),

/***/ "./src/app/components/routes/user/signup/signup.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/routes/user/signup/signup.component.ts ***!
  \*******************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/notification.service */ "./src/app/services/notification.service.ts");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(userAuth, router, _notificationservice) {
        this.userAuth = userAuth;
        this.router = router;
        this._notificationservice = _notificationservice;
        this.credentials = {
            username: '',
            email: '',
            password: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function (userform) {
        var _this = this;
        if (!userform.invalid) {
            this.credentials.username = userform.value.username;
            this.credentials.email = userform.value.email;
            this.credentials.password = userform.value.password;
        }
        else {
            return;
        }
        this.userAuth.register(this.credentials).subscribe(function (result) {
            _this._notificationservice.success(result.message);
        }, function (err) {
            _this._notificationservice.error(err.message);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/routes/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/routes/user/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/notification/notification.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/shared/notification/notification.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Notification CSS */\r\n\r\n\r\n.toast-title {\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.toast-message {\r\n  word-wrap: break-word;\r\n}\r\n\r\n\r\n.toast-message a,\r\n  .toast-message label {\r\n      color: #FFFFFF;\r\n  }\r\n\r\n\r\n.toast-message a:hover {\r\n          color: #CCCCCC;\r\n          text-decoration: none;\r\n      }\r\n\r\n\r\n.toast-close-button {\r\n  position: relative;\r\n  right: -0.3em;\r\n  top: -0.3em;\r\n  float: right;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  -webkit-text-shadow: 0 1px 0 #ffffff;\r\n  text-shadow: 0 1px 0 #ffffff;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n.toast-close-button:hover,\r\n  .toast-close-button:focus {\r\n      color: #000000;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n      opacity: 0.4;\r\n  }\r\n\r\n\r\n/*Additional properties for button version\r\niOS requires the button element instead of an anchor tag.\r\nIf you want the anchor version, it requires `href=\"#\"`.*/\r\n\r\n\r\nbutton.toast-close-button {\r\n  padding: 0;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: 0;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n\r\n.toast-top-center {\r\n  top: 0;\r\n  right: 0;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.toast-bottom-center {\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.toast-top-full-width {\r\n  top: 0;\r\n  right: 0;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.toast-bottom-full-width {\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.toast-top-left {\r\n  top: 12px;\r\n  left: 12px;\r\n}\r\n\r\n\r\n.toast-top-right {\r\n  top: 12px;\r\n  right: 12px;\r\n}\r\n\r\n\r\n.toast-bottom-right {\r\n  right: 12px;\r\n  bottom: 12px;\r\n}\r\n\r\n\r\n.toast-bottom-left {\r\n  bottom: 12px;\r\n  left: 12px;\r\n}\r\n\r\n\r\n#toast-container {\r\n  pointer-events: none;\r\n  position: fixed;\r\n  z-index: 99999;\r\n}\r\n\r\n\r\n#toast-container * {\r\n      box-sizing: border-box;\r\n  }\r\n\r\n\r\n#toast-container > div {\r\n      position: relative;\r\n      overflow: hidden;\r\n      margin: 0 0 6px;\r\n      padding: 15px 15px 15px 50px;\r\n      width: 300px;\r\n      border-radius: 3px 3px 3px 3px;\r\n      background-position: 15px center;\r\n      background-repeat: no-repeat;\r\n      box-shadow: 0 0 12px #999999;\r\n      color: #FFFFFF;\r\n      opacity: 0.8;\r\n  }\r\n\r\n\r\n#toast-container > div.toast-custom {\r\n          padding: 15px;\r\n          color: #030303;\r\n      }\r\n\r\n\r\n#toast-container > div.toast-custom .toast-close-button {\r\n              color: #999999 !important;\r\n          }\r\n\r\n\r\n#toast-container > :hover {\r\n      box-shadow: 0 0 12px #000000;\r\n      opacity: 1;\r\n      cursor: pointer;\r\n  }\r\n\r\n\r\n#toast-container > .toast-info {\r\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=\") !important;\r\n  }\r\n\r\n\r\n#toast-container > .toast-error {\r\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=\") !important;\r\n  }\r\n\r\n\r\n#toast-container > .toast-success {\r\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==\") !important;\r\n  }\r\n\r\n\r\n#toast-container > .toast-warning {\r\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=\") !important;\r\n  }\r\n\r\n\r\n#toast-container.toast-top-center > div,\r\n  #toast-container.toast-bottom-center > div {\r\n      width: 300px;\r\n      margin: auto;\r\n  }\r\n\r\n\r\n#toast-container.toast-top-full-width > div,\r\n  #toast-container.toast-bottom-full-width > div {\r\n      width: 96%;\r\n      margin: auto;\r\n  }\r\n\r\n\r\n.toast {\r\n  background-color: #FFFFFF;\r\n  pointer-events: auto;\r\n}\r\n\r\n\r\n.toast-success {\r\n  background-color: #51A351;\r\n}\r\n\r\n\r\n.toast-error {\r\n  background-color: #BD362F;\r\n}\r\n\r\n\r\n.toast-info {\r\n  background-color: #2F96B4;\r\n}\r\n\r\n\r\n.toast-warning {\r\n  background-color: #F89406;\r\n}\r\n\r\n\r\n.toast-progress {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 4px;\r\n  background-color: #000000;\r\n  opacity: 0.4;\r\n}\r\n\r\n\r\n/*Responsive Design*/\r\n\r\n\r\n@media all and (max-width: 240px) {\r\n  #toast-container > div {\r\n      padding: 8px 8px 8px 50px;\r\n      width: 11em;\r\n  }\r\n\r\n  #toast-container .toast-close-button {\r\n      right: -0.2em;\r\n      top: -0.2em;\r\n  }\r\n}\r\n\r\n\r\n@media all and (min-width: 241px) and (max-width: 480px) {\r\n  #toast-container > div {\r\n      padding: 8px 8px 8px 50px;\r\n      width: 18em;\r\n  }\r\n\r\n  #toast-container .toast-close-button {\r\n      right: -0.2em;\r\n      top: -0.2em;\r\n  }\r\n}\r\n\r\n\r\n@media all and (min-width: 481px) and (max-width: 768px) {\r\n  #toast-container > div {\r\n      padding: 15px 15px 15px 50px;\r\n      width: 25em;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjs7O0FBR3RCO0VBQ0Usa0JBQWtCO0NBQ25COzs7QUFFRDtFQUNFLHNCQUFzQjtDQUN2Qjs7O0FBRUM7O01BRUksZUFBZTtHQUNsQjs7O0FBRUc7VUFDSSxlQUFlO1VBQ2Ysc0JBQXNCO09BQ3pCOzs7QUFFUDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLGFBQWE7Q0FDZDs7O0FBRUM7O01BRUksZUFBZTtNQUNmLHNCQUFzQjtNQUN0QixnQkFBZ0I7TUFDaEIsYUFBYTtHQUNoQjs7O0FBQ0g7O3lEQUV5RDs7O0FBQ3pEO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLHlCQUF5QjtDQUMxQjs7O0FBRUQ7RUFDRSxPQUFPO0VBQ1AsU0FBUztFQUNULFlBQVk7Q0FDYjs7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7Q0FDYjs7O0FBRUQ7RUFDRSxPQUFPO0VBQ1AsU0FBUztFQUNULFlBQVk7Q0FDYjs7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7Q0FDYjs7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsV0FBVztDQUNaOzs7QUFFRDtFQUNFLFVBQVU7RUFDVixZQUFZO0NBQ2I7OztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsV0FBVztDQUNaOzs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7O0FBRUM7TUFHSSx1QkFBdUI7R0FDMUI7OztBQUVEO01BQ0ksbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsNkJBQTZCO01BQzdCLGFBQWE7TUFHYiwrQkFBK0I7TUFDL0IsaUNBQWlDO01BQ2pDLDZCQUE2QjtNQUc3Qiw2QkFBNkI7TUFDN0IsZUFBZTtNQUNmLGFBQWE7R0FDaEI7OztBQUVHO1VBQ0ksY0FBYztVQUNkLGVBQWU7T0FDbEI7OztBQUVHO2NBQ0ksMEJBQTBCO1dBQzdCOzs7QUFFVDtNQUdJLDZCQUE2QjtNQUM3QixXQUFXO01BQ1gsZ0JBQWdCO0dBQ25COzs7QUFFRDtNQUNJLDJ3QkFBMndCO0dBQzl3Qjs7O0FBRUQ7TUFDSSxtekJBQW16QjtHQUN0ekI7OztBQUVEO01BQ0ksdWdCQUF1Z0I7R0FDMWdCOzs7QUFFRDtNQUNJLDJ1QkFBMnVCO0dBQzl1Qjs7O0FBRUQ7O01BRUksYUFBYTtNQUNiLGFBQWE7R0FDaEI7OztBQUVEOztNQUVJLFdBQVc7TUFDWCxhQUFhO0dBQ2hCOzs7QUFFSDtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7Q0FDdEI7OztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOzs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7OztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsYUFBYTtDQUNkOzs7QUFFRCxxQkFBcUI7OztBQUNyQjtFQUNFO01BQ0ksMEJBQTBCO01BQzFCLFlBQVk7R0FDZjs7RUFFRDtNQUNJLGNBQWM7TUFDZCxZQUFZO0dBQ2Y7Q0FDRjs7O0FBRUQ7RUFDRTtNQUNJLDBCQUEwQjtNQUMxQixZQUFZO0dBQ2Y7O0VBRUQ7TUFDSSxjQUFjO01BQ2QsWUFBWTtHQUNmO0NBQ0Y7OztBQUVEO0VBQ0U7TUFDSSw2QkFBNkI7TUFDN0IsWUFBWTtHQUNmO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOb3RpZmljYXRpb24gQ1NTICovXHJcblxyXG5cclxuLnRvYXN0LXRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRvYXN0LW1lc3NhZ2Uge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuICAudG9hc3QtbWVzc2FnZSBhLFxyXG4gIC50b2FzdC1tZXNzYWdlIGxhYmVsIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG5cclxuICAgICAgLnRvYXN0LW1lc3NhZ2UgYTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI0NDQ0NDQztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAtMC4zZW07XHJcbiAgdG9wOiAtMC4zZW07XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICAtd2Via2l0LXRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZmZmZjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbiAgLnRvYXN0LWNsb3NlLWJ1dHRvbjpob3ZlcixcclxuICAudG9hc3QtY2xvc2UtYnV0dG9uOmZvY3VzIHtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG4vKkFkZGl0aW9uYWwgcHJvcGVydGllcyBmb3IgYnV0dG9uIHZlcnNpb25cclxuaU9TIHJlcXVpcmVzIHRoZSBidXR0b24gZWxlbWVudCBpbnN0ZWFkIG9mIGFuIGFuY2hvciB0YWcuXHJcbklmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLiovXHJcbmJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi50b2FzdC10b3AtY2VudGVyIHtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b2FzdC1ib3R0b20tY2VudGVyIHtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b2FzdC10b3AtZnVsbC13aWR0aCB7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRvYXN0LXRvcC1sZWZ0IHtcclxuICB0b3A6IDEycHg7XHJcbiAgbGVmdDogMTJweDtcclxufVxyXG5cclxuLnRvYXN0LXRvcC1yaWdodCB7XHJcbiAgdG9wOiAxMnB4O1xyXG4gIHJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4udG9hc3QtYm90dG9tLXJpZ2h0IHtcclxuICByaWdodDogMTJweDtcclxuICBib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi50b2FzdC1ib3R0b20tbGVmdCB7XHJcbiAgYm90dG9tOiAxMnB4O1xyXG4gIGxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbiN0b2FzdC1jb250YWluZXIge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG5cclxuICAjdG9hc3QtY29udGFpbmVyICoge1xyXG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gICN0b2FzdC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIG1hcmdpbjogMCAwIDZweDtcclxuICAgICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDEycHggIzk5OTk5OTtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTJweCAjOTk5OTk5O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTJweCAjOTk5OTk5O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgICAgICN0b2FzdC1jb250YWluZXIgPiBkaXYudG9hc3QtY3VzdG9tIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzAzMDMwMztcclxuICAgICAgfVxyXG5cclxuICAgICAgICAgICN0b2FzdC1jb250YWluZXIgPiBkaXYudG9hc3QtY3VzdG9tIC50b2FzdC1jbG9zZS1idXR0b24ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5OTk5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICN0b2FzdC1jb250YWluZXIgPiA6aG92ZXIge1xyXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMnB4ICMwMDAwMDA7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEycHggIzAwMDAwMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDEycHggIzAwMDAwMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgI3RvYXN0LWNvbnRhaW5lciA+IC50b2FzdC1pbmZvIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUpjRWhaY3dBQURzTUFBQTdEQWNkdnFHUUFBQUd3U1VSQlZFaEx0WmE5U2dOQkVNYzlzVXh4UmNvVUtTelNXSWhYcEZNaGhZV0ZoYUJnNHlQWWlXQ1haeEJMRVJzTFJTM0VRa0Vmd0NLZGpXSkF3U0tDZ29LQ2N1ZHY0TzVZTHJ0N0V6Z1hoaVUzLzQrYjJja213VmpKU3BLa1E2d0FpNGd3aFQrejN3UkJjRXoweWpTc2VVVHJjUnlmc0hzWG1EMEFtYkhPQzlJaThWSW1udVhCUGdsSHBRNXd3U1ZNN3NOblRHN1phNEp3RGRDanh5QWlIM255QTJtdGFUSnVmaURaNWRDYXFsSXRJTGgxTkhhdGZONXNrdmp4OVozOG02OUNnenVYbVpnVnJQSUdFNzYzSng5cUtzUm96V1l3NnhPSGRFUitubjJLa08rQmIrVVY1Q0JONldDNlF0QmdiUlZvenJhaEFibW02SHRVc2d0UEMxOXRGZHhYWllCT2ZrYm1GSjFWYUhBMVZBSGpkMHBwNzBvVFp6dlIrRVZyeDJZZ2Zkc3E2ZXU1NUJIWVI4aGxja2krbitrRVJVRkc4QnJBMEJ3amVBdjJNOFdMUUJ0Y3krU0Q2Zk5zbW5CM0FsQkxyZ1R0VlcxYzJRTjRiVldMQVRhSVM2MEoyRHU1eTFUaUpnalNCdkZWWmdUbXdDVStkQVpGb1B4R0VFczhueUhDOUJ3ZTJHdkVKdjJXWFpiMHZqZHlGVDRDeGszZS9rSXFsT0dvVkx3d1BldnBZSFQrMDBUK2hXd1hEZjRBSkFPVXFXY0RoYndBQUFBQVNVVk9SSzVDWUlJPVwiKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI3RvYXN0LWNvbnRhaW5lciA+IC50b2FzdC1lcnJvciB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFIT1NVUkJWRWhMclphL1NnTkJFTVp6aDBXS0NDbFNDS2FJWU9FRCtBQUtlUVFMRzhIV3p0TENJbUJyWWFkZ0lkWStnSUtOWWtCRlN3dTdDQW9xQ2dra29HQkkvRTI4UGRiTFptZURMZ3paemN4ODMveloyU1NYQzFqOWZyK0kxSHE5M2cyeXhINGl3TTF2a29CV0FkeENtcHpUeGZrTjJSY3laTmFIRklrU28xMCs4a2d4a1hJVVJWNUhHeFRtRnVjNzVCMlJmUWtweEhHOGFBZ2FBRmEwdEFIcVlGZlE3SXdlMnloT0RrOCtKNEM3eUFvUlRXSTN3LzRrbEdSZ1I0bE83UnBuOStndk15V3ArdXhGaDgrSCtBUmxnTjFuSnVKdVFBWXZOa0Vud0dGY2sxOEVyNHEzZWdFYy9vTyttaExkS2dSeWhkTkZpYWNDMHJsT0NiaE5WejRIOUZuQVlnREJ2VTNRSWlvWmxKRkxKdHNvSFlSRGZpWm9VeUl4cUN0UnBWbEFOcTBFVTRkQXBqcnRnZXpQRmFkNVMxOVdnamtjMGhOVm51RjRIalZBNkM3UXJTSWJ5bEIrb1plM2FIZ0JzcWxOcUtZSDQ4alh5SktNdUFiaXlWSjhLemFCM2VSYzBwZzlWd1E0bmlGcnlJNjhxaU9pM0Fiandkc2ZuQXRrMGJDalRMSktyNm1yRDlnOGlxL1MvQjgxaGd1T01sUVRuVnlHNDB3QWNqbm1nc0NORVNEcmptZTd3ZmZ0UDRQN1NQNE4zQ0paZHZ6b055R3EyYy9IV09YSkdzdlZnK1JBL2syTUMvd042STJZQTJQdDhHa0FBQUFBU1VWT1JLNUNZSUk9XCIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjdG9hc3QtY29udGFpbmVyID4gLnRvYXN0LXN1Y2Nlc3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQVlBQUFEZ2R6MzRBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBRHNTVVJCVkVoTFkyQVlCZlFNZ2YvLy8zUDgrL2V2QUlndkEvRnNJRitCYXZZRERXTUJHcm9hU01NQmlFOFZDN0FaRHJJRmFNRm5paTNBWlRqVWdzVVVXVURBOE9kQUg2aVFiUUVodzRIeUdzUEVjS0JYQklDNEFSaGV4NEc0QnNqbXdlVTFzb0lGYUdnL1d0b0ZaUklaZEV2SU1oeGtDQ2pYSVZzQVRWNmdGR0FDczRSc3cwRUdnSUlIM1FKWUpnSFNBUlFaRHJXQUIramF3emdzK1EyVU80OUQ3am5SU1JHb0VGUklMY2RtRU1XR0kwY20wSkoyUXBZQTFSRHZjbXpKRVdoQUJoRC9wcXJMMFMwQ1d1QUJLZ25Sa2k5bExzZVM3ZzJBbHF3SFdRU0tING9LTHJJTHBSR2hFUUN3MkxpUlVJYTRsd0FBQUFCSlJVNUVya0pnZ2c9PVwiKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI3RvYXN0LWNvbnRhaW5lciA+IC50b2FzdC13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUpjRWhaY3dBQURzTUFBQTdEQWNkdnFHUUFBQUdZU1VSQlZFaEw1WlN2VHNOUUZNYlhaR0lDTVlHWW1KaEFRSUpBSUNZUVBBQUNpU0RCOEFpSUNRUUpUNENxUUV3Z0p2WUFTQVFDaVppWW1KaEFJQkFUQ0FSSnkrOXJUc2xkZDhzS3UxTTArZExiMDU3djYvbGJxLzJySzBtUy9UUk5qOWNXTkFLUFlJSklJN2dJeENjUTUxY3ZxSUQrR0lFWDhBU0c0QjFiSzVnSVpGZVFmb0pkRVhPZmdYNFFBUWc3a0gyQTY1eVE4N2x5eGIyN3NnZ2tBekF1RmhiYmcxSzJrZ0NrQjFiVnd5SVI5bTJMN1BSUEloRFVJWGdHdHlLdzU3NXl6M2xUTnM2WDRKWG5qVitMS00vbTNNeWRuVGJ0T0tJanR6NlZoQ0JxNHZTbTNuY2RyRDJsazBWZ1VYU1ZLalZESlhKemlqVzFSUWRzVTdGNzdIZTh1Njhrb05aVHo4T3o1eUdhNkozSDNsWjB4WWdYQksyUXltbFdXQStSV25ZaHNrTEJ2MnZtRStoQk1DdGJBN0tYNWRyV3lSVC8ySnNxWjJJdmZCOVk0YldETk1GYkpSRm1DOUU3NFNvUzBDcXVsd2prQzArNWJwY1YxQ1o4Tk1lajRwankwVStkb0RRc0d5bzFoelZKdHRJamhRN0duQnRSRk4xVWFyVWxIOEYzeGljdCtIWTA3ckV6b1VHUGxXY2pSRlJyNC9nQ2haZ2MzWkwyZDhvQUFBQUFTVVZPUks1Q1lJST1cIikgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICN0b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWNlbnRlciA+IGRpdixcclxuICAjdG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1jZW50ZXIgPiBkaXYge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gICN0b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWZ1bGwtd2lkdGggPiBkaXYsXHJcbiAgI3RvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tZnVsbC13aWR0aCA+IGRpdiB7XHJcbiAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4udG9hc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuXHJcbi50b2FzdC1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxO1xyXG59XHJcblxyXG4udG9hc3QtZXJyb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCRDM2MkY7XHJcbn1cclxuXHJcbi50b2FzdC1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY5NkI0O1xyXG59XHJcblxyXG4udG9hc3Qtd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTQwNjtcclxufVxyXG5cclxuLnRvYXN0LXByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBEZXNpZ24qL1xyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyNDBweCkge1xyXG4gICN0b2FzdC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xyXG4gICAgICB3aWR0aDogMTFlbTtcclxuICB9XHJcblxyXG4gICN0b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgIHJpZ2h0OiAtMC4yZW07XHJcbiAgICAgIHRvcDogLTAuMmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICN0b2FzdC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xyXG4gICAgICB3aWR0aDogMThlbTtcclxuICB9XHJcblxyXG4gICN0b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgIHJpZ2h0OiAtMC4yZW07XHJcbiAgICAgIHRvcDogLTAuMmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICN0b2FzdC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gICAgICB3aWR0aDogMjVlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/shared/notification/notification.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/notification/notification.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"toast-container\" class=\"toast-top-right\" *ngFor=\"let item of notifications\">\n  <div class=\"toast {{cssClass(item) }}\" aria-live=\"polite\" style=\"display: block;\">\n      <button type=\"button\" class=\"toast-close-button\" role=\"button\" (click)=\"removeNotification(item)\">×</button>\n      <div class=\"toast-message\">\n          {{item.message}}\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared/notification/notification.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/notification/notification.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var src_app_models_notification_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/notification.model */ "./src/app/models/notification.model.ts");




var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(_notificationService) {
        this._notificationService = _notificationService;
        this.notifications = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._notificationService.getAlert().subscribe(function (alert) {
            _this.notifications = [];
            if (!alert) {
                _this.notifications = [];
                return;
            }
            _this.notifications.push(alert);
            setTimeout(function () {
                _this.notifications = _this.notifications.filter(function (x) { return x !== alert; });
            }, 4000);
        });
    };
    NotificationComponent.prototype.removeNotification = function (notification) {
        this.notifications = this.notifications.filter(function (x) { return x !== notification; });
    };
    /**Set css class for Alert -- Called from alert component**/
    NotificationComponent.prototype.cssClass = function (notification) {
        if (!notification) {
            return;
        }
        switch (notification.type) {
            case src_app_models_notification_model__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].Success:
                return 'toast-success';
            case src_app_models_notification_model__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].Error:
                return 'toast-error';
            case src_app_models_notification_model__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].Info:
                return 'toast-info';
            case src_app_models_notification_model__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].Warning:
                return 'toast-warning';
        }
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/shared/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/components/shared/notification/notification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/popup/credentials/credentials.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/shared/popup/credentials/credentials.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.toolbar {\r\n  background-color: royalblue;\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n\r\n.toolbar-spacer {\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n.container {\r\n  width: 400px;\r\n  height: 300px;\r\n}\r\n\r\n.tabgroup {\r\n  width: 800px;\r\n} */\r\n\r\n#map {\r\n  height: 400px;\r\n  width: 100%;\r\n}\r\n\r\n.controls {\r\n  height: 50px;\r\n  width: 100%;\r\n  padding: 0;\r\n  background: #009578;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n.controls .button-text {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 80%;\r\n  padding: 0 24px;\r\n  color: #fff;\r\n  height: 100%;\r\n}\r\n\r\n.controls .button-icon {\r\n  display: inline-flex;\r\n  font-size: 1.5rem;\r\n  padding: 0 24px;\r\n  width: 20%;\r\n  height: 100%;\r\n  color: #fff;\r\n  align-items: center;\r\n  background: rgba(0,0,0,0.08);\r\n}\r\n\r\n.controls .button-icon i {\r\n  padding:0 10px;\r\n}\r\n\r\n.stepper-container {\r\n  width: 800px;\r\n}\r\n\r\n.wrapper {\r\n  background-color: #fff;\r\n  width: 100%;\r\n  height: 500px;\r\n  padding: 0;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.input_group {\r\n  margin-bottom: 8px;\r\n  width: 100%;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 0;\r\n}\r\n\r\n.input_box {\r\n  width: 100%;\r\n  margin-right: 12px;\r\n  position: relative;\r\n}\r\n\r\n.input_box:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.input_box .name {\r\n  padding: 14px 10px 14px 50px;\r\n  width: 100%;\r\n  background-color: #fcfcfc;\r\n  border: 1px solid #0003;\r\n  outline: none;\r\n  letter-spacing: 1px;\r\n  transition: 0.3s;\r\n  border-radius: 3px;\r\n  color: #333;\r\n}\r\n\r\n/* .input_box .name:focus, .dob:focus {\r\n  -webkit-box-shadow: 0 0 2px 1px #21cdd3;\r\n  -moz-box-shadow: 0 0 2px 1px #21cdd3;\r\n  box-shadow: 0 0 2px 1px #21cdd3;\r\n  border: 1px solid #21cdd3;\r\n} */\r\n\r\n.input_box .icon {\r\n  width: 48px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  bottom: 0px;\r\n  color: #333;\r\n  background-color: #f1f1f1;\r\n  border-radius: 2px 0 0 2px;\r\n  transition: 0.3s;\r\n  font-size: 20px;\r\n  pointer-events: none;\r\n  border: 1px solid #00000003;\r\n  border-right: none;\r\n}\r\n\r\n.name:focus+.icon {\r\n  background-color: #21cdd3;\r\n  color: #fff;\r\n  border-right: 1px solid #21cdd3;\r\n  border: none;\r\n  transition: 1s;\r\n}\r\n\r\n/* .dob {\r\n  width: 30%;\r\n  padding: 14px;\r\n  text-align: center;\r\n  background-color: #fcfcfc;\r\n  transition: 0.3s;\r\n  outline: none;\r\n  border: 1px solid #c0bfbf;\r\n  border-radius: 3px;\r\n} */\r\n\r\n.radio {\r\n  display: none;\r\n}\r\n\r\n.input_box label {\r\n  width: 50%;\r\n  padding: 13px;\r\n  background-color: #fcfcfc;\r\n  display: inline-block;\r\n  text-align: center;\r\n  border: 1px solid #c0bfbf;\r\n}\r\n\r\n.input_box label:first-of-type {\r\n  border-top-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  border-right: none;\r\n}\r\n\r\n.input_box label:last-of-type {\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n\r\n.radio:checked+label {\r\n  background-color: #21cdd3;\r\n  color: #fff;\r\n  transition: 0.5s;\r\n}\r\n\r\n.input_box button {\r\n  width: 100%;\r\n  background-color: #21cdd3;\r\n  border: none;\r\n  color: #fff;\r\n  padding: 15px;\r\n  border-right: 4px;\r\n  font-size: 16px;\r\n  transition: all 0.3s ease;\r\n  border-radius: 8px;\r\n}\r\n\r\n.input_box button:hover {\r\n  cursor: pointer;\r\n  background-color: #05b1a3;\r\n}\r\n\r\n.text {\r\n  font-size: 15px;\r\n}\r\n\r\n.print-btn {\r\n  display: block;\r\n  text-align: center;\r\n  height: 40px;\r\n  padding-bottom: 40px;\r\n  line-height: 40px;\r\n  background-color: tomato;\r\n  color: white;\r\n  text-decoration: none;\r\n  width: 100%;\r\n}\r\n\r\n.print-btn:hover {\r\n  background-color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .button-icon i {\r\n    padding:0 10px;\r\n  }\r\n\r\n  .stepper-container {\r\n    width: 640px;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .button-icon i {\r\n    padding-left: 0;\r\n  }\r\n\r\n  .stepper-container {\r\n    width: 340px;\r\n  }\r\n\r\n\r\n  ::ng-deep .mat-horizontal-content-container {\r\n    padding:0 !important;\r\n  }\r\n\r\n  ::ng-deep .mat-horizontal-stepper-header {\r\n    box-sizing: border-box;\r\n    flex-direction: column-reverse !important;\r\n    height: auto;\r\n    padding: 24px;\r\n  }\r\n  ::ng-deep .mat-horizontal-stepper-header .mat-step-label {\r\n    padding: 0px 0px 16px !important;\r\n  }\r\n  ::ng-deep .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, ::ng-deep .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after{\r\n    top: 68px !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcG9wdXAvY3JlZGVudGlhbHMvY3JlZGVudGlhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CSTs7QUFFSjtFQUNFLGNBQWM7RUFDZCxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztBQUVEOzs7OztJQUtJOztBQUVKO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGVBQWU7Q0FDaEI7O0FBRUQ7Ozs7Ozs7OztJQVNJOztBQUVKO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtDQUNiOztBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFO0lBQ0UsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLGFBQWE7R0FDZDs7Q0FFRjs7QUFFRDtFQUNFO0lBQ0UsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsYUFBYTtHQUNkOzs7RUFHRDtJQUNFLHFCQUFxQjtHQUN0Qjs7RUFFRDtJQUNFLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLGNBQWM7R0FDZjtFQUNEO0lBQ0UsaUNBQWlDO0dBQ2xDO0VBQ0Q7SUFDRSxxQkFBcUI7R0FDdEI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL2NyZWRlbnRpYWxzL2NyZWRlbnRpYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4udG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b29sYmFyLXNwYWNlciB7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi50YWJncm91cCB7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG59ICovXHJcblxyXG4jbWFwIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udHJvbHMge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6ICMwMDk1Nzg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udHJvbHMgLmJ1dHRvbi10ZXh0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRyb2xzIC5idXR0b24taWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA4KTtcclxufVxyXG5cclxuLmNvbnRyb2xzIC5idXR0b24taWNvbiBpIHtcclxuICBwYWRkaW5nOjAgMTBweDtcclxufVxyXG5cclxuLnN0ZXBwZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5pbnB1dF9ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmlucHV0X2JveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0X2JveDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5pbnB1dF9ib3ggLm5hbWUge1xyXG4gIHBhZGRpbmc6IDE0cHggMTBweCAxNHB4IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi8qIC5pbnB1dF9ib3ggLm5hbWU6Zm9jdXMsIC5kb2I6Zm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDJweCAxcHggIzIxY2RkMztcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAycHggMXB4ICMyMWNkZDM7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggIzIxY2RkMztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjFjZGQzO1xyXG59ICovXHJcblxyXG4uaW5wdXRfYm94IC5pY29uIHtcclxuICB3aWR0aDogNDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBib3R0b206IDBweDtcclxuICBjb2xvcjogIzMzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwMztcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5uYW1lOmZvY3VzKy5pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFjZGQzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMWNkZDM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG4vKiAuZG9iIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGJmYmY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59ICovXHJcblxyXG4ucmFkaW8ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dF9ib3ggbGFiZWwge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYmZiZjtcclxufVxyXG5cclxuLmlucHV0X2JveCBsYWJlbDpmaXJzdC1vZi10eXBlIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dF9ib3ggbGFiZWw6bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5yYWRpbzpjaGVja2VkK2xhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFjZGQzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5pbnB1dF9ib3ggYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFjZGQzO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yaWdodDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmlucHV0X2JveCBidXR0b246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDViMWEzO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ucHJpbnQtYnRuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wcmludC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5idXR0b24taWNvbiBpIHtcclxuICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXBwZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2NDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuYnV0dG9uLWljb24gaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAuc3RlcHBlci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6bm90KDpmaXJzdC1jaGlsZCk6OmJlZm9yZSwgOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVye1xyXG4gICAgdG9wOiA2OHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/popup/credentials/credentials.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/popup/credentials/credentials.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card-header>\r\n  <mat-toolbar class=\"toolbar\">\r\n    <mat-card-title>Contact Information</mat-card-title>\r\n    <span class=\"toolbar-spacer\"></span>\r\n    <mat-icon (click)=\"onNoClick()\">cancel</mat-icon>\r\n  </mat-toolbar>\r\n</mat-card-header> -->\r\n\r\n<!-- <mat-tab-group [selectedIndex]=\"selectedIndex\">\r\n  <mat-tab #tab [disabled]=\"!tab.isActive\" label=\"Personal Information\">\r\n    <div class=\"container\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>First Name</label>\r\n              <input type=\"text\" [(ngModel)]=\"contactInfo.FirstName\" name=\"name\" class=\"form-control\"/>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>Last Name</label>\r\n              <input type=\"text\" [(ngModel)]=\"contactInfo.LastName\" name=\"name\" class=\"form-control\"/>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <label>Number</label>\r\n                <input type=\"text\" [(ngModel)]=\"contactInfo.Phone\" name=\"name\" class=\"form-control\"/>\r\n              </div>\r\n            </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>Email</label>\r\n              <input type=\"text\" [(ngModel)]=\"contactInfo.Email\" name=\"name\" class=\"form-control\"/>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <button class=\"btn btn-success pull-right\" (click)=\"forward(selectedIndex)\">\r\n            <mat-icon>arrow_forward</mat-icon>\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </mat-tab>\r\n\r\n  <mat-tab #tab2 [disabled]=\"!tab2.isActive\" label=\"Select Delivery Point\">\r\n    <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n\r\n    </agm-map>\r\n\r\n      <button class=\"btn btn-success pull-right\" (click)=\"confirmOrder($event , selectedIndex)\" style=\"width: 100%\">\r\n        <h4>Confirm Delivery Location <mat-icon>navigate_next</mat-icon> </h4>\r\n      </button>\r\n\r\n  </mat-tab>\r\n\r\n  <mat-tab #tab3 [disabled]=\"!tab3.isActive\" label=\"Confirm Order\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">FirstName: {{contactInfo.FirstName}}</div>\r\n    <div class=\"row\">LastName: {{contactInfo.LastName}}</div>\r\n    <div class=\"row\">Phone: {{contactInfo.Phone}}</div>\r\n    <div class=\"row\">Address: {{contactInfo.Address}}</div>\r\n    <div class=\"row\">Email: {{contactInfo.Email}}</div>\r\n    <div class=\"row\">ID: {{contactInfo.ID}}</div>\r\n\r\n    <div class=\"row\">Your Order Details have been Displayed kindly check for any errors</div>\r\n\r\n    <button class=\"btn btn-success\" (click) = \"placeOrder()\">Place Order</button>\r\n  </div>\r\n  </mat-tab>\r\n</mat-tab-group> -->\r\n\r\n\r\n<div class=\"stepper-container\" style=\"background-color: blue;\">\r\n<mat-horizontal-stepper linear #stepper>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Location</ng-template>\r\n      <div #mapContainer id=\"map\"></div>\r\n        <button class=\"controls\" mat-button matStepperNext>\r\n          <span class=\"button-text\">Next</span>\r\n          <span class=\"button-icon\" >\r\n            <i class=\"fa fa-arrow-right\"></i>\r\n          </span>\r\n        </button>\r\n  </mat-step>\r\n\r\n  <mat-step>\r\n    <ng-template matStepLabel>Billing</ng-template>\r\n    <div class=\"wrapper\">\r\n      <div class=\"col-md-12 order-md-1\">\r\n      <form #paymentForm=\"ngForm\" (submit)=\"onSubmitPayment(paymentForm)\" novalidate>\r\n        <div>\r\n          <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n            <mat-label for=\"name\">Name</mat-label>\r\n            <input matInput\r\n            name=\"name\"\r\n            ngModel\r\n            #name=\"ngModel\"\r\n            placeholder=\"Name\"\r\n            required\r\n            >\r\n            <mat-icon matSuffix>perm_identity</mat-icon>\r\n            <mat-error *ngIf=\"name.invalid\">\r\n              Name is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div>\r\n          <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n            <mat-label for=\"phone_number\">Phone Number<span class=\"text-muted\">(0XXX-XXXXXXX)</span></mat-label>\r\n            <input\r\n            matInput\r\n            id=\"number\"\r\n            placeholder=\"(03XX-XXXXXXX)\"\r\n            name=\"number\"\r\n            (focusout)=\"autoFormat(number.value)\"\r\n            ngModel\r\n            #number=\"ngModel\"\r\n            required\r\n            >\r\n            <mat-icon matSuffix>phone</mat-icon>\r\n            <mat-error *ngIf=\"number.invalid\">\r\n              Number is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div>\r\n          <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n            <mat-label for=\"email\">Email</mat-label>\r\n            <input\r\n            matInput\r\n            placeholder=\"test@test.com\"\r\n            name=\"email\"\r\n            ngModel\r\n            #email=\"ngModel\"\r\n            >\r\n            <mat-icon matSuffix>email</mat-icon>\r\n            <mat-error *ngIf=\"email.invalid\">\r\n              Email is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!-- <div>\r\n          <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n            <mat-label for=\"address\">Address</mat-label>\r\n            <input\r\n            matInput\r\n            placeholder=\"1234 Main St\"\r\n            name=\"address\"\r\n            ngModel\r\n            #address=\"ngModel\"\r\n            required\r\n            >\r\n            <mat-icon matSuffix>home</mat-icon>\r\n            <mat-error *ngIf=\"address.invalid\">\r\n              Address is required\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div> -->\r\n        <!--Information End-->\r\n\r\n        <!--Payment Details Start-->\r\n        <!-- Payment Method -->\r\n        <div class=\"input_group\">\r\n          <div class=\"input_box\">\r\n            <h4>Payment Methods</h4>\r\n            <input type=\"radio\" (click)=\"methodSelected('cod')\" name=\"pay\" class=\"radio\" id=\"bc1\" checked>\r\n            <label for=\"bc1\">\r\n              <span><i class=\"fa fa-cc-cod\"></i>Cash on Delivery</span>\r\n            </label>\r\n            <input type=\"radio\" name=\"pay\" class=\"radio\" id=\"bc2\">\r\n            <label for=\"bc2\">\r\n              <span><i class=\"fa fa-cc-visa\"></i>Credit Card (Coming Soon)</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n\r\n          <!-- Payment Method Card -->\r\n          <div class=\"c-card\" *ngIf = \"paymentMethod ==='card'\">\r\n            <div>\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n                <mat-label for=\"cc_name\">Name of Card Holder</mat-label>\r\n                <input type=\"text\"\r\n                matInput\r\n                name=\"cc_name\"\r\n                ngModel\r\n                #cc_name=\"ngModel\"\r\n                placeholder=\"Name\"\r\n                required\r\n                >\r\n                <small class=\"text-muted\">Full name as displayed on card</small>\r\n                <mat-icon matSuffix>perm_identity</mat-icon>\r\n                <mat-error *ngIf=\"cc_name.invalid\">\r\n                  Name of Card Holder is required\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <!-- Input Card Number -->\r\n            <div>\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n                <mat-label for=\"cc_number\"> Credit Card Number</mat-label>\r\n                <input type=\"tel\"\r\n                matInput\r\n                maxlength=\"16\"\r\n                name=\"cc_number\"\r\n                ngModel\r\n                #cc_number=\"ngModel\"\r\n                placeholder=\"XXXX XXXX XXXX XXXX\"\r\n                required\r\n                >\r\n                <mat-icon matSuffix>credit_card</mat-icon>\r\n                <mat-error *ngIf=\"cc_number.invalid\">\r\n                  Card number is required\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <mat-label class=\"mat-typography\">Expiry Date:</mat-label>\r\n              <div>\r\n                <mat-form-field appearance=\"outline\" class=\"col-md-2\">\r\n                  <input type=\"month\"\r\n                  matInput\r\n                  name=\"cc_month\"\r\n                  ngModel\r\n                  #cc_month=\"ngModel\"\r\n                  placeholder=\"M\"\r\n                  required\r\n                  >\r\n                  <mat-icon matSuffix>calendar_view_month</mat-icon>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"col-md-2\">\r\n                  <input type=\"tel\"\r\n                  matInput\r\n                  name=\"cc_year\"\r\n                  ngModel\r\n                  #cc_year=\"ngModel\"\r\n                  placeholder=\"Y\"\r\n                  required\r\n                  >\r\n                  <mat-icon matSuffix>calendar_view_month</mat-icon>\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\" class=\"col-md-4\">\r\n                  <input type=\"tel\"\r\n                  matInput\r\n                  name=\"cc_cvv\"\r\n                  ngModel\r\n                  #cc_cvv=\"ngModel\"\r\n                  placeholder=\"CVV\"\r\n                  required\r\n                  >\r\n                </mat-form-field>\r\n              </div>\r\n\r\n            <!-- <div class=\"input_group\">\r\n              <div class=\"input_box\">\r\n                <input type=\"tel\" name=\"\" class=\"name\" placeholder=\"Card CVC 632\" required>\r\n                <i class=\"fa fa-user icon\"></i>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"input_group\">\r\n              <div class=\"input_box\">\r\n                <div class=\"input_box\">\r\n                      <input type=\"number\" placeholder=\"Exp Month\" required class=\"name\">\r\n                      <i class=\"fa fa-calendar icon\" aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"input_box\">\r\n                  <input type=\"number\" placeholder=\"Exp Year\" required class=\"name\">\r\n                  <i class=\"fa fa-calendar-o icon\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div>\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n                <mat-label for=\"amount\"> Total Amount</mat-label>\r\n                <input type=\"tel\"\r\n                matInput\r\n                name=\"amount\"\r\n                ngModel\r\n                #amount=\"ngModel\"\r\n                placeholder=\"Your Total Amount\"\r\n                required\r\n                >\r\n                <mat-icon matSuffix>perm_identity</mat-icon>\r\n                <mat-error *ngIf=\"amount.invalid\">\r\n                  Amount is required\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-- <div class=\"input_box\">\r\n              <input type=\"number\" placeholder=\"Enter Amount\" required class=\"name\">\r\n              <i class=\"fa fa-money icon\" aria-hidden=\"true\"></i>\r\n            </div> -->\r\n          <!--Payment Details End-->\r\n          <div class=\"input_group\">\r\n            <div class=\"input_box\">\r\n                <button type=\"submit\" [disabled]=\"paymentForm.invalid\">PAY NOW</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"input_group\" *ngIf = \"paymentMethod ==='cod'\">\r\n          <div class=\"input_box\">\r\n              <button type=\"submit\">Place Order</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n  </div>\r\n  <!-- PROMO CODE ADDITION -->\r\n  <div class=\"col-md-12 order-md-2\">\r\n    <h4 class=\"d-flex justify-content-between align-items-center\">\r\n      <span class=\"text-muted\">Your cart</span>\r\n      <span class=\"badge badge-secondary badge-pill\">{{customerCart.cart.totalQuantity}}</span>\r\n    </h4>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let product of customerCart.cart.products\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n        <div>\r\n          <h6 class=\"my-0\">{{product.item.name}}</h6>\r\n          <small class=\"text-muted\">Quantity: {{product.item.quantity}}</small>\r\n        </div>\r\n        <span class=\"text-muted\">{{product.price | currency: 'PKR'}}</span>\r\n      </li>\r\n      <!-- <li class=\"list-group-item d-flex justify-content-between bg-light\">\r\n        <div class=\"text-success\">\r\n          <h6 class=\"my-0\">Promo code</h6>\r\n          <small>EXAMPLECODE</small>\r\n        </div>\r\n        <span class=\"text-success\">0 PKR</span>\r\n      </li> -->\r\n      <li class=\"list-group-item d-flex justify-content-between\">\r\n        <span>Total (PKR)</span>\r\n        <strong>{{customerCart.cart.totalPrice}}</strong>\r\n      </li>\r\n    </ul>\r\n    <!-- <form #promoForm=\"ngForm\" (submit)=\"onSubmitPromo(promoForm)\" class=\"card p-2\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\r\n        <div class=\"input-group-append\">\r\n          <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\r\n        </div>\r\n      </div>\r\n    </form> -->\r\n  </div>\r\n</div>\r\n\r\n    <!-- <div>\r\n      <div class=\"col-md-8 order-md-1\">\r\n        <form style=\"padding-bottom:20px;\" #paymentForm=\"ngForm\" (submit)=\"onSubmitPayment(paymentForm)\" novalidate=\"\">\r\n          <div>\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n              <mat-label for=\"name\">Name</mat-label>\r\n              <input matInput name=\"name\" ngModel #name=\"ngModel\" placeholder=\"Name\" required >\r\n              <mat-icon matSuffix>perm_identity</mat-icon>\r\n              <mat-error *ngIf=\"name.invalid\">\r\n                Name is required\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n              <mat-label for=\"phone_number\">Phone Number<span class=\"text-muted\">(0XXX-XXXXXXX)</span></mat-label>\r\n              <input\r\n              matInput\r\n              id=\"number\"\r\n              placeholder=\"(03XX-XXXXXXX)\"\r\n              name=\"number\"\r\n              (focusout)=\"autoFormat(number.value)\"\r\n              ngModel\r\n              #number=\"ngModel\"\r\n              required\r\n              >\r\n              <mat-icon matSuffix>phone</mat-icon>\r\n              <mat-error *ngIf=\"number.invalid\">\r\n                Number is required\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div>\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n              <mat-label for=\"address\">Address</mat-label>\r\n              <input matInput placeholder=\"1234 Main St\" required name=\"address\" ngModel #address=\"ngModel\">\r\n              <mat-icon matSuffix>home</mat-icon>\r\n              <mat-error *ngIf=\"address.invalid\">\r\n                Address is required\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-4\">\r\n              <mat-label for=\"country\">Country</mat-label>\r\n              <select matNativeControl name=\"country\" ngModel #country=\"ngModel\" required>\r\n                <option value=\"\">Choose...</option>\r\n                <option>Pakistan</option>\r\n              </select>\r\n              <mat-error *ngIf=\"country.invalid\">\r\n                Select a valid Country\r\n              </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-4\">\r\n              <mat-label for=\"country\">State</mat-label>\r\n              <select matNativeControl name=\"state\" ngModel #state=\"ngModel\" required>\r\n                <option value=\"\">Choose...</option>\r\n                <option>Punjab</option>\r\n              </select>\r\n              <mat-error *ngIf=\"state.invalid\">\r\n                Select a valid State\r\n              </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-3\">\r\n              <mat-label for=\"country\">Zip</mat-label>\r\n              <input matInput placeholder=\".e.g. 54000\" name=\"zip\" ngModel #zip=\"ngModel\" required>\r\n              <mat-icon matSuffix>perm_identity</mat-icon>\r\n              <mat-error *ngIf=\"zip.invalid\">\r\n                Enter a Valid Zip Code\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <h4>\r\n              Payment <img src=\"https://www.merchantequip.com/image/?logos=v|m&height=32\" alt=\"Merchant Equipment Store Credit Card Logos\"/>\r\n            </h4>\r\n            <mat-radio-group name=\"radiogroup\" aria-label=\"Select an option\" required>\r\n              <mat-radio-button (change)=\"radioInput($event)\" class=\"col-md-3\" value=\"C\">Debit/Credit Card</mat-radio-button>\r\n              <mat-radio-button (change)=\"radioInput($event)\" class=\"col-md-3\" value=\"D\">Jazz Cash</mat-radio-button>\r\n              <mat-radio-button (change)=\"radioInput($event)\" class=\"col-md-3\" value=\"P\">Cash on Delivery</mat-radio-button>\r\n            </mat-radio-group>\r\n            <div class=\"col-md-12\" *ngIf=\"showCardinput\">\r\n              <div>\r\n                <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n                  <mat-label for=\"address\">Card Number</mat-label>\r\n                  <input matInput maxlength=\"16\" name=\"cc_number\" ngModel #cc_number=\"ngModel\" placeholder=\"\" required>\r\n                  <mat-icon matSuffix>perm_identity</mat-icon>\r\n                  <mat-error *ngIf=\"cc_number.invalid\">\r\n                    Card number is required\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <div>\r\n                <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n                  <mat-label for=\"address\">Name of Card Holder</mat-label>\r\n                  <input name=\"cc_name\" ngModel #cc_name=\"ngModel\" matInput placeholder=\"\" required>\r\n                  <small class=\"text-muted\">Full name as displayed on card</small>\r\n                  <mat-icon matSuffix>perm_identity</mat-icon>\r\n                  <mat-error *ngIf=\"cc_name.invalid\">\r\n                    Name of Card Holder is required\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <mat-label class=\"mat-typography\">Expiry Date</mat-label>\r\n              <div>\r\n                <mat-form-field appearance=\"outline\" class=\"col-md-2\">\r\n                  <input matInput name=\"cc_month\" ngModel #cc_month=\"ngModel\" placeholder=\"M\" required>\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\" class=\"col-md-2\">\r\n                  <input matInput name=\"cc_year\" ngModel #cc_year=\"ngModel\" placeholder=\"Y\" required>\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\" class=\"col-md-2\">\r\n                  <input matInput name=\"cc_cvv\" ngModel #cc_cvv=\"ngModel\" placeholder=\"CVV\" required>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"!paymentForm.valid\" class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Place Order</button>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 order-md-2\">\r\n        <h4 class=\"d-flex justify-content-between align-items-center\">\r\n          <span class=\"text-muted\">Your cart</span>\r\n          <span class=\"badge badge-secondary badge-pill\">{{data.cart.totalQuantity}}</span>\r\n        </h4>\r\n        <ul class=\"list-group\">\r\n          <li *ngFor=\"let product of data.cart.products\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n            <div>\r\n              <h6 class=\"my-0\">{{product.item.name}}</h6>\r\n              <small class=\"text-muted\">Quantity: {{product.qty}}</small>\r\n            </div>\r\n            <span class=\"text-muted\">{{product.price | currency: 'PKR'}}</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between bg-light\">\r\n            <div class=\"text-success\">\r\n              <h6 class=\"my-0\">Promo code</h6>\r\n              <small>EXAMPLECODE</small>\r\n            </div>\r\n            <span class=\"text-success\">0 PKR</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between\">\r\n            <span>Total (PKR)</span>\r\n            <strong>{{data.cart.totalPrice}}</strong>\r\n          </li>\r\n        </ul>\r\n        <form #promoForm=\"ngForm\" (submit)=\"onSubmitPromo(promoForm)\" class=\"card p-2\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\r\n            <div class=\"input-group-append\">\r\n              <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div> -->\r\n  </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Recipt</ng-template>\r\n    <app-notification></app-notification>\r\n          <div class=\"recipt\">\r\n              <div class=\"row mb-4\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"text\"><h6 class=\"mb-3\">To:</h6>\r\n                        <strong>Name: {{contactInfo.FullName}}</strong>\r\n                      </div>\r\n                      <div class=\"text\">Address: 43-190 Mikolow, Poland</div>\r\n                      <div class=\"text\">Email: {{contactInfo.Email}}</div>\r\n                      <div class=\"text\">Phone: {{contactInfo.Phone_Number}}</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"table-responsive-sm\">\r\n                  <table class=\"table table-striped\">\r\n                      <thead>\r\n                          <tr class=\"text\">\r\n                              <th class=\"center\">#</th>\r\n                              <th>Item</th>\r\n                              <th>Description</th>\r\n                              <th class=\"right\">Unit Cost</th>\r\n                              <th class=\"center\">Qty</th>\r\n                              <th class=\"right\">Total</th>\r\n                          </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                          <tr class=\"text\" *ngFor=\"let product of customerCart.cart.products; let i=index;\">\r\n                              <td class=\"center\">{{i + 1}}</td>\r\n                              <td class=\"left strong\">{{product.item.name}}</td>\r\n                              <td class=\"left\">{{product.item.category}}</td>\r\n                              <td class=\"right\">{{product.item.price | currency:'PKR'}}</td>\r\n                              <td class=\"center\">{{product.quantity}}</td>\r\n                              <td class=\"right\">{{product.price}}</td>\r\n                          </tr>\r\n                      </tbody>\r\n                  </table>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-4 col-sm-5\">\r\n                  </div>\r\n                  <div class=\"col-lg-4 col-sm-5 ml-auto\">\r\n                      <table class=\"table table-clear\">\r\n                          <tbody>\r\n                              <tr class=\"text\">\r\n                                  <td class=\"left\">\r\n                                      <strong>Subtotal</strong>\r\n                                  </td>\r\n                                  <td class=\"right\">{{customerCart.cart.totalPrice}}</td>\r\n                              </tr>\r\n                              <tr class=\"text\">\r\n                                  <td class=\"left\">\r\n                                      <strong>Delivery Charges</strong>\r\n                                  </td>\r\n                                  <td class=\"right\">{{150}}</td>\r\n                              </tr>\r\n                              <tr class=\"text\">\r\n                                  <td class=\"left\">\r\n                                      <strong>Discount (0%)</strong>\r\n                                  </td>\r\n                                  <td class=\"right\">{{0}}</td>\r\n                              </tr>\r\n                              <tr class=\"text\">\r\n                                  <td class=\"left\">\r\n                                      <strong>Total</strong>\r\n                                  </td>\r\n                                  <td class=\"right\">\r\n                                      <strong>{{(customerCart.cart.totalPrice + 150) | currency:'PKR'}}</strong>\r\n                                  </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n  <a [routerLink]=\"['']\" (click) = \"printClicked()\" class=\"print-btn\">Print</a>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shared/popup/credentials/credentials.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/popup/credentials/credentials.component.ts ***!
  \******************************************************************************/
/*! exports provided: CredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsComponent", function() { return CredentialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");





var CredentialsComponent = /** @class */ (function () {
    function CredentialsComponent(orderService, notification, customerCart, dialogRef) {
        this.orderService = orderService;
        this.notification = notification;
        this.customerCart = customerCart;
        this.dialogRef = dialogRef;
        this.options = {
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
        this.contactInfo = {
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
        this.showCardinput = false;
        this.paymentMethod = 'cod';
        this.submitted = false;
    }
    CredentialsComponent.prototype.ngOnInit = function () {
    };
    CredentialsComponent.prototype.ngAfterViewInit = function () {
        this.mapInitializer();
    };
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
    CredentialsComponent.prototype.onSubmitPayment = function (paymentForm) {
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
        }
        else {
            alert('Customer Information Is Required');
            this.notification.error('invalid information added in the form', false);
            return { error: 'invalid information added in the form ' };
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
    };
    CredentialsComponent.prototype.printClicked = function () {
        this.dialogRef.close();
    };
    CredentialsComponent.prototype.onSubmitPromo = function (promoForm) {
        console.log('data');
    };
    CredentialsComponent.prototype.radioInput = function (radio) {
        this.showCardinput = true;
    };
    // placeOrder() {
    //   console.log('Order Placed ' + this.contactInfo);
    //   this.dialogref.close();
    //   this.router.navigateByUrl('/');
    // }
    CredentialsComponent.prototype.apiCall = function (index) {
        var _this = this;
        this.orderService.createOrder(this.contactInfo, this.customerCart.cart).subscribe(function (result1) {
            if (result1) {
                _this.notification.success('Your Order has been Successfully created.', false);
            }
        });
        this.stepperHandler(index + 1);
    };
    CredentialsComponent.prototype.stepperHandler = function (index) {
        this.stepper.selectedIndex = index;
    };
    // GOOGLE MAPS IMPLEMENTATION
    CredentialsComponent.prototype.mapInitializer = function () {
        this.map = new google.maps.Map(this.gmap.nativeElement, this.options);
        this.getcurrentLocation();
    };
    CredentialsComponent.prototype.getcurrentLocation = function () {
        if (navigator.geolocation) {
            var self_1 = this;
            navigator.geolocation.getCurrentPosition(function (response) {
                self_1.showPosition(response, self_1);
            }, function () {
                alert('Unable to get GPS location');
            }, {
                enableHighAccuracy: true
            });
        }
        else {
            alert('Geolocation is not supported by the browser');
        }
    };
    CredentialsComponent.prototype.showPosition = function (position, self) {
        var _this = this;
        var icon = {
            url: '../../../../../assets/images/marker.png',
            scaledSize: new google.maps.Size(60, 60),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
        };
        var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
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
        google.maps.event.addListener(self.map, 'dragstart', function () {
            myLatLng = new google.maps.LatLng(self.marker.getPosition().lat(), self.marker.getPosition().lng());
            self.marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
            self.marker.setPosition(myLatLng);
        });
        google.maps.event.addListener(self.map, 'drag', function () {
            myLatLng = new google.maps.LatLng(self.map.getCenter().lat(), self.map.getCenter().lng());
            self.marker.setPosition(myLatLng);
        });
        google.maps.event.addListener(self.map, 'dragend', function (result, status) {
            myLatLng = new google.maps.LatLng(self.marker.getPosition().lat(), self.marker.getPosition().lng());
            self.marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
            self.marker.setPosition(myLatLng);
            _this.latitude = myLatLng.lat();
            _this.longitude = myLatLng.lng();
        });
        // google.maps.event.addListener(self.map, 'bounds_changed', function(result) {
        //   self.map.panTo(myLatLng);
        //   console.log(self.marker.getPosition());
        //   self.marker.setPosition(myLatLng);
        // });
        google.maps.event.addListener(self.map, 'zoom_changed', function () {
            // self.marker.setPosition(myLatLng);
            self.map.panTo(myLatLng);
        });
    };
    CredentialsComponent.prototype.autoFormat = function (value) {
        var cleaned = ('' + value).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{4})(\d{7})$/);
        if (match) {
            document.getElementById('number').value = '(' + match[1] + ') - ' + match[2];
        }
    };
    CredentialsComponent.prototype.methodSelected = function (value) {
        if (value === 'card') {
            this.paymentMethod = 'card';
        }
        if (value === 'cod') {
            this.paymentMethod = 'cod';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CredentialsComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapContainer', { read: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CredentialsComponent.prototype, "gmap", void 0);
    CredentialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credentials',
            template: __webpack_require__(/*! ./credentials.component.html */ "./src/app/components/shared/popup/credentials/credentials.component.html"),
            styles: [__webpack_require__(/*! ./credentials.component.css */ "./src/app/components/shared/popup/credentials/credentials.component.css")],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], CredentialsComponent);
    return CredentialsComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/popup/product/product.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/shared/popup/product/product.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.popup-view {\r\n  z-index: 2;\r\n  background: rgba(255,255,255,0.3);\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-card {\r\n  position: absolute;\r\n  display: flex;\r\n  width: 800px;\r\n  height: auto;\r\n  margin: 20px;\r\n}\r\n\r\n.popup-view .popup-card .product-img {\r\n  z-index: 2;\r\n  background: #1d212b;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 450px;\r\n  height: 350px;\r\n  transform: translateY(25px);\r\n  border-top-left-radius: 10px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.popup-view .popup-card .product-img img {\r\n  z-index: 2;\r\n  position: relative;\r\n  width: 400px;\r\n  height: 300px;\r\n  left: -50px;\r\n}\r\n\r\n.popup-view .popup-card .close-btn {\r\n  z-index: 3;\r\n  color: rgba(216,18,18);\r\n  position: absolute;\r\n  right: 0;\r\n  font-size: 20px;\r\n  margin: 20px;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.info {\r\n  z-index: 2;\r\n  background: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 55%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  padding: 40px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.info h2 {\r\n  font: 40px;\r\n  line-height: 20px;\r\n  margin: 10px;\r\n}\r\n\r\n.info h2 span {\r\n  font-size: 15px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.info p {\r\n  font-size: 15px;\r\n  margin: 10px;\r\n}\r\n\r\n.info .price {\r\n  font-size: 40px;\r\n  font-weight: 600;\r\n  margin: 10px;\r\n\r\n}\r\n\r\n.info .add-to-cart-btn {\r\n  color: #fff;\r\n  background: tomato;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  margin: 10px auto;\r\n  padding: 10px 50px;\r\n  outline: none;\r\n  border-radius: 20px;\r\n}\r\n\r\n.info .add-to-cart-btn:hover {\r\n  background-color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .popup-view {\r\n    margin: 10px 10px 10px 10px;\r\n    overflow: scroll;\r\n  }\r\n  .popup-card {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-direction: column;\r\n    overflow: scroll;\r\n  }\r\n\r\n  .popup-view .popup-card .product-img {\r\n    z-index: 3;\r\n    width: 100%;\r\n    height: 30%;\r\n    border-bottom-left-radius: 0;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n  }\r\n\r\n  .popup-view .popup-card .product-img img {\r\n    left: initial;\r\n    transform: translateY(0px);\r\n    height: 100%;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .popup-card .info {\r\n    width: 100%;\r\n    height: auto;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n  .info h2 {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .info h2 span {\r\n    font-size: 10px;\r\n  }\r\n  .info p {\r\n    font-size: 13px;\r\n  }\r\n  .info .price {\r\n    margin: 0px;\r\n    font-size: 20px;\r\n  }\r\n  .info .add-to-cart-btn {\r\n    margin: 5px auto;\r\n    padding: 5px 40px;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .popup-view .popup-card .close-btn {\r\n    z-index: 4;\r\n    position: absolute;\r\n    color: rgb(216, 18, 18);\r\n  }\r\n}\r\n\r\n@media (max-width: 480px){\r\n  .popup-view {\r\n    margin: 10px 10px 10px 10px;\r\n    overflow: scroll;\r\n  }\r\n  .popup-card {\r\n    width: 100%;\r\n    height: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    overflow: scroll;\r\n  }\r\n\r\n  .popup-view .popup-card .product-img {\r\n    z-index: 3;\r\n    width: 100%;\r\n    height: 30%;\r\n    border-bottom-left-radius: 0;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n  }\r\n\r\n  .popup-view .popup-card .product-img img {\r\n    left: initial;\r\n    transform: translateY(0px);\r\n    height: 100%;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .popup-card .info {\r\n    width: 100%;\r\n    height: auto;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n  .info h2 {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .info h2 span {\r\n    font-size: 10px;\r\n  }\r\n  .info p {\r\n    font-size: 13px;\r\n  }\r\n  .info .price {\r\n    margin: 0px;\r\n    font-size: 20px;\r\n  }\r\n  .info .add-to-cart-btn {\r\n    margin: 5px auto;\r\n    padding: 5px 40px;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .popup-view .popup-card .close-btn {\r\n    z-index: 4;\r\n    position: absolute;\r\n    color: rgb(216,18,18);\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxPQUFPO0VBQ1AsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtDQUNkOztBQUVEO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGdDQUFnQztDQUNqQzs7QUFDRDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTs7Q0FFZDs7QUFFRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0NBQ2pCOztBQUdEO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLDhCQUE4QjtHQUMvQjs7RUFFRDtJQUNFLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtHQUM1QjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix3QkFBd0I7R0FDekI7Q0FDRjs7QUFFRDtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLDhCQUE4QjtHQUMvQjs7RUFFRDtJQUNFLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtHQUM1QjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixzQkFBc0I7R0FDdkI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wb3B1cC12aWV3IHtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucG9wdXAtY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5wb3B1cC12aWV3IC5wb3B1cC1jYXJkIC5wcm9kdWN0LWltZyB7XHJcbiAgei1pbmRleDogMjtcclxuICBiYWNrZ3JvdW5kOiAjMWQyMTJiO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxufVxyXG4ucG9wdXAtdmlldyAucG9wdXAtY2FyZCAucHJvZHVjdC1pbWcgaW1nIHtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBsZWZ0OiAtNTBweDtcclxufVxyXG4ucG9wdXAtdmlldyAucG9wdXAtY2FyZCAuY2xvc2UtYnRuIHtcclxuICB6LWluZGV4OiAzO1xyXG4gIGNvbG9yOiByZ2JhKDIxNiwxOCwxOCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA1NSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uaW5mbyBoMiB7XHJcbiAgZm9udDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5pbmZvIGgyIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5pbmZvIHAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5pbmZvIC5wcmljZSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmluZm8gLmFkZC10by1jYXJ0LWJ0biB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogdG9tYXRvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5pbmZvIC5hZGQtdG8tY2FydC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAucG9wdXAtdmlldyB7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuICAucG9wdXAtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgLnBvcHVwLXZpZXcgLnBvcHVwLWNhcmQgLnByb2R1Y3QtaW1nIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5wb3B1cC12aWV3IC5wb3B1cC1jYXJkIC5wcm9kdWN0LWltZyBpbWcge1xyXG4gICAgbGVmdDogaW5pdGlhbDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBvcHVwLWNhcmQgLmluZm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5pbmZvIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gIC5pbmZvIGgyIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuaW5mbyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmluZm8gLnByaWNlIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAuaW5mbyAuYWRkLXRvLWNhcnQtYnRuIHtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHggNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5wb3B1cC12aWV3IC5wb3B1cC1jYXJkIC5jbG9zZS1idG4ge1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiByZ2IoMjE2LCAxOCwgMTgpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICAucG9wdXAtdmlldyB7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuICAucG9wdXAtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgLnBvcHVwLXZpZXcgLnBvcHVwLWNhcmQgLnByb2R1Y3QtaW1nIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5wb3B1cC12aWV3IC5wb3B1cC1jYXJkIC5wcm9kdWN0LWltZyBpbWcge1xyXG4gICAgbGVmdDogaW5pdGlhbDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBvcHVwLWNhcmQgLmluZm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5pbmZvIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gIC5pbmZvIGgyIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuaW5mbyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmluZm8gLnByaWNlIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAuaW5mbyAuYWRkLXRvLWNhcnQtYnRuIHtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHggNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5wb3B1cC12aWV3IC5wb3B1cC1jYXJkIC5jbG9zZS1idG4ge1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiByZ2IoMjE2LDE4LDE4KTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/popup/product/product.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/popup/product/product.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class= \"container\">\n  <div class=\"zoomContainer\">\n    <img #myimage class=\"mainImage\" src={{images[0]}} (mouseenter)=\"in($event)\"(mouseout)=\"out()\">\n    <div class=\"caption-container\"></div>\n    <div class=\"row thumbnails\">\n      <div class=\"column\" (click)=\"imageSet($event.target)\" *ngFor=\"let image of images\">\n         [src]=\"image\"\n        <img class=\"demo\" [src]=\"image\">\n      </div>\n    </div>\n      <div #myresult class=\"img-zoom-result\"></div>\n  </div>\n  <div class=\"description\">\n    <h1>{{productDetails.name}}</h1>\n    <div><app-rating (ratingClick)='ratingComponentClick($event)'></app-rating></div>\n\n    <p class=\"text-muted text-uppercase small\">{{productDetails.category}}</p>\n    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui incidunt similique quaerat nece\n      ssitatibus exercitationem tempore maxime, dolor aliquam amet laudantium consequatur commod\n    </p>\n    <span>{{productDetails.price | currency:'PKR'}}</span>\n    <div>\n      <button class=\"buy\">Buy Now</button>\n      <button class=\"cart\" (click)=\"onAddToCart(productDetails)\">Add To Cart</button>\n    </div>\n  </div>\n</div> -->\n<div mat-dialog-content class=\"popup-view\">\n  <div class=\"popup-card\">\n    <button mat-icon-button class=\"close-btn\" mat-dialog-close>\n      <mat-icon>\n        close\n        </mat-icon>\n    </button>\n    <div class=\"product-img\">\n      <img #myimage src={{images[0]}}>\n    </div>\n    <div class=\"info\">\n      <h2>{{productDetails.name}}<br><span>{{productDetails.category}}</span></h2>\n      <p>\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat necessitatibus\n        laboriosam odit modi fugit eligendi corporis unde iure nostrum accusamus repellat eum dicta\n        illo praesentium, ipsum aliquam ipsam sunt molestias expedita perferendis enim perspiciatis magnam\n        pariatur? Dignissimos distinctio explicabo cum!\n      </p>\n      <span class=\"price\">{{productDetails.price | currency: 'PKR'}}</span>\n        <button class=\"add-to-cart-btn\" [mat-dialog-close] = \"productDetails\">Add to cart</button>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"shopping-cart\">\n  <div class=\"item\">\n    <div class=\"image\">\n      <img #myimage class=\"mainImage\" src={{images[0]}} (mouseenter)=\"in($event)\"(mouseout)=\"out()\">\n      <div class=\"caption-container\"></div>\n    <div class=\"row thumbnails\">\n      <div class=\"column\" (click)=\"imageSet($event.target)\" *ngFor=\"let image of images\">\n         [src]=\"image\"\n        <img class=\"demo\" [src]=\"image\">\n      </div>\n    </div>\n      <div #myresult class=\"img-zoom-result\"></div>\n    </div>\n    <div class=\"description\">\n      <span>{{productDetails.name}}</span>\n      <span><app-rating (ratingClick)='ratingComponentClick($event)'></app-rating></span>\n      <span>{{productDetails.category}}</span>\n      <span> {{productDetails.price | currency:'PKR'}}</span>\n\n    </div>\n\n    <div class=\"buttons\">\n      <span class=\"delete-btn fa fa-times\">Buy Now</span>\n      <span class=\"like-btn\">Add To Cart</span>\n    </div> -->\n\n    <!-- <div class=\"quantity\">\n      <button class=\"plus-btn\" type=\"button\" name=\"button\">\n        <img src=\"plus.svg\" alt=\"+\" />\n      </button>\n      <input type=\"text\" name=\"name\" value={{cartitem.item.qty}}>\n      <button class=\"minus-btn\" type=\"button\" name=\"button\">\n        <img src=\"minus.svg\" alt=\"-\" />\n      </button>\n    </div> -->\n\n    <!-- <div class=\"total-price\"></div>\n  </div>\n</div> -->\n\n<!--\n<div class=\"container mb-5 mt-5\">\n  <div class=\"row\">\n    <div class=\"clo-md-4\">\n      <div class=\"car mt-3\">\n        <div class=\"product1 align-item-center p2 text-center\">\n          <img src=\"\" alt=\"\" class=\"rounded\">\n          <h5>title</h5>\n          <div class=\"mt-3 info\">\n            <span class=\"text1 d-block\">Lorem ipsum dolor sit amet.</span>\n            <span class=\"text1\">Lorem, ipsum dolor.</span>\n          </div>\n          <div class=\"cost mt-3 text-dark\">\n            <span>$69.99</span>\n            <div class=\"star mt-3 align-item-center\">\n              <i class=\"fa fa-star\"></i>\n              <i class=\"fa fa-star\"></i>\n              <i class=\"fa fa-star\"></i>\n              <i class=\"fa fa-star\"></i>\n              <i class=\"fa fa-star\"></i>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-3 shoe text-center text-white mt-3 cursor\">\n          <span class=\"text-uppercase\">add to cart</span>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div> -->\n\n<!-- <div class=\"box\">\n  <div class=\"exzoom\" id=\"exzoom\"> -->\n    <!-- Images -->\n    <!-- <div class=\"exzoom_img_box\">\n      <ul class=\"exzoom_img_ul\">\n        <li *ngFor=\"let image of productImagesFinal; let i = index\">\n            <img [src]=\"image\" alt=\"Avatar\" style=\"width:40px; height:40px;\"/>\n    </li>\n      </ul>\n    </div> -->\n    <!-- <a href=\"https://www.jqueryscript.net/tags.php?/Thumbnail/\">Thumbnail</a> Nav-->\n    <!-- <div class=\"exzoom_nav\"></div> -->\n    <!-- Nav Buttons -->\n    <!-- <p class=\"exzoom_btn\">\n      <a href=\"javascript:void(0);\" class=\"exzoom_prev_btn\"> < </a>\n      <a href=\"javascript:void(0);\" class=\"exzoom_next_btn\"> > </a>\n    </p>\n  </div>\n</div> -->\n<!-- <div *ngFor=\"let image of productImagesFinal; let i = index\">\n<div class=\"image-wrapper\">\n  <img\n   (touchstart)=\"openZoom($event, true)\"\n   (touchend)=\"openZoom($event, false)\" touchmove)=\"positionZoom($event)\" [src]=\"image\"\n  />\n </div>\n <image-zoom *ngIf=\"showZoom\" [src]=\"image\" [xPos]=\"xPos\" [yPos]=\"yPos\"></image-zoom>\n</div> -->\n<!-- <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" id=\"samples\" *ngFor=\"let image of productImagesFinal; let i = index\">\n          <img id=\"zoom1\" width=\"100px\" height=\"250px\" (mousedown)=\"enter(i)\" (mousemove)=\"zoomIn($event)\" (mouseout)=\"zoomOut()\" [src]=\"image\">\n      </div>\n      <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n        <div id=\"preview\"></div>\n      </div>\n    </div>\n  </div> -->\n\n  <!-- <div class=\"img-zoom-container\" (mousemove)=\"imageZoom()\" *ngFor=\"let image of productImagesFinal; let i = index\">\n      <img id=\"myimage\"  [src]=\"image\" width=\"300\" height=\"240\" alt=\"Girl\">\n      <div id=\"myresult\" class=\"img-zoom-result\"></div>\n    </div> -->\n\n<!-- <div *ngFor=\"let image of productImagesFinal; let i = index\">\n    <img [src]=\"image\" alt=\"Avatar\" style=\"width:40px; height:40px;\"/>\n</div> -->\n\n<!-- <div class=\"img-magnifier-container\" >\n    <img id=\"myimage\" (mouseover)=\"magnify(myimage,3)\" [src]=\"productImagesFinal[0]\" width=\"300\" height=\"200\" alt=\"Girl\">\n  </div> -->\n<!--\n  <div class=\"col-sm-2\">\n    <div class=\"row\" *ngFor=\"let image of images; let i = index\">\n        <img [src]=\"image\" alt=\"image\" class=\"responsive\">\n    </div>\n\n</div>\n\n<div class=\"container\">\n  <img id=\"displayImage\" alt=\"image\" (click) = \"onDisplayImageClick($event)\">\n</div> -->\n\n\n <!-- Container for the image gallery -->\n <!-- <div class=\"container\">\n  <div id=\"left\" class=\"mySlides\">\n    src={{images[0]}}\n    <img #myimage src=\"../../../assets/images/i1.jpg\" class=\"responsive-image\" width=\"300\" height=\"240\"(mouseenter)=\"in($event)\"(mouseout)=\"out()\">\n    <div class=\"caption-container\">\n      <p id=\"caption\"></p>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"column\" (click)=\"imageSet($event.target)\" *ngFor=\"let image of [1,2,3,4,5,6]\">\n        [src]=\"image\"\n        <img class=\"demo\" src=\"../../../assets/images/i2.jpg\">\n      </div>\n    </div>\n  </div>\n  <div #myresult id=\"center\" class=\"img-zoom-result\"></div>\n  <div id=\"right\" class=\"productDetails\">\n    <form #f=\"ngForm\" (submit)=\"onAddToCart(productDetails._id)\">\n      {{productDetails}}\n    </form>\n  </div>\n</div> -->\n\n<!-- <mat-dialog-content>\n  <div class=\"originalImage\">\n     src={{images[0]}}\n    <img #myimage src=\"../../../assets/images/i1.jpg\" class=\"responsive-image\" width=\"300\" height=\"240\"(mouseenter)=\"in($event)\"(mouseout)=\"out()\">\n    <div class=\"caption-container\">\n      <p id=\"caption\"></p>\n    </div>\n    <div class=\"row\">\n      <div class=\"column\" (click)=\"imageSet($event.target)\" *ngFor=\"let image of [1,2,3,4,5,6]\">\n         [src]=\"image\"\n        <img class=\"demo\" src=\"../../../assets/images/i2.jpg\">\n      </div>\n    </div>\n  </div>\n\n  <div #myresult class=\"img-zoom-result\"></div>\n\n  <div class=\"productDetails\">\n    <form #f=\"ngForm\" (submit)=\"onAddToCart(productDetails._id)\">\n      {{productDetails}}\n    </form>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions> -->\n\n    <!-- <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div id=\"mdb-lightbox-ui\"></div>\n        <div class=\"mdb-lightbox\">\n          <div class=\"row product-gallery mx-1\">\n            <div class=\"col-12\">\n              <figure text-align=\"\" class=\"view overlay rounded z-depth-1 main-img\" style=\"border: 2px solid blackx;\">\n                <a href=\"\">\n                    <img #myimage src=\"../../../assets/images/i1.jpg\" class=\"img-fluid z-depth-1 product-image\" width=\"300\" height=\"240\"(mouseenter)=\"in($event)\"(mouseout)=\"out()\">\n                </a>\n              </figure>\n              <div class=\"caption-container\">\n                <p id=\"caption\"></p>\n              </div>\n              <div #myresult class=\"img-zoom-result\"></div>\n            </div>\n            <div class=\"col-12\">\n              <div class=\"row\">\n                  <div (click)=\"imageSet($event.target)\" *ngFor=\"let image of [1,2,3,4,5,6]\" class=\"view overlay rounded z-depth-1 gallery-item\">\n                      <img class=\"demo img-fluid\" src=\"../../../assets/images/i2.jpg\">\n                    <div class=\"mask rgba-white-slight\"></div>\n                  </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"col-md-6\" style=\"border: 2px solid black;\">\n\n        <h2>Fantasy T-shirt</h2>\n        <p class=\"text-muted text-uppercase small\">Shirts</p>\n        <ul class=\"rating row\">\n          <li>\n            <i class=\"fas fa-star fa-sm text-primary\"></i>\n          </li>\n          <li>\n            <i class=\"fas fa-star fa-sm text-primary\"></i>\n          </li>\n          <li>\n            <i class=\"fas fa-star fa-sm text-primary\"></i>\n          </li>\n          <li>\n            <i class=\"fas fa-star fa-sm text-primary\"></i>\n          </li>\n          <li>\n            <i class=\"far fa-star fa-sm text-primary\"></i>\n          </li>\n        </ul>\n        <p><span class=\"mr-1\"><strong>$12.99</strong></span></p>\n        <p class=\"pt-1\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit\n          error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,\n          officia quis dolore quos sapiente tempore alias.</p>\n        <div class=\"table-responsive\">\n          <table class=\"table table-sm table-borderless mb-0\">\n            <tbody>\n              <tr>\n                <th class=\"pl-0 w-25\" scope=\"row\"><strong>Model</strong></th>\n                <td>Shirt 5407X</td>\n              </tr>\n              <tr>\n                <th class=\"pl-0 w-25\" scope=\"row\"><strong>Color</strong></th>\n                <td>Black</td>\n              </tr>\n              <tr>\n                <th class=\"pl-0 w-25\" scope=\"row\"><strong>Delivery</strong></th>\n                <td>USA, Europe</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <hr>\n        <div class=\"table-responsive mb-2\">\n          <table class=\"table table-sm table-borderless\">\n            <tbody>\n              <tr>\n                <td class=\"pl-0 pb-0 w-25\">Quantity</td>\n                <td class=\"pb-0\">Select size</td>\n              </tr>\n              <tr>\n                <td class=\"pl-0\">\n                  <div class=\"def-number-input number-input safari_only mb-0\">\n                    <button onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\"\n                      class=\"minus\"></button>\n                    <input class=\"quantity\" min=\"0\" name=\"quantity\" value=\"1\" type=\"number\">\n                    <button onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\"\n                      class=\"plus\"></button>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"mt-1\">\n                    <div class=\"form-check form-check-inline pl-0\">\n                      <input type=\"radio\" class=\"form-check-input\" id=\"small\" name=\"materialExampleRadios\"\n                        checked>\n                      <label class=\"form-check-label small text-uppercase card-link-secondary\"\n                        for=\"small\">Small</label>\n                    </div>\n                    <div class=\"form-check form-check-inline pl-0\">\n                      <input type=\"radio\" class=\"form-check-input\" id=\"medium\" name=\"materialExampleRadios\">\n                      <label class=\"form-check-label small text-uppercase card-link-secondary\"\n                        for=\"medium\">Medium</label>\n                    </div>\n                    <div class=\"form-check form-check-inline pl-0\">\n                      <input type=\"radio\" class=\"form-check-input\" id=\"large\" name=\"materialExampleRadios\">\n                      <label class=\"form-check-label small text-uppercase card-link-secondary\"\n                        for=\"large\">Large</label>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary btn-md mr-1 mb-2\">Buy now</button>\n        <button type=\"button\" class=\"btn btn-light btn-md mr-1 mb-2\"><i\n            class=\"fas fa-shopping-cart pr-2\"></i>Add to cart</button>\n      </div>\n    </div> -->\n\n\n\n<!-- <div *ngFor=\"let item of shoppingcartitem.items\">\n  {{item.item}}\n</div> -->\n\n<!-- <div class=\"product\">\n<h2 class=\"page-header\">ADD PRODUCT</h2>\n<form #f=\"ngForm\" (submit)=\"onSubmit(f)\">\n  <div class=\"form-group\">\n    <label>Product Name</label>\n    <input\n      type=\"text\"\n      [(ngModel)]=\"productUpload.name\"\n      name=\"name\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label>Product Category</label>\n    <input\n      type=\"text\"\n      [(ngModel)]=\"productUpload.category\"\n      name=\"name\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label>Product Price</label>\n    <input\n      type=\"text\"\n      [(ngModel)]=\"productUpload.price\"\n      name=\"price\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label>Quantity</label>\n    <input type=\"text\" [(ngModel)]=\"productUpload.quantity\" name=\"name\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n      <label>Special Offers</label>\n      <input type=\"text\" [(ngModel)]=\"productUpload.offer\" name=\"name\" class=\"form-control\"/>\n    </div>\n  <div class=\"form-group\">\n    <label>Product Image</label>\n    <input type=\"file\" (change)=\"onFileSelected($event)\" multiple />\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n  <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"\"></i>\n</form>\n</div> -->\n\n<!-- <div *ngFor=\"let prod of products\">\n  Product Name: {{prod.name}}\n\t<img src=\"/assets/images/{{prod.productImage}}\"/>\n</div> -->\n\n\n"

/***/ }),

/***/ "./src/app/components/shared/popup/product/product.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/popup/product/product.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var ProductComponent = /** @class */ (function () {
    // shoppingcart: ShoppingCart = {
    //   _id:
    //   items: this.shoppingcartitem,
    //   totalQuantity: 0,
    //   totalPrice: 0
    // };
    function ProductComponent(validate_product, authservice, renderer, dialogref, value) {
        this.validate_product = validate_product;
        this.authservice = authservice;
        this.renderer = renderer;
        this.dialogref = dialogref;
        this.value = value;
        this.productUpload = {
            _id: '',
            name: '',
            category: '',
            offer: '',
            price: '',
            quantity: null,
            productImage: [null]
        };
        this.images = [];
        this.productDetails = {
            _id: '',
            name: '',
            category: '',
            offer: '',
            price: '',
            quantity: null,
            productImage: [null]
        };
        this.shoppingcartitem = {
            id: '',
            item: this.productDetails,
            price: 0,
            quantity: 0
        };
    }
    ProductComponent.prototype.ngOnInit = function () {
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
    };
    ProductComponent.prototype.imageSet = function (image) {
        var activeImage;
        activeImage = image.src;
        this.showSlide(activeImage);
    };
    ProductComponent.prototype.showSlide = function (n) {
        this.renderer.setProperty(this.image.nativeElement, 'src', n);
    };
    ProductComponent.prototype.in = function (event) {
        this.renderer.setStyle(this.result.nativeElement, 'display', 'block');
        this.imageZoom(event);
    };
    ProductComponent.prototype.out = function (event) {
        this.renderer.setStyle(this.result.nativeElement, 'display', 'none');
    };
    ProductComponent.prototype.imageZoom = function (e) {
        var image, result, render, lens, parentNode, cx, cy;
        image = this.image.nativeElement;
        result = this.result.nativeElement;
        render = this.renderer;
        lens = render.createElement('DIV');
        render.addClass(lens, 'img-zoom-lens');
        parentNode = render.parentNode(image);
        render.insertBefore(parentNode, lens, image);
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        render.setStyle(result, 'backgroundImage', 'url(\'' + image.src + '\')');
        render.setStyle(result, 'background-repeat', 'no-repeat');
        render.setStyle(result, 'background-size', (image.width * cx) + 'px ' + (image.height * cy) + 'px');
        image.addEventListener('mousemove', moveLens);
        function moveLens(event) {
            var pos, x, y;
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
            render.setStyle(lens, 'left', x + 'px');
            render.setStyle(lens, 'top', y + 'px');
            render.setStyle(result, 'background-position', '-' + (x * cx) + 'px -' + (y * cy) + 'px');
        }
        function getCursorPosition(ev) {
            var a, x = 0, y = 0;
            ev = ev || window.event;
            a = image.getBoundingClientRect();
            x = ev.pageX - a.left;
            y = ev.pageY - a.top;
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x: x, y: y };
        }
    };
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
    ProductComponent.prototype.ratingComponentClick = function (clickObj) {
        console.log(clickObj);
    };
    ProductComponent.prototype.onNoClick = function () {
        this.dialogref.close();
    };
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
    ProductComponent.prototype.fetchNumberOfImagesOfProduct = function (productId) {
        var _this = this;
        var no_images;
        this.authservice.getNumberOfImages(productId).subscribe(function (res) {
            no_images = res['size'];
            _this.productDetails = res['details'];
        }, function (error) { return console.log('Error: ', error); }, function () { return _this.fetchProductAllImage(no_images, productId); });
    };
    ProductComponent.prototype.fetchProductAllImage = function (images_no, productId) {
        var _this = this;
        var productImage;
        var _loop_1 = function (i) {
            this_1.authservice.getProductAllImages(productId, i).subscribe(function (res) {
                productImage = res;
            }, function (error) { return console.log('Error: ', error); }, function () { return _this.createImageFromBlob(productImage, i); });
        };
        var this_1 = this;
        for (var i = 0; i < images_no; i++) {
            _loop_1(i);
        }
    };
    ProductComponent.prototype.createImageFromBlob = function (image, index) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.images[index] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    ProductComponent.prototype.onFileSelected = function (event) {
        var files = event.target.files;
        this.productUpload.productImage = files;
    };
    ProductComponent.prototype.onSubmit = function (f) {
        if (!this.validate_product.validateProduct(this.productUpload)) {
            return false;
        }
        this.authservice.createProduct(this.productUpload).subscribe(function (data) {
            console.log('product created successfully');
        });
        f.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myimage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myresult'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "result", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/shared/popup/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/shared/popup/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/rating/rating.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/rating/rating.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.rating {\r\n  float:left;\r\n}\r\n\r\n.rating:not(:checked) > input {\r\n  position:absolute;\r\n  top:-9999px;\r\n  clip:rect(0,0,0,0);\r\n}\r\n\r\n.rating:not(:checked) > label {\r\n  float:right;\r\n  width:1em;\r\n  padding:0.1em;\r\n  overflow:hidden;\r\n  white-space:nowrap;\r\n  cursor:pointer;\r\n  font-size:200%;\r\n  line-height:1.2;\r\n  color:#ddd;\r\n}\r\n\r\n.rating:not(:checked) > label:before {\r\n  content: '★ ';\r\n}\r\n\r\n.rating > input:checked ~ label {\r\n  color: #f70;\r\n}\r\n\r\n.rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n  color: gold;\r\n}\r\n\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n  color: #ea0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7O0VBRUUsWUFBWTtDQUNiOztBQUdEOzs7RUFHRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnJhdGluZyB7XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gaW5wdXQge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDotOTk5OXB4O1xyXG4gIGNsaXA6cmVjdCgwLDAsMCwwKTtcclxufVxyXG5cclxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWwge1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG4gIHdpZHRoOjFlbTtcclxuICBwYWRkaW5nOjAuMWVtO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgZm9udC1zaXplOjIwMCU7XHJcbiAgbGluZS1oZWlnaHQ6MS4yO1xyXG4gIGNvbG9yOiNkZGQ7XHJcbn1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmJlZm9yZSB7XHJcbiAgY29udGVudDogJ+KYhSAnO1xyXG59XHJcblxyXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICBjb2xvcjogI2Y3MDtcclxufVxyXG5cclxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xyXG4gIGNvbG9yOiBnb2xkO1xyXG59XHJcblxyXG5cclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlcixcclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsLFxyXG4ucmF0aW5nID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gIGNvbG9yOiAjZWEwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/rating/rating.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/rating/rating.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset class=\"rating\">\n  <input type=\"radio\" [name]=\"inputName\" value=\"5\" [checked]=\"rating===5\" />\n  <label title=\"Rocks!\" (click)='onClick(5)'>5 stars</label>\n\n  <input type=\"radio\" [name]=\"inputName\" value=\"4\" [checked]=\"rating===4\" />\n  <label title=\"Pretty good\" (click)='onClick(4)'>4 stars</label>\n\n  <input type=\"radio\" [name]=\"inputName\" value=\"3\" [checked]=\"rating===3\" />\n  <label title=\"Meh\" (click)='onClick(3)'>3 stars</label>\n\n  <input type=\"radio\" [name]=\"inputName\" value=\"2\" [checked]=\"rating===2\" />\n  <label title=\"Kinda bad\" (click)='onClick(2)'>2 stars</label>\n\n  <input type=\"radio\" [name]=\"inputName\" value=\"1\" [checked]=\"rating===1\" />\n  <label title=\"Sucks big time\" (click)='onClick(1)'>1 star</label>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/components/shared/rating/rating.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/rating/rating.component.ts ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.ratingClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.inputName = this.itemId + '_rating';
    };
    RatingComponent.prototype.onClick = function (rating) {
        this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RatingComponent.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RatingComponent.prototype, "itemId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], RatingComponent.prototype, "ratingClick", void 0);
    RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/components/shared/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/components/shared/rating/rating.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");











































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_40__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__["ScrollingModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/notification.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/notification.model.ts ***!
  \**********************************************/
/*! exports provided: Notification, NotificationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
var Notification = /** @class */ (function () {
    function Notification() {
    }
    return Notification;
}());

var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Success"] = 0] = "Success";
    NotificationType[NotificationType["Error"] = 1] = "Error";
    NotificationType[NotificationType["Info"] = 2] = "Info";
    NotificationType[NotificationType["Warning"] = 3] = "Warning";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 10000;
        }
        else {
            return false;
        }
    };
    // register(user: TokenPayload): Observable<any> {
    //   console.log('going to register');
    //   return this.http.post(`http://localhost:3000/user/signup/`, user);
    // }
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("user/" + type, user);
        }
        else if (method === 'put') {
            base = this.http.post("user/" + type, user);
        }
        else {
            base = this.http.get("user/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'signup', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'signin', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.reset = function (user) {
        return this.request('put', 'reset', user);
    };
    AuthenticationService.prototype.confirmation = function (token) {
        var _this = this;
        var base = this.http.get("user/activate/" + token);
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");




var AuthguardService = /** @class */ (function () {
    function AuthguardService(userAuth, router) {
        this.userAuth = userAuth;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function () {
        if (!this.userAuth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.cartCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.currentCount = this.cartCount.asObservable();
    }
    DataService.prototype.changeCount = function (count) {
        this.cartCount.next(count);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/notification.model */ "./src/app/models/notification.model.ts");





var NotificationService = /** @class */ (function () {
    function NotificationService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = true;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    NotificationService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    NotificationService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.showNotification(_models_notification_model__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].Success, message, keepAfterRouteChange);
    };
    NotificationService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.showNotification(_models_notification_model__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].Error, message, keepAfterRouteChange);
    };
    NotificationService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.showNotification(_models_notification_model__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].Info, message, keepAfterRouteChange);
    };
    NotificationService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.showNotification(_models_notification_model__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].Warning, message, keepAfterRouteChange);
    };
    NotificationService.prototype.showNotification = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    NotificationService.prototype.clear = function () {
        this.subject.next();
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.createOrder = function (customer, cart) {
        var data = {
            customer_name: '',
            customer_number: '',
            address_latitude: null,
            address_longitude: null,
            product_id: [],
            product_quantity: []
        };
        var config = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json')
        };
        // const fd = {
        //   'customer_name': customer.FullName,
        //   'customer_number': customer.Phone_Number,
        //   'address_latitude': customer.DeliveryLocation.latitude,
        //   'address_longitude': customer.DeliveryLocation.longitude,
        // };
        data.customer_name = customer.FullName;
        data.customer_number = customer.Phone_Number;
        data.address_latitude = customer.DeliveryLocation.latitude;
        data.address_longitude = customer.DeliveryLocation.longitude;
        for (var i = 0; i < cart.products.length; i++) {
            data.product_id[i] = cart.products[i].item._id;
            data.product_quantity[i] = cart.products[i].quantity;
        }
        // const fd = new FormData();
        // fd.append('customer_name', customer.FullName);
        // fd.append('customer_number', customer.Phone_Number);
        // fd.append('address_latitude', String (customer.DeliveryLocation.latitude));
        // fd.append('address.longitude', String (customer.DeliveryLocation.longitude));
        // for (let i = 0 ; i < cart.products.length ; i++) {
        //   fd.append('product_id', cart.products[i].item._id);
        //   fd.append('product_quantity', String(cart.products[i].quantity));
        // }
        return this.http.post('order/create', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var uri = 'http://localhost:3000';
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.count = 0;
    }
    ProductService.prototype.createProduct = function (product) {
        var fd = new FormData();
        fd.append('name', product.name);
        fd.append('category', product.category);
        fd.append('offer', product.offer);
        fd.append('price', product.price);
        fd.append('qty', product.quantity);
        for (var i = 0; i < product.productImage.length; i++) {
            fd.append('productImage', product.productImage[i]);
        }
        return this.http.post('products/upload', fd);
    };
    ProductService.prototype.getAllProduct = function (type) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('productType', type);
        return this.http.get('products/', { params: params });
    };
    ProductService.prototype.getProductImage = function (productId) {
        return this.http.get('products/image/' + productId, {
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    ProductService.prototype.getNumberOfImages = function (prodId) {
        return this.http.get('products/allimages/number/' + prodId);
    };
    ProductService.prototype.getProductAllImages = function (productId, index) {
        var number = 2;
        return this.http.get('products/allimages/' + productId + '&' + index, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    ProductService.prototype.getSpecialProducts = function (offer) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('productOffer', offer);
        return this.http.get('products/specialoffer/', { params: params });
    };
    ProductService.prototype.getRandomProducts = function (cat) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('category', cat);
        return this.http.get('products/randomproducts/', { params: params });
    };
    ProductService.prototype.createCategory = function () {
        return this.http.post('category/addcategory', {
            title: 'blanket',
            filename: '/Images/blanket&quilts.png',
        });
    };
    ProductService.prototype.getCategory = function () {
        return this.http.get('category/');
    };
    ProductService.prototype.getCategoryImage = function (categoryId) {
        return this.http.get('category/image/' + categoryId, {
            responseType: 'blob'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    ProductService.prototype.search = function (terms) {
        var _this = this;
        return terms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.searchEntries(term); }));
    };
    ProductService.prototype.searchEntries = function (term) {
        if (term === '') {
            term = 'nostring';
        }
        return this.http
            .get('products/search/' + term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    ProductService.prototype.parseData = function (res) {
        return res.json() || [];
    };
    ProductService.prototype.handleError = function (error) {
        var errorMessage;
        errorMessage = error.message ? error.message : error.toString();
        // In real world application, call to log error to remote server
        // logError(error);
        // This returns another Observable for the observer to subscribe to
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(errorMessage);
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SharedService = /** @class */ (function () {
    function SharedService() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.currentCartCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.currentMessage = this.currentCartCount.asObservable();
    }
    SharedService.prototype.updateCartCount = function (count) {
        this.currentCartCount.next(count);
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/shoppingcart.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/shoppingcart.service.ts ***!
  \**************************************************/
/*! exports provided: ShoppingcartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartService", function() { return ShoppingcartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var uri = 'http://localhost:3000';
// let shoppingCartInstance: ShoppingCart;
var ShoppingcartService = /** @class */ (function () {
    function ShoppingcartService(http) {
        this.http = http;
    }
    ShoppingcartService.prototype.getCartCount = function () {
        var count = '';
        this.getAllProductFromCart().subscribe(function (result) {
            count = result;
            return count.totalQuantity;
        });
        return count.totalQuantity;
    };
    ShoppingcartService.prototype.createCart = function () {
        return this.http.get('cart/createcart/');
    };
    ShoppingcartService.prototype.addProductToCart = function (product_id) {
        // let cartId: string;
        // this.createCart().subscribe(result => {
        //   cartId = result._id;
        //   console.log(cartId);
        // });
        // const fd = new FormData();
        // console.log(product_id + ' ' + qty);
        // fd.append('id', product_id);
        // fd.append('quantity', qty);
        // console.log(fd);
        // const header = new Headers({ 'Content-Type': 'application/json' });
        // let params = new HttpParams();
        // params = params.append('productId', product_id);
        // params = params.append('qty', qty);
        console.log('product_id');
        var data = {
            'id': product_id
        };
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'credentials': 'include'
        });
        return this.http.get('cart/addtocart/' + product_id, { withCredentials: true })
            .pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    ShoppingcartService.prototype.getAllProductFromCart = function () {
        return this.http.get('cart/get-cart', { withCredentials: true });
    };
    // getCartCount() {
    //   return this.http.get('http://localhost:3000/cart/getcount');
    // }
    ShoppingcartService.prototype.removeOneFromCart = function (product) {
        return this.http.get('cart/remove/' + product)
            .pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    ShoppingcartService.prototype.removeProductFromCart = function (id) {
        return this.http.get('cart/delete/' + id)
            .pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    ShoppingcartService.prototype.errorHandler = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    ShoppingcartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ShoppingcartService);
    return ShoppingcartService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");




var ValidateService = /** @class */ (function () {
    function ValidateService(sharedservice) {
        this.sharedservice = sharedservice;
    }
    ValidateService.prototype.intercept = function (req, next) {
        var _this = this;
        this.sharedservice.isLoading.next(true);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.sharedservice.isLoading.next(false);
        }));
    };
    ValidateService.prototype.validateProduct = function (product) {
        if (product.name === '' ||
            product.category === '' ||
            product.price === undefined ||
            product.quantity === null ||
            product.productImage == null) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ALI\Desktop\Web Application\kaash\mean-front-back\back-end\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map