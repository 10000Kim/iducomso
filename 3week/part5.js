// 객체 리터럴 -> 리터럴: 소스코드에 고정된 값
// 속성 표현 방식에 주목해야한다.

/** var sayNode = function() {
    console.log('Node');
  };
  var es = 'ES';
  var oldObject = {
    sayJS: function() {
      console.log('JS');
    },
    sayNode: sayNode,
  };
  oldObject[es + 6] = 'Fantastic';
  oldObject.sayNode(); // Node
  oldObject.sayJS(); // JS
  console.log(oldObject.ES6); // Fantastic
  */


const sayNode = function() {
    console.log('Node');
  };
  var es = 'ES';
  var oldObject = {
    sayJS: function() {
      console.log('JS');
    },
    sayNode: sayNode,
  };
  oldObject[es + 2023] = 'Fantastic';
  oldObject.sayNode(); // Node
  oldObject.sayJS(); // JS
  console.log(oldObject.ES2023); // Fantastic

  //객체 리터럴 -> 훨씬 간결한 문법으로 객체 리터럴 표현이 가능하다.
/**
 * 1. 객체의 메서드에 :function을 붙이지 않아도 됨
 */