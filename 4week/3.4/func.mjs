import {odd, even} from './var.mjs';

function checkOddOrEven(num) {
    if (num % 2){ //홀수이면
            return odd;
    }
    return even;
}

export default checkOddOrEven;