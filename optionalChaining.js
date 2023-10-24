var _a, _b;
var user;
user = {
    name: 'Takayuki',
    social: {
        facebook: true,
        twitter: true
    }
};
console.log((_a = user.social) === null || _a === void 0 ? void 0 : _a.facebook); //trueが出力される
user = {
    name: 'Takayuki'
};
console.log((_b = user.social) === null || _b === void 0 ? void 0 : _b.facebook); //socialが存在しないがエラーにならない
