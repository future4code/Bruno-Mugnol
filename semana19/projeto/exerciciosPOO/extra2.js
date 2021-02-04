var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(id, name, email, password) {
        var _this = this;
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.getId = function () { return _this.id; };
        this.getName = function () { return _this.name; };
        this.getEmail = function () { return _this.email; };
        console.log("Chamando o construtor da classe User");
    }
    return User;
}());
var Costumer = /** @class */ (function (_super) {
    __extends(Costumer, _super);
    function Costumer(id, name, email, password, creditCard) {
        var _this = _super.call(this, id, name, email, password) || this;
        _this.creditCard = creditCard;
        _this.purchaseTotal = 0;
        _this.getCreditCard = function () { return _this.creditCard; };
        console.log("Chamando o construtor da classe Customer");
        return _this;
    }
    return Costumer;
}(User));
var newCostumer = new Costumer(1, "bob", "bob@my.boy", "123456", "nubanko666");
console.log(newCostumer.getCreditCard());
