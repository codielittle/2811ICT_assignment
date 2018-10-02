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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'groups/:username', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_2__["GroupsComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] },
    { path: 'config', component: _config_config_component__WEBPACK_IMPORTED_MODULE_5__["ConfigComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"container\">\n\n  <input id=\"userInput\" (keyup.enter)=\"newUser(myValue)\" type=\"text\" [(ngModel)]=\"myValue\" placeholder=\"Please enter a username: \"/>\n  <br>\n\n  <button id=\"newUserButton\" (click)=\"newUser(myValue)\">Submit</button>\n\n\n</div> -->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(chatService, http, router) {
        this.http = http;
        this.router = router;
        this.title = 'app';
        this.myValue = '';
        this.url = 'http://localhost:3000';
        this.isUser = false;
    }
    AppComponent.prototype.newUser = function (newstring) {
        var _this = this;
        this.http.get(this.url + "/api/auth?username=" + newstring).subscribe(function (data) {
            if (data.success) {
                //Is a valid user
                _this.isUser = true;
                console.log(_this.isUser);
                _this.router.navigateByUrl('/groups');
            }
            else {
                // Not a valid user
                console.log("other");
            }
        });
        this.username = newstring;
        localStorage.setItem("username", newstring);
        this.myValue = "";
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_8__["GroupsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _config_config_component__WEBPACK_IMPORTED_MODULE_11__["ConfigComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// export interface user {
//   username: string;
//   success: number;
//   auth: any;
// }
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    AuthService.prototype.login = function (username, password) {
        return this.http.post('/api/auth', { username: username, password: password });
    };
    AuthService.prototype.newUser = function (username, password, auth) {
        return this.http.post('/api/register', { username: username, password: password, auth: auth });
    };
    AuthService.prototype.newChannel = function (channelname, groupname) {
        return this.http.post('/api/newchannel', { group: groupname, channel: channelname });
    };
    AuthService.prototype.newGroup = function (groupname) {
        return this.http.post('/api/newgroup', { group: groupname });
    };
    AuthService.prototype.addUser = function (username, channel, group) {
        return this.http.post('/api/adduser', { username: username, channel: channel, group: group });
    };
    AuthService.prototype.fetch = function (username) {
        console.log("FETCH!");
        return this.http.post('/api/fetch', { username: username });
    };
    AuthService.prototype.returnData = function (username) {
        this.http.get(this.url + "/api/fetch?username=" + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return console.log("Testing" + res); }));
    };
    AuthService.prototype.something = function () {
        var _this = this;
        return this.http.get('/api/get').map(function (result) { return _this.result = JSON.stringify(result); });
    };
    AuthService.prototype.getUserData = function () {
        return this.http.get('/api/fetchdata')
            .toPromise()
            .then(function (response) { return JSON.stringify(response); })
            .catch(Error);
    };
    AuthService.prototype.getsomeData = function () {
        return this.http.get('/api/get').map(function (res) { return res; });
    };
    AuthService.prototype.getData = function () {
        var something = this.http.get('/api/get').map(function (response) { return console.log(response); });
        return something;
    };
    AuthService.prototype.somefunction = function () {
        return this.http.get('/api/get')
            .toPromise()
            .then(function (response) { return JSON.stringify(response); })
            .catch(Error);
        //.map((res : Response) => console.log("Testing " + JSON.stringify(res.json)));
    };
    AuthService.prototype.message = function (username, group, channel, message) {
        return this.http.post('/api/message', { username: username, group: group, channel: channel, message: message });
    };
    AuthService.prototype.getMessages = function (channel) {
        return this.http.post('/api/getmessages', { channel: channel });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
        this.socket.emit('test', 'hello world');
    }
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chat_history{\n  margin-top: 9px;\n  margin-left: 5%;\n  margin-right: 5%;\n\n  border: 1px solid black;\n  background-color: #FFF;\n  /* padding: 20px; */\n  overflow: scroll;\n  border-radius:5px;\n  width: 90%;\n}\n.linkText{\n  background-color: green;\n  text-decoration: none;\n}\n.chatMessages{\n  background-color: #FFF;\n  margin-left: 80px;\n  padding-top: 10px;\n\n}\n.headText{\n  margin-left: 30px;\n  padding-top: 15px;\n  font-size: 24px;\n  float:left;\n}\n/* .isAdmin {\n  background-color: #d8d8d8;\n} */\n/* a {\n  background-color: red;\n} */\n#message{\n    margin-top: 10px;\n    height: 80px;\n    width: 75%;\n    margin-left: 12.5%;\n    background-color: white;\n    border: 1px solid black;\n}\n.typeArea{\n  margin-top: 25px;\n  height: 130px;\n  width: 100%;\n\n}\n.arrow-up2 {\n  width: 0;\n  height: 0;\n  margin-left: 250px;\n  border-left: 9px solid transparent;\n  border-right: 9px solid transparent;\n  border-bottom: 9px solid #d6d6d6;\n\n}\n.subitMessageButton{\n  margin-top: 5px;\n  margin-left: 43%;\n  width: 14%;\n  height: 30px;\n  background-color: white;\n}\n.deleteChannelButton{\n  float: right;\n  width: 6%;\n  height: 30px;\n  margin-right: 30px;;\n  background-color: red;\n}\n/* #buttonDiv{\n  float: right;\n  background-color: red;\n  width: 100px;\n  height: 40px;\n} */\n.right {\n  text-align: right;\n}\n.left {\n  text-align: left;\n}\n.nav {\n  width: 100%;\n  height: 60px;\n  background-color: white;\n  border: 1px solid grey;\n}\n.buttons{\n  cursor: pointer;\n  float: right;\n  color: #fff;\n  text-align: center;\n  background-color: #4eb8dd;\n  border: 1px solid black;\n  padding: 10px 10px;\n\n\n  margin-right: 10px;\n\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 4px;\n\n}\n.buttons:hover {\n  background-color: #3c99b9;\n}\n.btn-group{\n\n  padding-bottom: 15px;\n  margin-top: 5px;\n  margin-right: 30px;\n\n  width: 600px;\n\n  float: right; /* Float the buttons side by side */\n\n}\n.close-icon\n{\n  cursor: pointer;\n  margin-bottom: 60px;\n  margin-right: 60px;\n  display:inline;\n  font-size: 20px;\n  float: right;\n  width:35px;\n  height:35px;\n  border-width:3px;\n  border-style: solid;\n  border-color:black;\n  border-radius:100%;\n  background-color:red;\n  box-shadow:0px 0px 5px 2px rgba(0,0,0,0.5);\n\n}\n.input {\n  width: 100%;\n  padding: 12px 12px;\n  box-sizing: border-box;\n/*   background-color: #eee; */\n  background-color: #eff3f4;\n  border: 1.5px solid transparent;\n  font-size: 16px;\n  border-radius: 3px;\n  transition: 0.2s ease-in;\n}\n.input:focus {\n  outline: none;\n  border-color: #4eb8dd;\n}\n.input-group {\n  margin: 0 0 24px 0;\n}\n.label {\n  font-size: 14px;\n  display: block;\n  margin: 2px 0 6px 2px;\n  font-weight: bold;\n  color: #616161;\n}\n.label-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.login-btn {\n  width: 100%;\n  color: #fff;\n  text-align: center;\n  background-color: #4eb8dd;\n  border: 1px solid transparent;\n  padding: 12px 12px;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.login-btn:hover {\n  background-color: #3c99b9;\n}\n.form-wrapper {\n  background-color: #fff;\n  /* min-height: 300px; */\n  width: 340px;\n  margin: 0;\n  box-shadow: 2px 4px 6px #ededed;\n  /* border: 1px solid #eee; */\n  border: 2px solid #d6d6d6;\n  padding: 30px 25px;\n  border-radius: 3px;\n}\n.removeDiv {\n  /* border-style: solid;\n  border-width: 3px; */\n  /* background-color: #eff3f4; */\n  margin-bottom: 20px;\n  float:right;\n  margin-right: 5%;\n\n}\n.addDiv {\n  margin-bottom: 20px;\n  float: right;\n  margin-right: 10%;\n}\n"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"nav\">\n    <span class=\"headText\"><u>{{ groupName }}/<b>{{ channel_name }}</b></u></span>\n    <div *ngIf=\"auth == 0 || auth == 1\">\n      <div class=\"btn-group\">\n      <button class=\"buttons\" (click)=\"logout()\" style=\"background-color:#c43636\">Logout</button>\n      <button (click)=\"toggleRemove()\" class=\"buttons\" style=\"background-color:black\">Remove User</button>\n      <button (click)=\"toggleAdd()\" class=\"buttons\" style=\"background-color:#1f9134\">Add User</button>\n      <button (click)=\"back()\" class=\"buttons\" style=\"background-color:#12dfdd\">Back</button>\n\n\n      </div>\n    </div>\n\n    <div *ngIf=\"auth == 2\">\n      <div class=\"btn-group\">\n      <button class=\"buttons\" (click)=\"logout()\" style=\"background-color:#c43636\">Logout</button>\n\n\n      <!-- <h3 class=\"userName\">User: {{username}}</h3> -->\n      </div>\n    </div>\n\n  </div>\n\n\n\n     <!--    Display form to remove a user from this channel. TODO: Only show if the user is auth LVL 0 or 1 -->\n  <div class=\"removeDiv\" *ngIf=\"showVar\">\n    <div class=\"arrow-up2\"></div>\n    <div class=\"login-container\">\n\n      <div class=\"form-wrapper\">\n\n        <div class=\"form\">\n          <div class=\"input-group\">\n            <label for=\"username\" class=\"label\">Username</label>\n            <input type=\"text\" (keyup.enter)=\"removeUser()\" [(ngModel)]=\"removeUsername\" class=\"input\" placeholder=\"Remove a user from this channel:\">\n          </div>\n\n          <button type=\"submit\" class=\"login-btn\" style=\"background-color:#c43636\" (click)=\"removeUser()\">Delete User</button> <br>\n          <div id=\"error\">{{result}}</div>\n        </div>\n\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"addDiv\" *ngIf=\"showVar2\">\n    <div class=\"arrow-up2\"></div>\n    <div class=\"login-container\">\n\n      <div class=\"form-wrapper\">\n\n        <div class=\"form\">\n          <div class=\"input-group\">\n            <label for=\"username\" class=\"label\">Username</label>\n            <input type=\"text\" (keyup.enter)=\"addUser()\" [(ngModel)]=\"addUsername\" class=\"input\" placeholder=\"Add a user to this channel:\">\n          </div>\n\n          <button type=\"submit\" class=\"login-btn\" style=\"background-color:#1f9134\" (click)=\"addUser()\">Add User</button> <br>\n          <div id=\"error\">{{result}}</div>\n        </div>\n\n\n      </div>\n    </div>\n\n  </div>\n  <!-- <div id=\"btn-group\">\n    <button (click)=\"logout()\">Logout</button>\n    <button>Add/Edit Users</button>\n  </div> -->\n  <!-- <u>{{ groupName }}/<b>{{ channel_name }}</b></u> -->\n\n  <div id=\"chat_history\" style=\"height: 400px\">\n    <!-- if authorised, on click, admin will be alerted to see if they want to remove the user from the group -->\n    <!-- TODO: Or, if auth, show config button which will open a new page (maybe modal) which will list the users in that\n    group. From there, on click, the user will be removed.\n         TODO: Or, show a list of users on the left, a list of groups on the right. All of these will be radio (or maybe checkboxes)\n         after the admin selects a pair (or more ^), submit the data and either add or remove the user.\n    -->\n\n\n    <!-- <div class=\"chatMessages\" *ngFor=\"let message of messages\">\n      {{ message.text }}\n    </div> -->\n    <div class=\"chatMessages\" *ngFor=\"let message of messages\">\n      <div *ngIf=\"auth == 0 || auth == 1\">\n        {{message.text}}\n      <!-- Navigate to config\n\n      <a (click)=\"openConfig(message.text)\" style=\"cursor: pointer\"><u>{{message.text}}</u></a>\n      CHECK IF CLICKED ON SELF - OR MAYBE ALLOW SA TO DELETE GROUPS FROM ITSELF -->\n\n\n\n      </div>\n\n      <div *ngIf=\"auth == 2\">\n        {{message.text}}\n      <!-- Else just regular -->\n      </div>\n\n    </div>\n\n\n\n\n  </div>\n\n  <div class=\"typeArea\">\n  <input [(ngModel)]=\"message\" (keyup.enter)=\"sendMessage(messsage)\" type=\"text\" placeholder=\"message\" id=\"message\" name=\"message\" class=\"form-control\">\n  <button (click)=\"sendMessage(message)\" class=\"subitMessageButton\">Send</button>\n\n  </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(authService, sockServer, router, _location, http) {
        this.authService = authService;
        this.sockServer = sockServer;
        this.router = router;
        this._location = _location;
        this.http = http;
        this.messages = [];
        this.message = '';
        this.labMessages = [];
        this.groupName = '';
        this.showVar = false;
        this.showVar2 = false;
        this.channel_name = '';
        this.url = 'http://localhost:3000';
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get local data
        this.channel_name = localStorage.getItem('channelName');
        this.username = localStorage.getItem('currentUser');
        this.groupName = localStorage.getItem('groupName');
        this.auth = Number(localStorage.getItem('user_auth'));
        console.log("Channel " + this.channel_name);
        console.log("Username " + this.username);
        console.log("Group " + this.groupName);
        console.log("Auth " + this.auth);
        console.log("Chat session started for user: " + this.username);
        //Get messages
        this.connection = this.sockServer.getMessages().subscribe(function (message) {
            _this.messages.push(message);
            _this.message = '';
            console.log(_this.messages);
        });
        this.sockServer.joinChannel(this.channel_name, this.username);
        this.getMsg();
    };
    ChatComponent.prototype.getMsg = function () {
        var _this = this;
        this.authService.getMessages(this.channel_name).subscribe(function (data) {
            //console.log("SOMETHING HAS HAPPENED");
            //console.log(data['data']);
            _this.messages = [];
            for (var i = 0; i < data['data'].length; i++) {
                _this.msgString = "@" + data['data'][i].username + ': ' + data['data'][i].message;
                _this.messages.push({
                    'type': "message",
                    'text': _this.msgString
                });
                _this.msgString = '';
            }
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        //Send message to socket service
        if (this.message != '') {
            this.sockServer.sendMessage('@' + this.username + ': ' + this.message);
        }
        this.authService.message(this.username, this.groupName, this.channel_name, this.message).subscribe(function (data) {
            console.log("New Message");
        }, function (error) {
            console.log("Error");
        });
        console.log("MESSAGES ARRAY");
        console.log(this.messages);
        this.getMsg();
    };
    //Unsubscribe from connection
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.connection) {
            this.connection.unsubscribe();
        }
    };
    //Clear local storage and navigate back to the root
    ChatComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('');
    };
    //Toggles user remove form
    ChatComponent.prototype.toggleRemove = function () {
        this.showVar = !this.showVar;
        if (this.showVar2) {
            this.showVar2 = !this.showVar2;
        }
    };
    //Toggles user add form
    ChatComponent.prototype.toggleAdd = function () {
        this.showVar2 = !this.showVar2;
        if (this.showVar) {
            this.showVar = !this.showVar;
        }
    };
    ChatComponent.prototype.back = function () {
        this.router.navigateByUrl('/groups?username=' + this.username, { skipLocationChange: true });
    };
    //Sends a request to the server to add the specified user to the current group that is being viewed
    ChatComponent.prototype.addUser = function () {
        var _this = this;
        this.http.get(this.url + "/api/adduser?username=" + this.addUsername + "&group=" + this.groupName).subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.result = "Success";
            }
            else {
                _this.result = "Error";
            }
        });
    };
    //Sends a request to the server to remove the specified user from the current channel that is being viewed
    ChatComponent.prototype.removeUser = function () {
        var _this = this;
        this.http.get(this.url + "/api/delete?username=" + this.removeUsername + "&group=" + this.groupName + "&channel=" + this.channel_name).subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.result = "Success";
            }
            else {
                _this.result = "Error";
            }
        });
        this.router.navigateByUrl('/groups/' + this.username, { skipLocationChange: true });
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/config/config.component.css":
/*!*********************************************!*\
  !*** ./src/app/config/config.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: white;\n  width: 100%;\n  height: 400px;\n}\n.leftContent {\n  float: left;\n  padding-left: 10px;\n}\n.rightContent {\n  float: right;\n  padding-right: 40px;\n}\n#errorMessage {\n  text-decoration: underline;\n}\n"

/***/ }),

/***/ "./src/app/config/config.component.html":
/*!**********************************************!*\
  !*** ./src/app/config/config.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1><u>Config Mode</u></h1>\n  <span id=\"errorMessage\">{{errorMessage}}</span>\n  <br>\n  <span class=\"leftContent\">\n    <h3>The user is currently subscribed to the following groups: </h3>\n    <ul *ngFor=\"let group of data\">\n\n\n      <li>{{group}}</li>\n\n\n\n    </ul>\n  </span>\n  <span class=\"rightContent\">\n    <h3>Select a group to enroll user _____ in: </h3>\n    <ul *ngFor=\"let group of fullData\">\n\n\n      <label>\n        <input type=\"radio\" name=\"left_group\" [value]='group' [(ngModel)]=\"right_radioSelected\">\n        {{group}}\n      </label>\n      <br>\n    </ul>\n  </span>\n  <br>\n\n</div>\n<button (click)=\"go(left_radioSelected, right_radioSelected)\">Submit</button>\n\n<button (click)=\"logout()\">Logout</button>\n"

/***/ }),

/***/ "./src/app/config/config.component.ts":
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'http://localhost:3000';
        this.data = [];
        this.fullData = [];
    }
    //testData = ['Group', 'Group2', 'Group3', 'Group4', 'Group5', 'Group6'];
    ConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem("targetUser");
        // TODO: Now gather all the groups the user is subscribed to and put that on the left, and gather the master list
        //       Of groups and list them on the right.
        //Get user's groups
        this.http.get(this.url + "/api/groups?username=" + user).subscribe(function (res) {
            for (var k = 0; k < res['groups'].length; k++) {
                _this.data.push(res['groups'][k]);
            }
            console.log(_this.data);
        });
        this.http.get(this.url + "/api/getgroups").subscribe(function (res) {
            for (var k = 0; k < res['groups'].length; k++) {
                _this.fullData.push(res['groups'][k]);
            }
        });
    };
    ConfigComponent.prototype.go = function (left, right) {
        if (left == right) {
            this.errorMessage = "The user is already in this group";
        }
    };
    ConfigComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('');
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/config/config.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/groups/groups.component.css":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listClass{\n\n  /* background-color: red; */\n}\n.leftDiv{\n  float: left;\n  width: 40%;\n}\n.label {\n  padding-left: 30px;\n}\n.rightDiv {\n  /* border-style: solid;\n  border-width: 3px; */\n  /* background-color: #eff3f4; */\n  float:right;\n  margin-right: 90px;\n\n}\n.nav {\n  width: 100%;\n  height: 60px;\n  background-color: white;\n  border: 1px solid grey;\n}\n.arrow-up {\n  width: 0;\n  height: 0;\n  margin-left: 125px;\n  border-left: 9px solid transparent;\n  border-right: 9px solid transparent;\n  border-bottom: 9px solid #d6d6d6;\n\n}\n.arrow-up2 {\n  width: 0;\n  height: 0;\n  margin-left: 15px;\n  border-left: 9px solid transparent;\n  border-right: 9px solid transparent;\n  border-bottom: 9px solid #d6d6d6;\n\n}\n.arrow-up3 {\n  width: 0;\n  height: 0;\n  margin-left: 280px;\n  border-left: 9px solid transparent;\n  border-right: 9px solid transparent;\n  border-bottom: 9px solid #d6d6d6;\n\n}\n#userInput {\n  width: 100%;\n  padding: 12px 12px;\n  box-sizing: border-box;\n/*   background-color: #eee; */\n\n}\n.userName{\n  float: left;\n  text-align: center;\n  vertical-align: middle;\n}\n.input {\n  width: 40%;\n  padding: 12px 12px;\n  border: 1.5px solid transparent;\n  border-radius: 4px;\n}\n.input:focus {\n  outline: none;\n  border-color: #4EB8DD;\n}\n#btn-group{\n  width: 600px;\n  margin-top: 5px;\n  margin-right: 40px;\n  float: right; /* Float the buttons side by side */\n  height: 40px;\n}\n.login-container {\n  height: auto;\n  width: 100%;\n\n\n\n}\n.form-wrapper {\n  background-color: #fff;\n  /* min-height: 300px; */\n  width: 340px;\n  margin: 0;\n  box-shadow: 2px 4px 6px #ededed;\n  /* border: 1px solid #eee; */\n  border: 2px solid #d6d6d6;\n  padding: 30px 25px;\n  border-radius: 3px;\n}\n.input-group {\n  margin: 0 0 24px 0;\n}\n.label {\n  font-size: 14px;\n  display: block;\n  margin: 2px 0 6px 2px;\n  font-weight: bold;\n  color: #616161;\n}\n.label-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.link {\n  text-decoration: none;\n  color: #4eb8dd;\n  font-size: 14px;\n  cursor: pointer;\n}\n.link:hover {\n  text-decoration: underline;\n}\n.input {\n  width: 100%;\n  padding: 12px 12px;\n  box-sizing: border-box;\n/*   background-color: #eee; */\n  background-color: #eff3f4;\n  border: 1.5px solid transparent;\n  font-size: 16px;\n  border-radius: 3px;\n  transition: 0.2s ease-in;\n}\n.input:focus {\n  outline: none;\n  border-color: #4eb8dd;\n}\n#error {\n  margin-top: 10px;\n}\n.login-btn {\n  width: 100%;\n  color: #fff;\n  text-align: center;\n  background-color: #4eb8dd;\n  border: 1px solid transparent;\n  padding: 12px 12px;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.login-btn:hover {\n  background-color: #3c99b9;\n}\n.buttons{\n  cursor: pointer;\n  float: right;\n  color: #fff;\n  text-align: center;\n  background-color: #4eb8dd;\n  border: 1px solid black;\n  padding: 10px 10px;\n\n  margin-left: 5px;\n\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 4px;\n\n}\n.buttons:hover {\n  background-color: #3c99b9;\n}\n.p {\n  font-size: 12px;\n  text-align: center;\n  color: #bbb;\n  margin: 25px 0 0 0;\n}\n"

/***/ }),

/***/ "./src/app/groups/groups.component.html":
/*!**********************************************!*\
  !*** ./src/app/groups/groups.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n  <span>Chat</span>\n  <div id=\"btn-group\">\n    <button class=\"buttons\" (click)=\"logout()\" style=\"background-color:#87309b\">Logout</button>\n    <div *ngIf=\"auth == 0\">\n      <!-- <button class=\"buttons\" style=\"background-color:#d43636\" (click)=\"toggleGroup()\">Add User To Group</button> -->\n      <button class=\"buttons\" (click)=\"toggleAdd()\">Create New User</button>\n      <button class=\"buttons\" style=\"background-color:#c43636\" (click)=\"toggleRemove()\">Delete Users</button>\n    </div>\n    <div *ngIf=\"auth == 1\">\n      <button class=\"buttons\" (click)=\"toggleAdd()\">Create New User</button>\n\n    </div>\n    <h3 class=\"userName\">User: {{username}}</h3>\n  </div>\n</div>\n\n<br>\n\n\n<div class=\"container\">\n  <div class=\"leftDiv\">\n    <div class=\"listClass\">\n      <ul *ngFor=\"let group of groups2\">\n       <li><h1>{{ group.name }}</h1></li>\n      <ul>\n\n      <li *ngFor=\"let child of group.channels\" (click)=\"goToChannel(child.name, group.name)\">\n          {{ child.name }}\n      </li>\n      </ul>\n      <div class=\"label\" *ngIf=\"auth == 0 || auth == 1\">\n        <h4 >Enter the name of a new channel</h4>\n        <input type=\"text\" (keyup.enter)=\"newChannel(group.channelName, group.name)\" [(ngModel)]=\"group.channelName\" placeholder=\"Channel name: \"/>\n        <button (click)=\"newChannel(group.channelName, group.name)\">Submit</button>\n      </div>\n      </ul>\n    </div>  <br>\n  <!-- Only show the input to create a new group if the user is auth level 0 || 1 -->\n    <div *ngIf=\"auth == 0\">\n      <h3 class=\"label\">Enter the name of a new group</h3>\n      <input type=\"text\" (keyup.enter)=\"newGroup(groupName)\" [(ngModel)]=\"groupName\" placeholder=\"Group Name: \"/>\n      <button (click)=\"newGroup(groupName)\">Submit</button>\n    </div>\n  </div>\n  <div class=\"rightDiv\" *ngIf=\"showVar2\">\n    <div class=\"arrow-up2\"></div>\n    <div class=\"login-container\">\n\n      <div class=\"form-wrapper\">\n\n        <div class=\"form\">\n          <div class=\"input-group\">\n            <label for=\"username\" class=\"label\">Username</label>\n            <input type=\"text\" (keyup.enter)=\"removeUser()\" [(ngModel)]=\"removeUsername\" class=\"input\" placeholder=\"Enter a username to delete:\">\n          </div>\n\n          <button type=\"submit\" class=\"login-btn\" style=\"background-color:#c43636\" (click)=\"removeUser()\">Delete User</button> <br>\n          <div id=\"error\">{{result}}</div>\n        </div>\n\n\n      </div>\n    </div>\n\n  </div>\n  <!-- <div class=\"rightDiv\" *ngIf=\"showVar3\">\n    <div class=\"arrow-up3\"></div>\n    <div class=\"login-container\">\n\n      <div class=\"form-wrapper\">\n\n        <div class=\"form\">\n          <div class=\"input-group\">\n            <label for=\"username\" class=\"label\">Username</label>\n            <input type=\"text\" (keyup.enter)=\"removeUser()\" [(ngModel)]=\"removeUsername\" class=\"input\" placeholder=\"Enter a username to delete:\">\n          </div>\n\n          <button type=\"submit\" class=\"login-btn\" style=\"background-color:#c43636\" (click)=\"removeUser()\">Delete User</button> <br>\n          <div id=\"error\">{{result}}</div>\n        </div>\n\n\n      </div>\n    </div>\n\n  </div> -->\n  <div class=\"rightDiv\" *ngIf=\"showVar\">\n    <div class=\"arrow-up\"></div>\n      <div *ngIf=\"auth == 0\">\n        <div class=\"login-container\">\n\n          <div class=\"form-wrapper\">\n\n            <div class=\"form\">\n              <div class=\"input-group\">\n                <label for=\"username\" class=\"label\">Username</label>\n                <input type=\"text\" [(ngModel)]=\"newUsername\" class=\"input\" placeholder=\"\">\n              </div>\n\n              <div class=\"input-group\">\n                <div class=\"label-flex\">\n                  <label for=\"username\" class=\"label\">Password</label>\n                </div>\n                <input type=\"text\" [(ngModel)]=\"newPwd\" class=\"input\" placeholder=\"\">\n              </div>\n              <div class=\"authSelect\">\n                <ul *ngFor=\"let auth of authLevels\">\n                  <label>\n                    <input type=\"radio\" name=\"lvl\" [value]='auth.auth' [(ngModel)]=\"authSelected\">\n                    {{auth.auth}}: {{auth.authName}}\n                  </label>\n                  <br>\n                </ul>\n              </div>\n\n              <button type=\"submit\" class=\"login-btn\" (click)=\"newUser(newUsername, newPwd, authSelected)\">Add User</button> <br>\n              <div id=\"error\">{{result}}</div>\n            </div>\n\n\n          </div>\n        </div>\n      </div><!--Testing-->\n      <div *ngIf=\"auth == 1\">\n        <div class=\"login-container\">\n\n          <div class=\"form-wrapper\">\n\n            <div class=\"form\">\n              <div class=\"input-group\">\n                <label for=\"username\" class=\"label\">Username</label>\n                <input type=\"text\" [(ngModel)]=\"newUsername\" class=\"input\" placeholder=\"\">\n              </div>\n\n              <div class=\"input-group\">\n                <div class=\"label-flex\">\n                  <label for=\"username\" class=\"label\">Email</label>\n                </div>\n                <input type=\"email\" [(ngModel)]=\"newEmail\" class=\"input\" placeholder=\"\">\n              </div>\n\n\n              <button type=\"submit\" class=\"login-btn\" (click)=\"newUser(newUsername, newEmail)\">Add User</button> <br>\n              <div id=\"error\">{{result}}</div>\n            </div>\n\n\n          </div>\n        </div>\n      </div><!--Testing-->\n  </div>\n</div> <!--container -->\n"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(authservice, route, http, router, form) {
        this.authservice = authservice;
        this.route = route;
        this.http = http;
        this.router = router;
        this.form = form;
        this.result = '';
        //username;
        this.authSelected = 2;
        this.authLevels = [
            {
                "auth": "0",
                "authName": "Super Admin"
            },
            {
                "auth": "1",
                "authName": "Group Admin"
            },
            {
                "auth": "2",
                "authName": "Regular User"
            }
        ];
        this.showVar = false;
        this.showVar2 = false;
        this.showVar3 = false;
        this.data = [];
        this.url = 'http://localhost:3000';
        this.userData = [];
        this.groups = [];
        this.channels = [];
        this.groups2 = [];
    }
    //  1: Get groups that user is in
    //  2: Get channels within those groups
    GroupsComponent.prototype.ngOnInit = function () {
        this.auth = localStorage.getItem('user_auth');
        this.username = localStorage.getItem('currentUser');
        this.getUserData();
    };
    GroupsComponent.prototype.newUser = function (username, password, auth) {
        this.authservice.newUser(username, password, auth).subscribe(function (data) {
        });
    };
    GroupsComponent.prototype.addChannel = function () {
        // TODO: post to 'credentials' & 'groups'
        // TODO: ensure that the data is refreshed to show new groups
    };
    // }
    //Navigate to a channel chat room on click
    GroupsComponent.prototype.goToChannel = function (channelName, groupName) {
        localStorage.setItem('groupName', groupName);
        localStorage.setItem('channelName', channelName);
        console.log("GROUP " + groupName + " CHANNEL " + channelName);
        this.router.navigateByUrl('/chat', { skipLocationChange: true });
    };
    //Get data specific to that user - groups and also channels within that group.
    GroupsComponent.prototype.getUserData = function () {
        var _this = this;
        this.groups2 = [];
        this.http.get('/api/get?username=' + this.username).subscribe(function (data) {
            _this.user_data = data['data'];
            for (var i = 0; i < _this.user_data.length; i++) {
                _this.groups2.push({
                    'name': _this.user_data[i].groupname,
                    'channels': []
                });
                for (var j = 0; j < _this.user_data[i].channels.length; j++) {
                    _this.groups2[i].channels.push({
                        'name': _this.user_data[i].channels[j]
                    });
                }
            }
        });
    };
    //Request is sent to the server with the username and the group name
    GroupsComponent.prototype.newChannel = function (channel, group) {
        this.authservice.newChannel(channel, group).subscribe(function (data) {
            //console.log(typeof(data['success']));
            //this.result = data['success']
            if (data['success'] == "false") {
                console.log("MATCHES");
            }
            else if (data['success'] == "true") {
                console.log("Success");
            }
        });
        this.getUserData();
    };
    GroupsComponent.prototype.newGroup = function (group) {
        this.authservice.newGroup(group).subscribe(function (data) {
        });
        this.getUserData();
    };
    //Clears local storage and navigates back to the root
    GroupsComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('');
    };
    //Toggles add form
    GroupsComponent.prototype.toggleAdd = function () {
        this.showVar = !this.showVar;
        this.result = " ";
        if (this.showVar2) {
            this.showVar2 = !this.showVar2;
        }
        else if (this.showVar3) {
            this.showVar3 = !this.showVar3;
        }
    };
    //Toggles user remove form
    GroupsComponent.prototype.toggleRemove = function () {
        this.showVar2 = !this.showVar2;
        this.result = " ";
        if (this.showVar) {
            this.showVar = !this.showVar;
        }
        else if (this.showVar3) {
            this.showVar3 = !this.showVar3;
        }
    };
    GroupsComponent.prototype.toggleGroup = function () {
        this.showVar3 = !this.showVar3;
        this.result = " ";
        if (this.showVar) {
            this.showVar = !this.showVar;
        }
        else if (this.showVar2) {
            this.showVar2 = !this.showVar2;
        }
    };
    //Takes in new user details and sends a request to the server to add a new employee
    // newUser(newUsername, newEmail){
    //   if(this.authSelected == undefined){
    //     this.result = "Error - Please Select An Auth Level";
    //     return;
    //
    //   }
    //
    //   this.http.post(this.url + "/api/reg?username="+newUsername + "&email="+newEmail + "&auth="+this.authSelected).subscribe(data => {
    //     console.log(data);
    //       if (data['success']){
    //         this.result = "Success - New User Added";
    //       }
    //       else{
    //         this.result = "Error - A User With This Username Already Exists";
    //       }
    //   });
    // }
    //Sends a request to the server to remove a user
    GroupsComponent.prototype.removeUser = function () {
        var _this = this;
        this.http.get(this.url + "/api/delete?username=" + this.removeUsername).subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.result = "User " + _this.removeUsername + " Has Been Deleted.";
            }
            else {
                _this.result = "Error - No User With This Username Was Found";
            }
        });
    };
    GroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #userInput{\n  padding-left: 30px;\n  margin-left: 25%;\n  height: 30px;\n  width: 50%;\n  background-color: #eff3f4;\n} */\n/* #newUserButton { */\n/* margin-top: 10px;\n  margin-left: 43%;\n  width: 14%;\n  height: 30px;\n  background-color: white; */\n/* margin-top: 10px;\n  width: 14%;\n  color: #fff;\n  text-align: center;\n  background-color: #606060;\n  border: 1px solid transparent;\n  margin-left: 43%;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 3px;\n} */\n#newUserButton {\n  width: 50%;\n  color: #fff;\n  text-align: center;\n  background-color: #4eb8dd;\n  border: 1px solid black;\n  padding: 10px 10px;\n  margin-top: 20px;\n  margin-left: 25%;\n  margin-right: 25%;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 4px;\n\n}\n#newUserButton:hover {\n  background-color: #3c99b9;\n}\n#userInput:focus {\n  outline: none;\n  border-color: #4eb8dd;\n\n}\n#error{\n  margin-top: 10px;\n  text-align: center;\n}\n.userInput {\n  width: 100%;\n  padding: 12px 12px;\n  margin-bottom: 30px;\n  box-sizing: border-box;\n/*   background-color: #eee; */\n\n  background-color: #eff3f4;\n  border: 1px solid grey;\n  font-size: 16px;\n  border-radius: 3px;\n  transition: 0.2s ease-in;\n}\n#container {\n  background-color: #fff;\n  /* min-height: 300px; */\n  width: 500px;\n  height: 230px;\n  margin: 70px auto;\n  box-shadow: 2px 4px 6px #ededed;\n  /* border: 1px solid #eee; */\n  border: 2px solid #d6d6d6;\n  padding: 10px 25px;\n  padding-top: 40px;\n  border-radius: 3px;\n\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\n  <input class=\"userInput\" type=\"text\" [(ngModel)]=\"myValue\" placeholder=\"Please enter your username: \"/>\n  <br>\n  <input class=\"userInput\" (keyup.enter)=\"login()\" type=\"password\" [(ngModel)]=\"myPwd\" placeholder=\"Please enter your password: \"/>\n\n\n\n  <button id=\"newUserButton\" (click)=\"login()\">Login</button>\n\n  <div id=\"error\">{{errorMessage}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, chatService, http, router) {
        this.authService = authService;
        this.chatService = chatService;
        this.http = http;
        this.router = router;
        this.title = 'app';
        this.myValue = '';
        this.username = 'Codie';
        this.url = 'http://localhost:3000';
        this.isUser = false;
        this.errorMessage = "";
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        // TODO: THis needs to be moved to a new auth service. As per http video.
        // return this.http.post<User>('/api/auth', {username: "Codie", password: "test"});
        if (this.myValue == '' || this.myPwd == null) {
            this.errorMessage = "Both fields are required";
            return;
        }
        this.authService.login(this.myValue, this.myPwd).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                localStorage.setItem('user_auth', data.auth);
                localStorage.setItem('currentUser', _this.myValue);
                _this.router.navigateByUrl('/groups/' + _this.myValue, { skipLocationChange: true });
            }
            else {
                _this.errorMessage = "Username or Password is Incorrect";
            }
        }, function (error) {
            console.log("Error");
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        this.url = 'http://localhost:3000';
    }
    SocketService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    SocketService.prototype.joinChannel = function (channel, user) {
        this.socket.emit('room', channel, user);
    };
    SocketService.prototype.getMessages = function () {
        var _this = this;
        console.log('getMessages()');
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
        // We define our observable which will observe any incoming messages
        // from our socket.io server.
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                console.log("Received message from Websocket Server");
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        // We return our observable
        return observable;
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/codielittle/Desktop/app_src/chat/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map