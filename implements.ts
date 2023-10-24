//インターフェイスに対してimplementsを使用することでクラスに対する実装の強制が可能
interface IUser {
    name: string;
    age: number;
    sayHello: () => string; //引数なしで文字列を返す
}

class User implements IUser {
    name: string;
    age: number;

    constructor() {
        this.name = ''
        this.age = 0
    }

    //インターフェイスに定義されているメソッドを実装しないとコンパイルエラーとなる
    sayHello(): string {
        return `こんにちは、私は${this.name}、${this.age}歳です。`
    }
}

const user = new User()
user.name = 'Takayuki'
user.age = 32
console.log(user.sayHello())