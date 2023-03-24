const { odd, even } = require('./var'); //구조분해할당

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

// module.import ={
//     odd,
//     even
//checkOddOrEven;
// };

module.exports = checkOddOrEven; //외부에서 사용할려면 (함수만했다)