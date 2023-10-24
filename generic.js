//Tはクラス内で利用する仮の型名です
var Queue = /** @class */ (function () {
    function Queue() {
        //内部にT型の配列を初期化
        this.array = [];
    }
    //T型の値を配列に追加
    Queue.prototype.push = function (item) {
        this.array.push(item);
    };
    //T型の配列最初の値を取り出す
    //shift()は最初の配列を取り除き、取り除いた値を返す
    Queue.prototype.pop = function () {
        return this.array.shift();
    };
    //配列の最初の値が取り除かれた残りの配列を返す
    Queue.prototype.popArr = function () {
        return this.array;
    };
    return Queue;
}());
//数値型を扱うQueueを生成
var queue = new Queue();
queue.push(111);
queue.push(112);
queue.push(113);
queue.push(114);
// queue.push('hoge') //number型じゃないのでエラー
console.log(queue.pop());
console.log(queue.popArr());
