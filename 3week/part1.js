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

/**
 * if (true) {
    const y = 3;
}
const y = 2;
console.log(y);
 */


/**
 * 1. 상수에 할당한 값은 다른 값으로 변경 불가
 * 2. 변경하고자 할 때는 let으로 변수 선언
 * 3. 상수 선언 시부터 초기화가 필요함
 * 4. 초기화를 하지 않고 선언하면 에러
 */

if (true) {
    let y = 3;
}
let y = 2;
console.log(y);