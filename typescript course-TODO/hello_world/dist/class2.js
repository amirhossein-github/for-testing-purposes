"use strict";
class KeyValue2 {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair3 = new KeyValue2(1, 'str');
let pair4 = new KeyValue2("1", 'str');
let pair5 = new KeyValue2(true, 1);
function wrapInArray(value) {
    return [value];
}
let number = wrapInArray(123456789);
console.log(number, typeof number);
//# sourceMappingURL=class2.js.map