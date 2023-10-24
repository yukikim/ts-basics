class Point {
    x: number;
    y: number;

    //引数がない場合の初期値を指定
    constructor(x: number = 0, y: number = 0) {
        this.x = x
        this.y = y
    }

    //戻り値がない関数を定義するためにvoidを指定
    moveX(n: number): void {
        this.x += n
    }
    moveY(n: number): void {
        this.y += n
    }
}

const point = new Point()
point.moveX(10)
point.moveY(11)
console.log(`${point.x}, ${point.y}`)

//extendsを用いて上記Pointクラスを継承
class Point3D extends Point {
    z: number;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        //継承元のコンストラクタを呼び出す
        super(x, y)
        this.z = z
    }

    moveZ(n: number): void {
        this.z += n
    }
}

const point3D = new Point3D()
//継承元のメソッドを呼び出す
point3D.moveX(10)
point3D.moveZ(20)
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`)