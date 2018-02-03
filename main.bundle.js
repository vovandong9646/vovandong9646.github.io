webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\r\n\tbackground: gray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\">Angular Call Api</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n     <!--   routerLinkActive         => dùng để add class active vào link\n            routerLinkActiveOptions  => dùng để bỏ cái active Home đi\n            routerLink               => dùng để add link -->\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" >\n        <a class=\"nav-link\" [routerLink]=\"['/']\" >Home</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/about\" >About</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/products\" >Product</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card mt-5\">\n        <div class=\"card-body\">\n          <router-outlet (products)=\"products\" ></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_page_about_page_component__ = __webpack_require__("../../../../../src/app/components/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_product_page_product_page_component__ = __webpack_require__("../../../../../src/app/components/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form_product_form_product_component__ = __webpack_require__("../../../../../src/app/components/form-product/form-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_not_found_page_not_found_page_component__ = __webpack_require__("../../../../../src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_form_edit_form_edit_component__ = __webpack_require__("../../../../../src/app/components/form-edit/form-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import router module => dùng để chuyển trang

//import httpClientModule => call Api








// Service

// Tạo ra routes (Chỉ định cho nó cái link và component(nội dung) của link đó)
var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_6__components_home_page_home_page_component__["a" /* HomePageComponent */]
    },
    {
        path: "about",
        component: __WEBPACK_IMPORTED_MODULE_7__components_about_page_about_page_component__["a" /* AboutPageComponent */]
    },
    {
        path: "products",
        component: __WEBPACK_IMPORTED_MODULE_8__components_product_page_product_page_component__["a" /* ProductPageComponent */]
    },
    {
        path: "products/add",
        component: __WEBPACK_IMPORTED_MODULE_9__components_form_product_form_product_component__["a" /* FormProductComponent */]
    },
    {
        path: "products/:id/edit",
        component: __WEBPACK_IMPORTED_MODULE_11__components_form_edit_form_edit_component__["a" /* FormEditComponent */]
    },
    {
        path: "**",
        component: __WEBPACK_IMPORTED_MODULE_10__components_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_about_page_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_product_page_product_page_component__["a" /* ProductPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_form_edit_form_edit_component__["a" /* FormEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_form_product_form_product_component__["a" /* FormProductComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_product_service_service__["a" /* ProductServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about-page/about-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">About Page</h1>"

/***/ }),

/***/ "../../../../../src/app/components/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-page',
            template: __webpack_require__("../../../../../src/app/components/about-page/about-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/form-edit/form-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/form-edit/form-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n\t<legend>Edit Product</legend>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Product Name</label>\n\t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name field\" [(ngModel)]=\"product.name\" />\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Price</label>\n\t\t<input type=\"number\" name=\"price\" class=\"form-control\" placeholder=\"Price field\" [(ngModel)]=\"product.price\" />\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Status</label>\n\t\t<div class=\"radio\">\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"status\" [value]=\"true\" [(ngModel)]=\"product.status\" />\n\t\t\t\tCòn Hàng <br>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"status\" [value]=\"false\" [(ngModel)]=\"product.status\"  />\n\t\t\t\tHết Hàng\n\t\t\t</label>\n\t\t</div>\n\t</div>\n\t<button type=\"button\" (click)=\"onEditForm()\" class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/form-edit/form-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product_class__ = __webpack_require__("../../../../../src/app/models/product.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormEditComponent = /** @class */ (function () {
    function FormEditComponent(productService, activatedRoute, routerService) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.routerService = routerService;
    }
    FormEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = new __WEBPACK_IMPORTED_MODULE_2__models_product_class__["a" /* Product */]();
        this.productEdit = this.activatedRoute.params.subscribe(function (data) {
            _this.subscription = _this.productService.getProductById(data.id).subscribe(function (data) {
                _this.product = data;
            }, function (err) {
                console.log(err);
            });
        });
    };
    FormEditComponent.prototype.onEditForm = function () {
        var _this = this;
        this.subscription = this.productService.getUpdateProduct(this.product).subscribe(function (data) {
            _this.routerService.navigateByUrl("products");
        }, function (err) {
            console.log(err);
        });
    };
    FormEditComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.productEdit) {
            this.productEdit.unsubscribe();
        }
    };
    FormEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-edit',
            template: __webpack_require__("../../../../../src/app/components/form-edit/form-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/form-edit/form-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_product_service_service__["a" /* ProductServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], FormEditComponent);
    return FormEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/form-product/form-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/form-product/form-product.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n\t<legend>Add Product</legend>\r\n\t\r\n\t<div class=\"col-md-12\">\r\n\t\t<ng-template [ngIf]=\"checkNull\">\r\n\t\t\t<div class=\"alert alert-danger\">{{ checkNull }}</div>\t\r\n\t\t</ng-template>\r\n\t</div>\r\n\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"\">Product Name</label>\r\n\t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name field\" [(ngModel)]=\"product.name\">\r\n\t</div>\r\n\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"\">Price</label>\r\n\t\t<input type=\"number\" name=\"price\" class=\"form-control\" placeholder=\"Price field\" [(ngModel)]=\"product.price\">\r\n\t</div>\r\n\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"\">Status</label>\r\n\t\t<div class=\"radio\">\r\n\t\t\t<label>\r\n\t\t\t\t<input type=\"radio\" name=\"status\" [value]=\"true\" [(ngModel)]=\"product.status\" />\r\n\t\t\t\tCòn Hàng <br>\r\n\t\t\t</label>\r\n\t\t\t<label>\r\n\t\t\t\t<input type=\"radio\" name=\"status\" [value]=\"false\" [(ngModel)]=\"product.status\"  />\r\n\t\t\t\tHết Hàng\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t</div>\r\n\t<button type=\"button\" (click)=\"onActionForm()\" class=\"btn btn-primary\">Submit</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/form-product/form-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product_class__ = __webpack_require__("../../../../../src/app/models/product.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Router dung de redirect , activedRouter => dung de lay id tu url
// Nó là Service nên phải khai báo ở constructor để gọi

var FormProductComponent = /** @class */ (function () {
    function FormProductComponent(productService, routerService) {
        this.productService = productService;
        this.routerService = routerService;
    }
    FormProductComponent.prototype.ngOnInit = function () {
        this.product = new __WEBPACK_IMPORTED_MODULE_2__models_product_class__["a" /* Product */]();
    };
    // Ham này dùng để add Product
    FormProductComponent.prototype.onActionForm = function () {
        var _this = this;
        if (this.product.name && this.product.price) {
            this.checkNull = '';
            // call service chứa api để lưu vào api
            this.subscription = this.productService.addProduct(this.product).subscribe(function (data) {
                if (data && data.id) {
                    _this.routerService.navigateByUrl("/products");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.checkNull = "Vui lòng nhập đầy đủ thông tin !!!";
        }
    };
    // // Hàm này tạo id Ramdom sẽ tạo thành 1 chuỗi có 10 số 
    // rand() {
    // 	return Math.floor((Math.random() + 1) * 0x1000000000).toString(16);
    // }
    // // Nối chuỗi ở ttreen để tạo thành 1 chuỗi dài
    // randomId() {
    // 	return this.rand() + "-" + this.rand() + "-" + this.rand() + "-" + this.rand() + "-" + this.rand(); 
    // }
    // // Hàm này dùng để lấy id cuối cùng + 1
    // getId(products) {
    // 	let id = (products.length > 0) ? (products.sort((a,b)=>{
    // 		if(a.id > b.id) return -1;
    // 		else if(a.id < b.id) return 1;
    // 		return 0;
    // 	})[0].id + 1) : 1;
    // 	return id;
    // }
    FormProductComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    FormProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-product',
            template: __webpack_require__("../../../../../src/app/components/form-product/form-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/form-product/form-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service_service__["a" /* ProductServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], FormProductComponent);
    return FormProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Home Page</h1>"

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/not-found-page/not-found-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/not-found-page/not-found-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">404 - NotFound Page</h1>"

/***/ }),

/***/ "../../../../../src/app/components/not-found-page/not-found-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found-page',
            template: __webpack_require__("../../../../../src/app/components/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product-page/product-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-page/product-page.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-hover\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"4\"></td>\r\n\t\t\t<td><a routerLink=\"/products/add\" class=\"btn btn-primary\">Add Product</a></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th>Stt</th>\r\n\t\t\t<th>Name</th>\r\n\t\t\t<th>Price</th>\r\n\t\t\t<th>Status</th>\r\n\t\t\t<th>Action</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<ng-container *ngIf=\"products; else noProducts\">\r\n\t\t\t<tr *ngFor=\"let item of products; let i = index\">\r\n\t\t\t\t<td>{{ i + 1 }}</td>\r\n\t\t\t\t<td>{{ item.name }}</td>\r\n\t\t\t\t<td>{{ item.price }}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<span class=\"badge badge-{{ item.status ? 'success' : 'danger' }}\">\r\n\t\t\t\t\t\t{{ item.status ? \"Còn Hàng\" : \"Hết Hàng\" }}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<input type=\"button\" [routerLink]=\"['/products',item.id,'edit']\" class=\"btn btn-outline-info\" value=\"Edit\"/>\r\n\t\t\t\t\t<input type=\"button\" (click)=\"onHandleDelete(item.id)\" class=\"btn btn-outline-danger\" value=\"Delete\" />\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</ng-container>\r\n\t\t<ng-template #noProducts>\r\n\t\t\t<tr>\r\n\t\t\t\t<td colspan=\"5\"> Khong co san pham nao</td>\r\n\t\t\t</tr>\r\n\t\t</ng-template>\r\n\t</tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/product-page/product-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent(productService) {
        this.productService = productService;
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.productService.getAllProduct().subscribe(function (data) {
            return _this.products = data;
        }, function (err) {
            console.log("Error: " + err.statusText);
        });
    };
    ProductPageComponent.prototype.findIndex = function (id) {
        var result = null;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    };
    ProductPageComponent.prototype.onHandleDelete = function (id) {
        var _this = this;
        this.subscription = this.productService.getDeleteProduct(id).subscribe(function (data) {
            var index = _this.findIndex(id);
            _this.products.splice(index, 1);
        }, function (err) {
            console.log(err);
        });
    };
    ProductPageComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ProductPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-page',
            template: __webpack_require__("../../../../../src/app/components/product-page/product-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product-page/product-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service_service__["a" /* ProductServiceService */]])
    ], ProductPageComponent);
    return ProductPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/product.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/services/product-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductServiceService = /** @class */ (function () {
    function ProductServiceService(http) {
        this.http = http;
        this.API = "http://5a59baf3bc6e340012a0375c.mockapi.io/api/products";
    }
    ProductServiceService.prototype.getAllProduct = function () {
        return this.http.get(this.API);
    };
    ProductServiceService.prototype.getDeleteProduct = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    ProductServiceService.prototype.addProduct = function (product) {
        return this.http.post(this.API, product);
    };
    ProductServiceService.prototype.getProductById = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    ProductServiceService.prototype.getUpdateProduct = function (product) {
        return this.http.put(this.API + "/" + product.id, product);
    };
    ProductServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductServiceService);
    return ProductServiceService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map