import {odd, even} from './var.mjs';
import checkOddOrEven from '/func.mjs';

function checkStringOddOrEven(str){
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

//mjs 확장자를 사용하거나 package.json에 type: "module"을 추가해야 한다.
//require 대신 import, module.exports대신 export default, exports대신 export를 쓰는 것
