function add(a, b) {
    return a + b;
  }

  const add2 = (a, b) => {
    return a + b;
  }

const answer = `화살표 함수는 기존의 일반 함수와 달리 function 키워드를 사용하지 않고 => 기호를 사용하여 함수를 선언합니다.

또한, 화살표 함수는 함수 내부에서 this 키워드를 사용할 때, 일반 함수와 다르게 this가 자동으로 상위 스코프의 this 값을 참조합니다. 따라서, this의 값이 변경되지 않는 것이 보장됩니다.`;
console.log(answer);