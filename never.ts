//never型
//エラーが常に返るような関数で決して値が正常に返らない場合にnever型を指定します

function error(message: string): never {
    throw new Error(message)
}

function foo(x: string | number | number[]): boolean {
    if(typeof x === 'string') {
        return true
    } else if (typeof x === 'number') {
        return false
    }

    return error('Never happens')
}

console.log(foo([1,2,3]))