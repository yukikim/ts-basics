//nullになり得るsocialプロパティに?を用いてinterface型を定義
interface User {
    name: string
    social?: {
        facebook: boolean
        twitter: boolean
    }
}

let user: User

user = {
    name: 'Takayuki',
    social: {
        facebook: true,
        twitter: true
    }
}
console.log(user.social?.facebook) //trueが出力される

user = {
   name: 'Takayuki'
}
console.log(user.social?.facebook) //socialが存在しないがエラーにならない
