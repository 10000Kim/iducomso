/** Node.js실습 const, let */
if (true) {
    var x = 3;
}
console.log(x); //3
/**
  if (true) {
    const y = 3;
}
console.log(y);
 */

// Uncaught ReferenceError : y is not defined
// y 라는 변수가 선언이 안되어있음

if (true) {
    const y = 3;
}
const y = 2;
console.log(y);