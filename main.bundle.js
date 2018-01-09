webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: white;\n}\n\np {\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0 0 25px;\n}\n\n@media (min-width: 768px) {\n  p {\n    font-size: 18px;\n    line-height: 1.6;\n    margin: 0 0 35px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"content-section text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto\">\n        <h2>Long Text about EPAM</h2>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat\n          architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<epamghio-header></epamghio-header>\n<epamghio-search></epamghio-search>\n<epamghio-main-menu></epamghio-main-menu>\n<epamghio-projects></epamghio-projects>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_findIndex__ = __webpack_require__("../../../../rxjs/add/operator/findIndex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_concat__ = __webpack_require__("../../../../rxjs/add/operator/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_webstorage__ = __webpack_require__("../../../../ng2-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project_item_project_item_component__ = __webpack_require__("../../../../../src/app/project-item/project-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_project_search_project_component__ = __webpack_require__("../../../../../src/app/search-project/search-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__category_block_category_block_component__ = __webpack_require__("../../../../../src/app/category-block/category-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_menu_main_menu_component__ = __webpack_require__("../../../../../src/app/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__project_detail_info_project_detail_info_component__ = __webpack_require__("../../../../../src/app/project-detail-info/project-detail-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__language_select_language_select_component__ = __webpack_require__("../../../../../src/app/language-select/language-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_select__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__project_item_project_item_component__["a" /* ProjectItemComponent */],
            __WEBPACK_IMPORTED_MODULE_12__search_project_search_project_component__["a" /* SearchProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_16__category_block_category_block_component__["a" /* CategoryBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_17__main_menu_main_menu_component__["a" /* MainMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_19__project_detail_info_project_detail_info_component__["a" /* ProjectDetailInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_20__language_select_language_select_component__["a" /* LanguageSelectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_webstorage__["a" /* Ng2Webstorage */].forRoot({ prefix: 'epamghio', separator: '-' }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_21_ng2_select__["SelectModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__service_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_18__service_category_service__["a" /* CategoryService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/category-block/category-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-block/category-block.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  category-block works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/category-block/category-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryBlockComponent = (function () {
    function CategoryBlockComponent() {
    }
    CategoryBlockComponent.prototype.ngOnInit = function () {
    };
    return CategoryBlockComponent;
}());
CategoryBlockComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-category-block',
        template: __webpack_require__("../../../../../src/app/category-block/category-block.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category-block/category-block.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CategoryBlockComponent);

//# sourceMappingURL=category-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  padding: 25px 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container text-center\">\n    <p>Some footer</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 60px;\n  background-color: #FFFFFF;\n  padding: 0 55px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.logo {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/epam-logo.svg") + ");\n  display: inline-block;\n  margin-top: 5px;\n  width: 78px;\n  height: 28px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"logo-container\">\n    <span class=\"logo\"></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/language-select/language-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".language-wrapper {\n  width: 260px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.language-wrapper ng-select {\n  width: 180px;\n}\n\n.language-label {\n  font-size: 16px;\n  line-height: 20px;\n  color: #999999;\n  width: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/language-select/language-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"language-wrapper\">\n  <span class=\"language-label\">Language:</span>\n  <ng-select [items]=\"items\"\n             (data)=\"refreshValue($event)\"\n             (selected)=\"selected($event)\"\n             [active]=\"[{id: ANY_VALUE, text: ANY_VALUE}]\"\n             placeholder=\"Any Language\">\n  </ng-select>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/language-select/language-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageSelectComponent = (function () {
    function LanguageSelectComponent(projectService) {
        this.projectService = projectService;
        this.ANY_VALUE = 'Any';
        this.items = [
            this.ANY_VALUE,
            'Java', 'C', 'C++', 'Objective-C',
            'Ruby', 'Python', 'Javascript', 'Html',
            'CSS', 'Typescript', 'C#', 'Erlang'
        ];
        this.value = { id: this.ANY_VALUE, text: this.ANY_VALUE };
    }
    LanguageSelectComponent.prototype.selected = function (value) {
        this.projectService.searchEvent.emit({ language: value.id === this.ANY_VALUE ? '' : value.id });
    };
    LanguageSelectComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    return LanguageSelectComponent;
}());
LanguageSelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-language-select',
        template: __webpack_require__("../../../../../src/app/language-select/language-select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/language-select/language-select.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */]) === "function" && _a || Object])
], LanguageSelectComponent);

var _a;
//# sourceMappingURL=language-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-wrapper {\n  padding: 34px 0;\n  margin: 0 55px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.55);\n}\n\n.main-menu {\n  height: 36px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.floating-empty-block {\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n}\n\n.language-select {\n  border: 1px solid #E5E5E5;\n  width: 180px;\n  height: 36px;\n  overflow: hidden;\n}\n\n.language-select select {\n  background: transparent;\n  outline: none;\n  border: none;\n  font-size: 14px;\n  width: 180px;\n  color: #464547;\n  line-height: 12px;\n  height: 36px;\n}\n\n.date-label {\n  margin-left: 30px;\n  color: #464547;\n  font-size: 16px;\n  line-height: 20px;\n  padding-right: 6px;\n}\n\n.arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 7px solid #666666;\n}\n\n.arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 7px solid #666666;\n}\n\n.link {\n  color: #464547;\n  font-size: 16px;\n  line-height: 20px;\n  margin-right: 38px;\n  text-decoration: none;\n  padding-bottom: 10px;\n}\n\n.active.link {\n  color: #464547;\n  font-weight: 600;\n  border-bottom: 2px solid #38C2D7;\n}\n\n.date-block {\n  cursor: pointer;\n  height: 36px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-wrapper\">\n  <div class=\"main-menu\">\n    <a *ngIf=\"activeCategory !== 0\" href=\"#\" class=\"link\" (click)=\"chooseActiveCategory($event, 0)\">\n      All\n    </a>\n    <span *ngIf=\"activeCategory === 0\" class=\"active link\">All</span>\n    <a href=\"#\" *ngFor=\"let category of categories;\"\n       ngClass=\"{{activeCategory == category.id ? 'active link' : 'link'}}\"\n       (click)=\"chooseActiveCategory($event, category.id)\">\n      {{category.name}}\n    </a>\n    <div class=\"floating-empty-block\"></div>\n    <epamghio-language-select></epamghio-language-select>\n    <div class=\"date-block\" (click)=\"changeUpdateAtOrdering()\">\n      <span class=\"date-label\">Date</span>\n      <div *ngIf=\"updateAtAscOrdering\" class=\"arrow-up\"></div>\n      <div *ngIf=\"!updateAtAscOrdering\" class=\"arrow-down\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainMenuComponent = (function () {
    function MainMenuComponent(categoryService, projectService) {
        this.categoryService = categoryService;
        this.projectService = projectService;
        this.updateAtAscOrdering = false;
        this.activeCategory = 0;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        var categoriesObject = this.categoryService.categories;
        this.categories = Object
            .keys(categoriesObject)
            .map(function (key) {
            return { id: key, name: categoriesObject[key] };
        });
    };
    MainMenuComponent.prototype.chooseActiveCategory = function (event, categoryStr) {
        var category = parseInt(categoryStr, 10);
        event.preventDefault();
        this.activeCategory = category;
        this.projectService.searchEvent.emit({ category: category });
    };
    MainMenuComponent.prototype.changeUpdateAtOrdering = function () {
        this.updateAtAscOrdering = !this.updateAtAscOrdering;
        this.projectService.searchEvent.emit({ orderByAscUpdatedAt: this.updateAtAscOrdering });
    };
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-main-menu',
        template: __webpack_require__("../../../../../src/app/main-menu/main-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-menu/main-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */]) === "function" && _b || Object])
], MainMenuComponent);

var _a, _b;
//# sourceMappingURL=main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/Language.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });
var Language = (function () {
    function Language(name, percent) {
        this.name = name;
        this.percent = percent;
    }
    return Language;
}());

//# sourceMappingURL=Language.js.map

/***/ }),

/***/ "../../../../../src/app/model/Project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project(id, name, org, category, language, licence, description, githubUrl, forkCount, issueCount, 
        // public commitCount: number,
        // public contributorCount: number,
        // public languages: Language[],
        updatedAt) {
        this.id = id;
        this.name = name;
        this.org = org;
        this.category = category;
        this.language = language;
        this.licence = licence;
        this.description = description;
        this.githubUrl = githubUrl;
        this.forkCount = forkCount;
        this.issueCount = issueCount;
        this.updatedAt = updatedAt;
    }
    return Project;
}());

//# sourceMappingURL=Project.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mainNav {\n  font-family: 'Cabin', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  margin-bottom: 0;\n  text-transform: uppercase;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#mainNav .navbar-toggler {\n  font-size: 14px;\n  padding: 11px;\n  color: white;\n}\n\n#mainNav .navbar-brand {\n  font-weight: 700;\n}\n\n#mainNav a {\n  color: white;\n}\n\n#mainNav .navbar-nav .nav-item {\n  transition: background 0.3s ease-in-out;\n}\n\n#mainNav .navbar-nav .nav-item:hover {\n  color: fade(white, 80%);\n  outline: none;\n  background-color: transparent;\n}\n\n#mainNav .navbar-nav .nav-item:active, #mainNav .navbar-nav .nav-item:focus {\n  outline: none;\n  background-color: transparent;\n}\n\n@media (min-width: 992px) {\n  #mainNav {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    transition: background 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s;\n    letter-spacing: 1px;\n    border-bottom: none;\n    background: transparent;\n  }\n\n  #mainNav.navbar-shrink {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    /*border-bottom: 1px solid rgba(255, 255, 255, 0.3);*/\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n\n  #mainNav .nav-link.active {\n    outline: none;\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n\n  #mainNav .nav-link.active:hover {\n    color: white;\n  }\n}\n\na {\n  transition: all 0.2s ease-in-out;\n  color: #42DCA3;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      Menu\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#projects\">Projects</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-detail-info/project-detail-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-detail-info {\n  padding: 35px;\n  box-sizing: border-box;\n  border: 1px solid rgba(204, 204, 204, 0.55);\n  background-color: #FFFFFF;\n  margin-bottom: 35px;\n}\n\n.header {\n  color: #6B6D6F;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 31px;\n  margin-bottom: 16px;\n}\n\n.link-to-github {\n  color: #38C2D7;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.center-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n.empty-block {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n}\n\n.description {\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.55);\n}\n\n.description-text {\n  max-height: 360px;\n  overflow: hidden;\n  margin-top: 34px;\n  color: #999999;\n  font-size: 16px;\n  line-height: 25px;\n  margin-bottom: 16px;\n  word-break: break-word;\n}\n\n.right-arrow {\n  width: 22px;\n  height: 22px;\n}\n\n.right-block {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 300px;\n          flex: 0 0 300px;\n  padding-left: 34px;\n  border-left: 1px solid rgba(204, 204, 204, 0.55);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.languages-label, .updated-label {\n  font-size: 16px;\n  line-height: 20px;\n  color: #999999;\n}\n\n.updated-label {\n  margin-top: 34px;\n  display: inline-block;\n  margin-bottom: 14px;\n}\n\n.updated {\n  color: #6B6D6F;\n  font-size: 16px;\n  line-height: 20px;\n}\n\nol {\n  padding-left: 0;\n}\n\nli {\n  list-style: none;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.lang-label {\n  margin-right: 13px;\n}\n\n.full-description-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  color: #666666;\n  font-size: 16px;\n  line-height: 20px;\n  margin-bottom: 34px;\n  cursor: pointer;\n}\n\n.full-description-block:hover {\n  color: #38C2D7;\n}\n\n.full-description-block:hover svg {\n  fill: #38C2D7;\n}\n\n.footer {\n  padding-top: 23px;\n}\n\n.footer .number {\n  color: #666666;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.footer .characteristic {\n  color: #666666;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 100;\n}\n\n.separator {\n  width: 2px;\n  border: 1px solid #CCCCCC;\n  box-sizing: border-box;\n  height: 10px;\n  margin-left: 35px;\n  margin-right: 33px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-detail-info/project-detail-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"detail !== null\" class=\"col-md-12 project-detail-info\">\n  <div class=\"header\">{{detail.name}}</div>\n  <div class=\"center-block\">\n    <div class=\"description\">\n      <a href=\"{{detail.githubUrl}}\" class=\"link-to-github\">{{detail.githubUrl}}</a>\n      <div class=\"description-text\">\n        <div [innerHtml]=\"readMe | async\">\n        </div>\n      </div>\n      <a class=\"full-description-block\" href=\"{{detail.githubUrl}}/blob/master/README.md\">\n        <span>Full Description</span>\n        <svg class=\"right-arrow\">\n          <path\n            d=\"M14,12 L9,12 L9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 L15,14 C15.2761424,14 15.5261424,13.8880712 15.7071068,13.7071068 C15.8880712,13.5261424 16,13.2761424 16,13 L16,7 C16,6.44771525 15.5522847,6 15,6 C14.4477153,6 14,6.44771525 14,7 L14,7 L14,12 Z\"\n            id=\"Combined-Shape-Copy\"\n            transform=\"translate(12.000000, 10.000000) rotate(-45.000000) translate(-13.000000, -10.000000) \">\n          </path>\n        </svg>\n      </a>\n    </div>\n    <div class=\"empty-block\"></div>\n    <div class=\"right-block\">\n      <div class=\"languages-block\">\n        <span class=\"languages-label\">LANGUAGES:</span>\n        <ol>\n          <li *ngFor=\"let language of languages | async\">\n            <span class=\"lang-label small {{language.name}}\"></span>\n            <span class=\"language\">{{language.name}}</span>\n            <span class=\"language-percentage\">{{language.percent}}%</span>\n          </li>\n        </ol>\n      </div>\n      <div class=\"updated-at-block\" *ngIf=\"detail.updatedAt != null\">\n        <span class=\"updated-label\">UPDATED:</span>\n        <br>\n        <span class=\"updated\">{{detail.updatedAt.format('on MMM DD, YYYY')}}</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <span class=\"number\">{{detail.commitCount}}</span>\n    <span class=\"characteristic\"> Commits</span>\n    <span class=\"separator\"></span>\n    <span class=\"number\">{{contributorCount | async}}</span>\n    <span class=\"characteristic\"> Contributors</span>\n    <span *ngIf=\"detail.issueCount !== 0\" class=\"separator\"></span>\n    <span *ngIf=\"detail.issueCount !== 0\" class=\"number\">{{detail.issueCount}}</span>\n    <span *ngIf=\"detail.issueCount !== 0\" class=\"characteristic\"> Issues</span>\n    <span *ngIf=\"detail.forkCount !== 0\" class=\"separator\"></span>\n    <span *ngIf=\"detail.forkCount !== 0\" class=\"number\">{{detail.forkCount}}</span>\n    <span *ngIf=\"detail.forkCount !== 0\" class=\"characteristic\"> Forks</span>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/project-detail-info/project-detail-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marky_markdown__ = __webpack_require__("../../../../marky-markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marky_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_marky_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectDetailInfoComponent = (function () {
    function ProjectDetailInfoComponent(http, projectService, sanitizer) {
        this.http = http;
        this.projectService = projectService;
        this.sanitizer = sanitizer;
        this.detail = null;
        this.readMe = null;
    }
    ProjectDetailInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.detail = this.projectService.projectSelectedEvent.subscribe(function (project) {
            if (project != null) {
                _this.detail = project;
                _this.readMe = _this.http.get("https://raw.githubusercontent.com/" + project.org + "/" + project.name + "/master/README.md")
                    .map(function (it) { return it.text(); })
                    .map(function (it) { return _this._processText(it); })
                    .map(function (it) { return _this.sanitizer.bypassSecurityTrustHtml(__WEBPACK_IMPORTED_MODULE_3_marky_markdown___default()(it)); });
                _this.languages = _this.projectService.getLanguages(project.name);
                _this.contributorCount = _this.projectService.getContributorCount(project.name);
            }
        });
    };
    ProjectDetailInfoComponent.prototype._processText = function (text) {
        var strings = text.split('\n')
            .map(function (it) { return it.replace(/&nbsp;/g, ''); })
            .map(function (it) { return it.trim(); })
            .filter(function (it) {
            return !it.startsWith('=') &&
                !it.startsWith('![') &&
                !it.startsWith('#') &&
                !it.startsWith('|') &&
                !it.startsWith('--') &&
                !it.startsWith('[');
        });
        var excludedLines = this._findLinesOfCode(strings);
        return strings.filter(function (value, index) { return excludedLines.indexOf(index) === -1; }).join('\n');
    };
    ProjectDetailInfoComponent.prototype._findLinesOfCode = function (strings) {
        var codeLineIndexes = [];
        strings.forEach(function (str, index) {
            if (str.startsWith('```'))
                codeLineIndexes.push(index);
        });
        var result = Array();
        for (var _i = 0; _i < codeLineIndexes.length || ((_i + 1) === codeLineIndexes.length); _i = _i + 2)
            for (var _j = codeLineIndexes[_i]; _j <= codeLineIndexes[_i + 1]; _j++)
                result.push(_j);
        return result;
    };
    return ProjectDetailInfoComponent;
}());
ProjectDetailInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-project-detail-info',
        template: __webpack_require__("../../../../../src/app/project-detail-info/project-detail-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-detail-info/project-detail-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object])
], ProjectDetailInfoComponent);

var _a, _b, _c;
//# sourceMappingURL=project-detail-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-item/project-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-item {\n  box-sizing: border-box;\n  height: 240px;\n  border: 1px solid rgba(204, 204, 204, 0.55);\n  background-color: #FFFFFF;\n  margin-bottom: 30px;\n}\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 17px 20px;\n  border-radius: 2px 2px 0 0;\n  background-color: #F2F4F9;\n}\n\n.name {\n  color: #38C2D7;\n  font-size: 23px; /* todo:xxx in order to full text stays in header */\n  font-weight: 600;\n  line-height: 31px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.category {\n  color: #999999;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: right;\n  padding-left: 10px;\n}\n\n.description {\n  padding: 25px 20px 15px 20px;\n  color: rgba(107, 109, 111, 0.6);\n  color: #999999;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.description p {\n  display: block; /* Fallback for non-webkit */\n  display: -webkit-box;\n  max-width: 400px;\n  height: 75px;\n  line-height: 24px;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 13px 35px 20px;\n}\n\n.language {\n  color: #999999;\n  padding-left: 9px;\n  font-size: 16px;\n  line-height: 20px;\n  padding-right: 9px;\n}\n\n.separator {\n  width: 2px;\n  border: 1px solid #CCCCCC;\n  box-sizing: border-box;\n  height: 10px;\n}\n\n.licence {\n  padding-left: 9px;\n  color: #666666;\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.more-or-less-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n  cursor: pointer;\n}\n\n.more-or-less-block:hover .more-or-less-label {\n  color: #38C2D7; /* todo */\n}\n\n.more-or-less-block:hover .more-or-less-icon {\n  fill: #38C2D7;\n}\n\n.more-or-less-label {\n  text-align: right;\n  padding-right: 4px;;\n  color: #666666;\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.more-or-less-icon {\n  width: 22px;\n  height: 22px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-item/project-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"project-item\">\n  <div class=\"header\">\n    <a href=\"{{project.githubUrl}}\" class=\"name\">{{project.name}}</a>\n    <span class=\"category\">{{project.category}}</span>\n  </div>\n  <div class=\"description\">\n    <p *ngIf=\"project.description == null || project.description.length == 0\">\n      no description\n    </p>\n    <p *ngIf=\"project.description != null && project.description.length > 0\">\n      {{project.description}}\n    </p>\n  </div>\n  <div class=\"footer\">\n    <span class=\"lang-label {{project.language}}\"></span>\n    <span class=\"language\">{{project.language}}</span>\n    <div class=\"more-or-less-block\" (click)=\"selectBlock(project.name)\">\n      <span *ngIf=\"activeProject\" class=\"more-or-less-label\">Less</span>\n      <svg *ngIf=\"activeProject\" class=\"more-or-less-icon\">\n        <path\n          d=\"M14,12 L9,12 L9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 L15,14 C15.2761424,14 15.5261424,13.8880712 15.7071068,13.7071068 C15.8880712,13.5261424 16,13.2761424 16,13 L16,7 C16,6.44771525 15.5522847,6 15,6 C14.4477153,6 14,6.44771525 14,7 L14,7 L14,12 Z\"\n          transform=\"translate(12.000000, 10.000000) rotate(225.000000) translate(-12.000000, -15.000000) \"></path>\n      </svg>\n      <span *ngIf=\"!activeProject\" class=\"more-or-less-label\">More</span>\n      <svg *ngIf=\"!activeProject\" class=\"more-or-less-icon\">\n        <path\n          d=\"M14,12 L9,12 L9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 L15,14 C15.2761424,14 15.5261424,13.8880712 15.7071068,13.7071068 C15.8880712,13.5261424 16,13.2761424 16,13 L16,7 C16,6.44771525 15.5522847,6 15,6 C14.4477153,6 14,6.44771525 14,7 L14,7 L14,12 Z\"\n          transform=\"translate(12.000000, 10.000000) rotate(45.000000) translate(-12.000000, -10.000000) \"></path>\n      </svg>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/project-item/project-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Project__ = __webpack_require__("../../../../../src/app/model/Project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectItemComponent = (function () {
    function ProjectItemComponent(projectService) {
        this.projectService = projectService;
        this.activeProject = false;
    }
    ProjectItemComponent.prototype.ngOnInit = function () {
    };
    ProjectItemComponent.prototype.selectBlock = function (projectName) {
        this.projectService.activeProjectEvent.emit(projectName);
    };
    return ProjectItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProjectItemComponent.prototype, "activeProject", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_Project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_Project__["a" /* Project */]) === "function" && _a || Object)
], ProjectItemComponent.prototype, "project", void 0);
ProjectItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-project-item',
        template: __webpack_require__("../../../../../src/app/project-item/project-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-item/project-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */]) === "function" && _b || Object])
], ProjectItemComponent);

var _a, _b;
//# sourceMappingURL=project-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".projects {\n  margin-top: 33px;\n  margin-left: 55px;\n  margin-right: 55px;\n}\n\n.project-count {\n  height: 23px;\n  width: 298px;\n  color: #6B6D6F;\n  font-size: 16px;\n  line-height: 23px;\n  margin-bottom: 25px;\n  display: block;\n}\n\n.hidden {\n  display: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"projects\">\n  <span class=\"project-count\">\n    <b>{{count}}</b> PROJECTS\n  </span>\n  <div class=\"row\">\n    <div *ngFor=\"let project of firstProjects\" class=\"col-md-4\">\n      <epamghio-project-item\n        [activeProject]=\"project.name === activeProjectName\"\n        [project]=\"project\"></epamghio-project-item>\n    </div>\n    <epamghio-project-detail-info [ngClass]=\"{'col-md-12': true, 'hidden': activeProjectName === ''}\">\n    </epamghio-project-detail-info>\n    <div *ngFor=\"let project of secondProjects\" class=\"col-md-4\">\n      <epamghio-project-item [project]=\"project\"></epamghio-project-item>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_find__ = __webpack_require__("../../../../rxjs/add/operator/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Projects separated on 2 parts - before active project detail info and after.
 */
var ProjectsComponent = (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
        this.activeProjectName = '';
        this.secondProjects = [];
        this.count = 0;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initAllProjects({ orderByAscUpdatedAt: false });
        this.projectService.search$.subscribe(function (request) {
            _this.activeProjectName = '';
            _this.initAllProjects(request);
        });
        this.projectService.activeProjectEvent.subscribe(function (projectName) {
            _this.activeProjectName = _this.activeProjectName === projectName ? '' : projectName;
            var allProjects = _this.getAllProjects();
            _this.divideProjectsOnTwoParts(allProjects, _this.activeProjectName);
            var activeProject = _this.getActiveProject(allProjects, _this.activeProjectName);
            _this.projectService.projectSelectedEvent.emit(activeProject);
        });
    };
    ProjectsComponent.prototype.initAllProjects = function (request) {
        var _this = this;
        this.projectService.search(request)
            .subscribe(function (projects) {
            _this.divideProjectsOnTwoParts(projects, _this.activeProjectName);
            _this.count = _this.getAllProjects().length;
        });
    };
    ProjectsComponent.prototype.getAllProjects = function () {
        return this.firstProjects.concat(this.secondProjects);
    };
    ProjectsComponent.prototype.getActiveProject = function (allProjects, projectName) {
        if (projectName === '')
            return null;
        return allProjects.find(function (it) { return it.name === projectName; });
    };
    ProjectsComponent.prototype.divideProjectsOnTwoParts = function (allProjects, projectName) {
        if (projectName === '') {
            this.firstProjects = allProjects;
            this.secondProjects = [];
        }
        else {
            var indexOfFoundedItem = allProjects.findIndex(function (it) { return it.name === projectName; });
            var countOfItemsBeforeSeparation = this.getCountOfItemsBeforeSeparation(indexOfFoundedItem);
            this.firstProjects = allProjects.slice(0, countOfItemsBeforeSeparation);
            this.secondProjects = allProjects.slice(countOfItemsBeforeSeparation);
        }
    };
    ProjectsComponent.prototype.getCountOfItemsBeforeSeparation = function (foundedElement) {
        return (Math.trunc(foundedElement / 3) + 1) * 3;
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-project/search-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-panel {\n  padding: 15px 0;\n}\n\n.form-control, select {\n  width: 100%;\n}\n\n.search-panel > div:first-child,\n.search-panel > div:last-child{\n  padding-left: 0;\n}\n\n.search-panel > div:last-child {\n  padding-right: 0;\n}\n\ninput, select, input:focus, select:focus {\n  background: rgba(255, 255, 255, 0.1);\n}\n\ninput:focus, select:focus {\n  border-color: rgba(255, 255, 255, 0.1);\n}\n\ninput, input:focus, select, select:focus {\n  color: darkgray;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-project/search-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-panel form-inline\">\n  <div class=\"col-md-9\">\n    <input [formControl]=\"searchInput\" class=\"form-control\" placeholder=\"Filter\">\n  </div>\n  <div class=\"col-md-3\">\n    <select [formControl]=\"languageSelect\" class=\"custom-select\" id=\"inlineFormCustomSelect\">\n      <option *ngFor=\"let language of languages\" [value]=\"language.value\">\n        {{language.name}}\n      </option>\n    </select>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search-project/search-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchProjectComponent = (function () {
    function SearchProjectComponent(projectService) {
        this.projectService = projectService;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('');
        this.languageSelect = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('');
        this.languages = [
            { name: 'Any Language', value: '' },
            { name: 'Java', value: 'java' },
            { name: 'JavaScript', value: 'javascript' },
            { name: 'C++', value: 'c++' },
            { name: 'C', value: 'c' },
            { name: 'Python', value: 'python' },
            { name: 'Html', value: 'html' },
            { name: 'Ruby', value: 'ruby' },
            { name: 'Objective-C', value: 'objective-c' },
            { name: 'Erlang', value: 'erlang' },
            { name: 'C#', value: 'c#' },
            { name: 'CSS', value: 'css' }
        ];
    }
    SearchProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageSelect.valueChanges
            .subscribe(function (value) { return _this.projectService.searchEvent.emit({ language: value }); });
        this.searchInput.valueChanges
            .debounceTime(500)
            .subscribe(function (value) { return _this.projectService.searchEvent.emit({ filter: value }); });
    };
    return SearchProjectComponent;
}());
SearchProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-search-project',
        template: __webpack_require__("../../../../../src/app/search-project/search-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-project/search-project.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */]) === "function" && _a || Object])
], SearchProjectComponent);

var _a;
//# sourceMappingURL=search-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/epam-background.png") + ");\n  background-size: cover;\n  padding-top: 85px;\n  padding-bottom: 85px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.header-text {\n  margin: 0 100px 24px 100px;\n  color: #FFFFFF;\n  font-family: Oswald;\n  font-size: 36px;\n  font-weight: 600;\n  line-height: 48px;\n  text-align: center;\n  text-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\n}\n\n.subheader-text {\n  font-weight: 100;\n  width: 670px;\n  color: #FFFFFF;\n  font-size: 16px;\n  line-height: 23px;\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.intro-text {\n  width: 710px;\n  padding-bottom: 35px;\n  color: #6B6D6F;\n  font-size: 16px;\n  letter-spacing: 1px;\n  line-height: 25px;\n  text-align: center;\n}\n\n.search-block input {\n  padding-left: 40px;\n  margin-right: 5px;\n  width: 586px;\n  line-height: 35px;\n  border: 1px solid #cfd1d2;\n  border-radius: 23px;\n  outline: none;\n}\n\n.search-icon {\n  position: relative;\n  top: 17px;\n  left: 47px;\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  color: blue;\n  background: url(" + __webpack_require__("../../../../../src/assets/search-icon.svg") + ") no-repeat;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n  <span class=\"header-text\">\n    EPAM SYSTEMS BELIEVES IN THE PRINCIPLES AND THE POWER\n    OF FREE AND OPEN-SOURCE SOFTWARE PARADIGM.\n  </span>\n  <h3 class=\"subheader-text\">\n    With tens of projects being developed under open-governance principles, EPAM is fully committed to keep adding value\n    across a broad spectrum of technologies and industrial verticals. The projects in this repository are licensed under\n    commonly recognized software licenses like ALv2, MIT, and GPLv3.\n  </h3>\n  <div class=\"search-block\">\n    <span class=\"search-icon\"></span>\n    <input [formControl]=\"searchInput\" placeholder=\"Start searching project ...\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_project_service__ = __webpack_require__("../../../../../src/app/service/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(projectService) {
        this.projectService = projectService;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('');
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchInput.valueChanges
            .debounceTime(500)
            .subscribe(function (value) { return _this.projectService.searchEvent.emit({ filter: value }); });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'epamghio-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryService = (function () {
    function CategoryService() {
        this.categories = {
            1: 'BigData & Cloud',
            2: 'Life Science',
            3: 'Test & Dev',
            4: 'Misc'
        };
        this.projectNameToCategories = {
            'DLab': 1,
            'Lagerta': 1,
            'NGB': 2,
            'Indigo': 2,
            'indigo-node': 2,
            'ketcher': 2,
            'miew': 2,
            'lifescience': 2,
            'pipeline-builder': 2,
            'JDI': 3,
            'JDI-Examples': 3,
            'Merlin': 3,
            'Wilma': 3,
            'Gepard': 3,
            'lib-obj-c-attr': 4,
            'OneDrive-L': 4,
            'java-cme-mdp3-handler': 4,
            'parso': 4,
            'htsjdk-s3-plugin': 4,
            'Sitecore-Reference-Storefront-on-Habitat': 4,
            'libdt': 4,
            'Constellation': 4,
            'road-ios-framework': 4,
            'road-ios-logging': 4,
            'nfstrace': 4,
            'Rapier': 4,
            'xframework': 4
        };
    }
    CategoryService.prototype.getCategory = function (projectName) {
        return this.categories[this.projectNameToCategories[projectName] || 4];
    };
    CategoryService.prototype.relatesToCategory = function (name, category) {
        if (category === 0)
            return true;
        return category === (this.projectNameToCategories[name] || 0);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CategoryService);

//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_skip__ = __webpack_require__("../../../../rxjs/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_skip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_skip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toArray__ = __webpack_require__("../../../../rxjs/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_count__ = __webpack_require__("../../../../rxjs/add/operator/count.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_count___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_count__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_publishReplay__ = __webpack_require__("../../../../rxjs/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_publishReplay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_publishReplay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__model_Language__ = __webpack_require__("../../../../../src/app/model/Language.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ProjectService = ProjectService_1 = (function () {
    function ProjectService(http, categoryService) {
        this.http = http;
        this.categoryService = categoryService;
        this.searchEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.search$ = this.searchEvent.scan(function (acc, curr) { return Object.assign({}, acc, curr); }, {});
        this.activeProjectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.projectSelectedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProjectService.shortLanguagesListIfNeeded = function (nameWithNumbers) {
        return nameWithNumbers.length > 3
            ? nameWithNumbers.slice(0, 3).concat(new NameWithNumber('Others', nameWithNumbers.slice(3).reduce(function (acc, it) { return acc + it.num; }, 0)))
            : nameWithNumbers;
    };
    ProjectService.prototype.search = function (searchObject) {
        var _this = this;
        var filter = searchObject.filter || '';
        var language = searchObject.language || '';
        var category = searchObject.category || 0;
        var sortOrder = searchObject.orderByAscUpdatedAt;
        var queryParam = "q=org:epam+" + filter + "+in:name+in:readme+in:description";
        if (language)
            queryParam += "+language:" + language;
        var request = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["d" /* Request */]({ url: 'https://fakeuser2901:SomeFakePassword@api.github.com/search/repositories', params: queryParam });
        request.method = __WEBPACK_IMPORTED_MODULE_11__angular_http__["e" /* RequestMethod */].Get;
        request.headers = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var compareFn = sortOrder
            ? (function (a, b) { return a.updatedAt.unix() - b.updatedAt.unix(); })
            : (function (a, b) { return b.updatedAt.unix() - a.updatedAt.unix(); });
        return this.http.request(request)
            .map(function (resp) { return resp.json().items; })
            .mergeMap(function (it) { return it; })
            .map(function (it) {
            return {
                id: it['id'],
                name: it['name'],
                category: _this.categoryService.getCategory(it['name']),
                language: it['language'],
                description: it['description'],
                githubUrl: it['html_url'],
                updatedAt: __WEBPACK_IMPORTED_MODULE_14_moment__(it['updated_at']),
                forkCount: it['forks_count'],
                issueCount: it['open_issues_count'],
                org: it['owner'].login
            };
        })
            .filter(function (it) { return _this.categoryService.relatesToCategory(it.name, category); })
            .toArray()
            .map(function (it) { return it.sort(compareFn); })
            .publishReplay(1).refCount();
    };
    ProjectService.prototype.getLanguages = function (repoName) {
        var _this = this;
        return this.http.get("https://fakeuser2901:SomeFakePassword@api.github.com/repos/epam/" + repoName + "/languages")
            .map(function (resp) { return resp.json(); })
            .map(function (it) { return _this.processLanguagesObject(it); });
    };
    ProjectService.prototype.processLanguagesObject = function (langJson) {
        var nameWithNumbers = Object.keys(langJson)
            .map(function (name) { return new NameWithNumber(name, langJson[name]); });
        var sum = nameWithNumbers
            .reduce(function (result, nameWithNumber) { return result + nameWithNumber.num; }, 0);
        nameWithNumbers = ProjectService_1.shortLanguagesListIfNeeded(nameWithNumbers);
        return this.getPercentOfCodeFromLinesOfCode(nameWithNumbers, sum)
            .filter(function (it) { return it.percent > 0.01; });
    };
    ProjectService.prototype.getPercentOfCodeFromLinesOfCode = function (nameWithNumbers, sum) {
        var languages = [];
        var tempSumInPercent = 0.0;
        var index = 0;
        var lastIndex = nameWithNumbers.length - 1;
        nameWithNumbers.forEach(function (it) {
            var percent = (lastIndex === index)
                ? ((Math.trunc(100 - tempSumInPercent) * 100) / 100)
                : (Math.trunc((it.num * 100 / sum) * 100) / 100);
            tempSumInPercent += percent;
            languages.push(new __WEBPACK_IMPORTED_MODULE_13__model_Language__["a" /* Language */](it.name, percent));
            index++;
        });
        return languages;
    };
    ProjectService.prototype.getContributorCount = function (repoName) {
        return this.http.get("https://fakeuser2901:SomeFakePassword@api.github.com/repos/epam/" + repoName + "/contributors")
            .map(function (resp) { return resp.json(); })
            .flatMap(function (it) { return it; })
            .count(function (it) { return true; })
            .map(function (it) { return it.toString(); });
    };
    return ProjectService;
}());
ProjectService = ProjectService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_12__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__category_service__["a" /* CategoryService */]) === "function" && _b || Object])
], ProjectService);

var NameWithNumber = (function () {
    function NameWithNumber(name, num) {
        this.name = name;
        this.num = num;
    }
    return NameWithNumber;
}());
var ProjectService_1, _a, _b;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/assets/epam-background.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "epam-background.30620d2f1d1091dc0868.png";

/***/ }),

/***/ "../../../../../src/assets/epam-logo.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "epam-logo.94d8d8ccbb5b1f946e0c.svg";

/***/ }),

/***/ "../../../../../src/assets/search-icon.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search-icon.fd10e8d0cd70ca79c69f.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../marky-markdown/lib recursive ^.*\\/package\\.json$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../marky-markdown/lib recursive ^.*\\/package\\.json$";

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map