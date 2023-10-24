var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.age = 0;
    }
    //インターフェイスに定義されているメソッドを実装しないとコンパイルエラーとなる
    User.prototype.sayHello = function () {
        return "\u3053\u3093\u306B\u3061\u306F\u3001\u79C1\u306F".concat(this.name, "\u3001").concat(this.age, "\u6B73\u3067\u3059\u3002");
    };
    return User;
}());
var user = new User();
user.name = 'Takayuki';
user.age = 32;
console.log(user.sayHello());
