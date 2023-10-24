var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        //ゲッター
        get: function () {
            return this.calcArea();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "plus", {
        get: function () {
            return this.resPlus();
        },
        enumerable: false,
        configurable: true
    });
    //メソッド
    Rectangle.prototype.calcArea = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.resPlus = function () {
        return this.height + this.width;
    };
    return Rectangle;
}());
var square = new Rectangle(10, 10);
console.log(square.area);
console.log(square.plus);
console.log(square.resPlus());
