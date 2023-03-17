//화살표 함수
/** 장점: function 이름이 없을때 (익명함수)는 일반적인 자바스크립트는 만들수 없다
하지만 화살표 함수에서는 () => {    return }  익명함수 형식으로 사용할 수 있다. */

function add1(x, y) {
    return x + y;
  }
  
  const add2 = (x, y) => {
    return x + y;
  };
  
  const add3 = (x, y) => x + y;
  
  const add4 = (x, y) => (x + y);
  
  function not1(x) {
    return !x;
  }
  
  const not2 = x => !x;