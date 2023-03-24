console.log(this);
console.log(this === module.exports); //this가 가리킨다.
console.log(this === exports);

function whatIsThis() {
  console.log('function', this === exports, this === global);
}
whatIsThis();

//최상위 스코프의 this -> module.exports를 가리킨다.
//Global은 window로 보면됨.

//함수 밖 this / 함수 안 this 참조하는것이 달라 값이 달라진다. 중요!!