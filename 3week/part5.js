// 객체 리터럴 -> 리터럴: 소스코드에 고정된 값
// 속성 표현 방식에 주목해야한다.
var sayNode = function() {
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