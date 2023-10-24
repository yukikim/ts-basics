class Rectangle {
    height: number;
    width: number;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    //ゲッター
    get area(): number {
        return this.calcArea();
    }

    get plus(): number {
        return this.resPlus();
    }

    //メソッド
    calcArea(): number {
        return this.height * this.width;
    }

    resPlus(): number {
        return this.height + this.width
    }
}

const square = new Rectangle(10, 10);
console.log(square.area);
console.log(square.plus)
console.log(square.resPlus())
