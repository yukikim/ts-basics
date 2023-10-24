//Tはクラス内で利用する仮の型名です
class Queue<T> {
    //内部にT型の配列を初期化
    private array: T[] = []

    //T型の値を配列に追加
    push(item: T) {
        this.array.push(item)
    }

    //T型の配列最初の値を取り出す
    //shift()は最初の配列を取り除き、取り除いた値を返す
    pop(): T | undefined {
        return this.array.shift()
    }

    //配列の最初の値が取り除かれた残りの配列を返す
    popArr(): T[] {
        return this.array
    }
}

//数値型を扱うQueueを生成
const queue = new Queue<number>()
queue.push(111)
queue.push(112)
queue.push(113)
queue.push(114)

// queue.push('hoge') //number型じゃないのでエラー

console.log(queue.pop())
console.log(queue.popArr())
