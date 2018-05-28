"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var controller = require("../../core/CoreController.js");
var Controllers;
(function (Controllers) {
    var UserManagement = (function (_super) {
        __extends(UserManagement, _super);
        function UserManagement() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._exportedMethods = [
                'render',
                'listUsers',
                'findUser'
            ];
            return _this;
        }
        UserManagement.prototype.bootstrap = function () {
        };
        UserManagement.prototype.render = function (req, res) {
            return this.sendView(req, res, 'dashboard');
        };
        UserManagement.prototype.listUsers = function (req, res) {
            var page = req.param('page');
            var pageSize = req.param('pageSize');
            if (page == null) {
                page = 1;
            }
            if (pageSize == null) {
                pageSize = 10;
            }
            User.count().exec(function (err, count) {
                var response = {};
                response["summary"] = {};
                response["summary"]["numFound"] = count;
                response["summary"]["page"] = page;
                if (count == 0) {
                    response["records"] = [];
                    return res.json(response);
                }
                else {
                    User.find().paginate({ page: 1, limit: 10 }).exec(function (err, users) {
                        response["records"] = users;
                        return res.json(response);
                    });
                }
            });
        };
        UserManagement.prototype.findUser = function (req, res) {
            var searchField = req.param('searchBy');
            var query = req.param('query');
            var queryObject = {};
            queryObject[searchField] = query;
            User.findOne(queryObject).exec(function (err, user) {
                if (err != null) {
                    return res.serverError(err);
                }
                if (user != null) {
                    return res.json(user);
                }
                return res.json({});
            });
        };
        return UserManagement;
    }(controller.Controllers.Core.Controller));
    Controllers.UserManagement = UserManagement;
})(Controllers = exports.Controllers || (exports.Controllers = {}));
module.exports = new Controllers.UserManagement().exports();
