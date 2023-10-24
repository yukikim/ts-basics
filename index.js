"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
rl.question('文字列を入力してください:', function (line) {
    console.log("".concat(line, "\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F"));
    rl.close();
});
