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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_new_component_1 = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
var appointment_component_1 = __webpack_require__("../../../../../src/app/appointment/appointment.component.ts");
var appointment_new_component_1 = __webpack_require__("../../../../../src/app/appointment/appointment-new/appointment-new.component.ts");
var appointment_list_component_1 = __webpack_require__("../../../../../src/app/appointment/appointment-list/appointment-list.component.ts");
var routes = [
    { path: 'user', component: user_component_1.UserComponent, children: [
            { path: 'new', component: user_new_component_1.UserNewComponent }
        ] },
    { path: 'dashboard', component: appointment_component_1.AppointmentComponent, children: [
            { path: '', component: appointment_list_component_1.AppointmentListComponent }
        ] },
    { path: 'appointment', component: appointment_component_1.AppointmentComponent, children: [
            { path: 'new', component: appointment_new_component_1.AppointmentNewComponent }
        ] },
    { path: '', pathMatch: 'full', component: user_component_1.UserComponent, children: [
            { path: '', pathMatch: 'full', component: user_new_component_1.UserNewComponent }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser(function (user) {
            if (!user) {
                return _this._router.navigate(['/']);
            }
            return _this._router.navigate(['/dashboard']);
        }, function (err) { console.log(err); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_new_component_1 = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var user_logout_component_1 = __webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.ts");
var appointment_component_1 = __webpack_require__("../../../../../src/app/appointment/appointment.component.ts");
var appointment_new_component_1 = __webpack_require__("../../../../../src/app/appointment/appointment-new/appointment-new.component.ts");
var appointment_list_component_1 = __webpack_require__("../../../../../src/app/appointment/appointment-list/appointment-list.component.ts");
var appointment_service_1 = __webpack_require__("../../../../../src/app/appointment/appointment.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                user_new_component_1.UserNewComponent,
                user_logout_component_1.UserLogoutComponent,
                appointment_component_1.AppointmentComponent,
                appointment_new_component_1.AppointmentNewComponent,
                appointment_list_component_1.AppointmentListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [user_service_1.UserService, appointment_service_1.AppointmentService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/appointment/appointment-list/appointment-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-appointment-btn {\r\n    background: blue;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appointment/appointment-list/appointment-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-logout></app-user-logout>\n\n<h1>Doctor's Appointments</h1>\n\n<table>\n  <thead>\n    <tr>\n      <th>Date</th>\n      <th>Time</th>\n      <th>Patient Name</th>\n      <th>Complaint</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let appointment of appointments\">\n      <td>{{ appointment.date | date:'longDate' }}</td>\n      <td>{{ appointment.time }}</td>\n      <td>{{ appointment._user.name }}</td>\n      <td>{{ appointment.complaint }}</td>\n      <td><button \n        *ngIf=\"user._id == appointment._user._id\" \n        (click)=\"deleteAppointment(appointment._id)\"\n      >Cancel</button></td>\n    </tr>\n  </tbody>\n</table>\n\n<div class=\"new-appointment\">\n    <button \n      [routerLink]=\"['/appointment', 'new']\" \n      class=\"new-appointment-btn\"\n    >Add New Appointment</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/appointment/appointment-list/appointment-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var appointment_service_1 = __webpack_require__("../../../../../src/app/appointment/appointment.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var AppointmentListComponent = /** @class */ (function () {
    function AppointmentListComponent(_userService, _appointmentService, _router) {
        this._userService = _userService;
        this._appointmentService = _appointmentService;
        this._router = _router;
        this.user = new user_1.User();
    }
    AppointmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser(function (user) {
            if (!user)
                return _this._router.navigate(['/']);
            return _this.user = user;
        }, function (err) { console.log(err); });
        this._appointmentService.retrieveAppointments(function (appointments) {
            _this.appointments = appointments;
        }, function (err) { console.log(err); });
    };
    AppointmentListComponent.prototype.deleteAppointment = function (apptID) {
        var _this = this;
        this._appointmentService.deleteAppointment(apptID, function (appointment) {
            _this._appointmentService.retrieveAppointments(function (appointments) {
                _this.appointments = appointments;
            }, function (err) { console.log(err); });
        }, function (err) { console.log(err); });
    };
    AppointmentListComponent = __decorate([
        core_1.Component({
            selector: 'app-appointment-list',
            template: __webpack_require__("../../../../../src/app/appointment/appointment-list/appointment-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appointment/appointment-list/appointment-list.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, appointment_service_1.AppointmentService, router_1.Router])
    ], AppointmentListComponent);
    return AppointmentListComponent;
}());
exports.AppointmentListComponent = AppointmentListComponent;


/***/ }),

/***/ "../../../../../src/app/appointment/appointment-new/appointment-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appointment/appointment-new/appointment-new.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>New Appointment</h1>\n\n<form\n  (submit)=\"onSubmit(); createAppointment.resetForm()\"\n  #createAppointment=\"ngForm\"\n>\n  <p>\n  <label>Date: </label>\n  <input \n    type=\"datetime-local\" \n    name=\"datetime\"\n    required\n    min=\"{{ currentDate }}\"\n    [(ngModel)]=\"appointment.datetime\"\n    #date=\"ngModel\"\n  />\n  </p>\n  <small *ngIf=\"errors != null\">{{ errors | json }}</small>\n\n  <p>\n  <label>Complaint</label><br>\n  <textarea\n    cols=\"50\"\n    rows=\"4\"\n    type=\"text\"\n    name=\"complaint\"\n    required\n    minlength=\"10\"\n    maxlength=\"200\"\n    [(ngModel)]=\"appointment.complaint\"\n    #complaint=\"ngModel\"\n  ></textarea>\n  <br><span *ngIf=\"complaint.errors != null\">{{ complaint.errors | json }}</span>\n  </p>\n\n  <p>\n  <button [routerLink]=\"['/dashboard']\">Cancel</button>\n  <button type=\"submit\" [disabled]=\"!createAppointment.valid\">Create Appointment</button>\n  </p>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/appointment/appointment-new/appointment-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var appointment_service_1 = __webpack_require__("../../../../../src/app/appointment/appointment.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var appointment_1 = __webpack_require__("../../../../../src/app/appointment/appointment.ts");
var AppointmentNewComponent = /** @class */ (function () {
    function AppointmentNewComponent(_appointmentService, _router) {
        this._appointmentService = _appointmentService;
        this._router = _router;
    }
    AppointmentNewComponent.prototype.ngOnInit = function () {
        this.appointment = new appointment_1.Appointment();
        this.currentDate = new Date().toISOString().substr(0, 10);
    };
    AppointmentNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._appointmentService.createAppointment(this.appointment, function (appointment) { _this._router.navigate(['/dashboard']); }, function (err) {
            console.log('errors:', err);
            _this.errors = err.message;
        });
    };
    AppointmentNewComponent = __decorate([
        core_1.Component({
            selector: 'app-appointment-new',
            template: __webpack_require__("../../../../../src/app/appointment/appointment-new/appointment-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appointment/appointment-new/appointment-new.component.css")]
        }),
        __metadata("design:paramtypes", [appointment_service_1.AppointmentService, router_1.Router])
    ], AppointmentNewComponent);
    return AppointmentNewComponent;
}());
exports.AppointmentNewComponent = AppointmentNewComponent;


/***/ }),

/***/ "../../../../../src/app/appointment/appointment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appointment/appointment.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/appointment/appointment.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent() {
    }
    AppointmentComponent.prototype.ngOnInit = function () {
    };
    AppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-appointment',
            template: __webpack_require__("../../../../../src/app/appointment/appointment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appointment/appointment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppointmentComponent);
    return AppointmentComponent;
}());
exports.AppointmentComponent = AppointmentComponent;


/***/ }),

/***/ "../../../../../src/app/appointment/appointment.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var AppointmentService = /** @class */ (function () {
    function AppointmentService(_http) {
        this._http = _http;
        this.appointments = [];
    }
    AppointmentService.prototype.createAppointment = function (appointment, callback, errorback) {
        var _this = this;
        this._http.post('/appointments', appointment).subscribe(function (res) {
            var appointment = res.json();
            _this.appointments.push(appointment);
            callback(appointment);
        }, function (err) { errorback(err.json()); });
    };
    AppointmentService.prototype.retrieveAppointments = function (callback, errorback) {
        var _this = this;
        this._http.get('/appointments').subscribe(function (res) {
            var appointments = res.json();
            _this.appointments = appointments;
            callback(appointments);
        }, function (err) { errorback(err.json()); });
    };
    AppointmentService.prototype.deleteAppointment = function (apptID, callback, errorback) {
        this._http.delete('/appointments/' + apptID).subscribe(function (res) { callback(res.json()); }, function (err) { errorback(err.json()); });
    };
    AppointmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppointmentService);
    return AppointmentService;
}());
exports.AppointmentService = AppointmentService;


/***/ }),

/***/ "../../../../../src/app/appointment/appointment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Appointment = /** @class */ (function () {
    function Appointment() {
    }
    return Appointment;
}());
exports.Appointment = Appointment;


/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"logout()\">Logout</button>"

/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var UserLogoutComponent = /** @class */ (function () {
    function UserLogoutComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    UserLogoutComponent.prototype.ngOnInit = function () {
    };
    UserLogoutComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            console.log(res);
            _this._router.navigate(['/']);
        }, function (err) { console.log(err); });
    };
    UserLogoutComponent = __decorate([
        core_1.Component({
            selector: 'app-user-logout',
            template: __webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], UserLogoutComponent);
    return UserLogoutComponent;
}());
exports.UserLogoutComponent = UserLogoutComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form\n    (submit)=\"onSubmit(); createForm.resetForm()\"\n    #createUser=\"ngForm\"\n  >\n    <label>Name:</label>\n    <input\n      type=\"text\"\n      name=\"name\"\n      required\n      minlength=\"4\"\n      maxlength=\"30\"\n      [(ngModel)]=\"user.name\"\n      #name=\"ngModel\"\n    />\n    <small\n      class=\"errors\"\n      [hidden]=\"name.valid || (name.untouched && !createUser.submitted)\"\n    >Name required minimum length of 4</small>\n\n    <button\n      class=\"user-new-submit\"\n      [disabled]=\"!createUser.valid\"\n    >Enter</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var UserNewComponent = /** @class */ (function () {
    function UserNewComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    UserNewComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
        if (this._userService.currentUser) {
            this._router.navigate(['/dashboard']);
        }
    };
    UserNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.createUser(this.user, function (user) { _this._router.navigate(['/dashboard']); }, function (err) { console.log(err); });
        this.user = new user_1.User();
    };
    UserNewComponent = __decorate([
        core_1.Component({
            selector: 'app-user-new',
            template: __webpack_require__("../../../../../src/app/user/user-new/user-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-new/user-new.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], UserNewComponent);
    return UserNewComponent;
}());
exports.UserNewComponent = UserNewComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.createUser = function (user, callback, errorback) {
        var _this = this;
        this._http.post('/users', user).subscribe(function (res) {
            var user = res.json();
            _this.currentUser = user;
            callback(_this.currentUser);
        }, function (err) { errorback(err); });
    };
    UserService.prototype.getCurrentUser = function (callback, errorback) {
        var _this = this;
        this._http.get('/sessions').subscribe(function (res) {
            var user = res.json();
            if (user) {
                _this.currentUser = user;
            }
            callback(user);
        }, function (err) { errorback(err); });
    };
    UserService.prototype.logout = function (callback, errorback) {
        var _this = this;
        this._http.delete('/sessions').subscribe(function (res) {
            _this.currentUser = null;
            callback(res.json());
        }, function (err) { errorback(err); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
;


/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.appointments = [];
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map