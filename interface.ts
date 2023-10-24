/**
 * インターフェイス
 * typeと似てるけど=がいらない
 * {内で型定義}
 */

/**
 * interface作成
 * オブジェクト
 * @property number
 * @property number
 */
interface PointInt {
    x: number;
    y: number;
}

function printPointInt(point: PointInt) {
    console.log(`x座標は${point.x}です`)
    console.log(`y座標は${point.y}です`)
    console.log(`z座標は${point.z}です`)
}

/**
 * interface Point にプロパティを加える
 */
interface PointInt {
    z: number;
}

//引数のオブジェクトにzがないのでエラー
printPointInt({x: 100, y: 200})
//問題なく動作
printPointInt({x: 100, y: 200, z: 300})
printPointInt({x: 200, y: 300, z: 400})

/**
 * zプロパティにオプショナルを設定(?)
 */
interface PointIntOption {
    x: number;
    y: number;
    z?: number;
}
/**
 * インターフェイスPointIntをクラスに実装
 * 下記はzプロパティが存在しないためエラー
 */
class MyPointInt implements PointInt {
    x: number;
    y: number;
}
/**
 * インターフェイスPointIntOptionをクラスに実装
 * 下記はzプロパティが省略可能なのでエラーなし
 */
class MyPointInt2 implements PointIntOption {
    x: number;
    y: number;
}

/**
 * extends でインターフェイスを拡張
 */
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
//複数のインターフェイスを継承して新たなインターフェイスを定義
interface ColorfulCircle extends Colorful, Circle {}
const cc: ColorfulCircle = {
    color: '赤',
    radius: 10
}