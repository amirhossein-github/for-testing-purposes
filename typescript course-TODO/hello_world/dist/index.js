"use strict";
let age = 12;
let num = 123;
let str = 'str';
let bool = true;
let array1 = [1, 2, 3, 4];
let array2 = ['str', 'str', 'str'];
let tuple = [1, 'amir'];
function returnSelf1(income) {
    return income;
}
returnSelf1(20);
function returnSelf2(income = 10, income2) {
    return income !== null && income !== void 0 ? income : income2;
}
returnSelf2();
let employ = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    },
};
let employ1 = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    },
};
let wight = '10kil';
function narrowing(input) {
    if (typeof input === 'number')
        return input ** 2;
    else
        return input.charAt(-1);
}
let test = {
    a: () => { },
    b: () => { }
};
let literal1 = 50;
let literal2 = 100;
let literal3 = 'cm';
if (employ1 !== null && employ1 !== undefined)
    console.log(employ1.retire(new Date()));
console.log(employ1 === null || employ1 === void 0 ? void 0 : employ1.retire(new Date()));
let log1 = null;
let log2 = (msg) => { console.log(msg); };
let speed = null;
let userSpeed = speed !== null && speed !== void 0 ? speed : 30;
let phone2 = document.getElementById('id');
console.log(phone2.value);
let phone3 = document.getElementById('id');
console.log(phone2.value);
function render(document) {
    if (typeof document === 'string') {
        return document.charAt(-1);
    }
    else {
        return typeof document;
    }
}
function loop() {
    while (true) {
        console.log("never stop");
    }
}
loop();
//# sourceMappingURL=index.js.map