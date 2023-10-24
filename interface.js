/**
 * インターフェイス
 * typeと似てるけど=がいらない
 * {内で型定義}
 */
function printPointInt(point) {
    console.log("x\u5EA7\u6A19\u306F".concat(point.x, "\u3067\u3059"));
    console.log("y\u5EA7\u6A19\u306F".concat(point.y, "\u3067\u3059"));
    console.log("z\u5EA7\u6A19\u306F".concat(point.z, "\u3067\u3059"));
}
//引数のオブジェクトにzがないのでエラー
printPointInt({ x: 100, y: 200 });
//問題なく動作
printPointInt({ x: 100, y: 200, z: 300 });
printPointInt({ x: 200, y: 300, z: 400 });
/**
 * インターフェイスPointIntをクラスに実装
 * 下記はzプロパティが存在しないためエラー
 */
var MyPointInt = /** @class */ (function () {
    function MyPointInt() {
    }
    return MyPointInt;
}());
/**
 * インターフェイスPointIntOptionをクラスに実装
 * 下記はzプロパティが省略可能なのでエラーなし
 */
var MyPointInt2 = /** @class */ (function () {
    function MyPointInt2() {
    }
    return MyPointInt2;
}());
