const answer = `모듈을 불러오는 방법으로는 1. CommonJS 모듈 2. ES모듈 형식입니다.
CommonJs 모듈은 표준 자바스크립트 모듈은 아니지만 노드 생태계에서 가장 널리 쓰이는 모듈입니다. 이 모듈은 만들 때는 모듈이 될 파일과 모듈을 불러와서 사용할 파일이 필요합니다.
module.exports로 내보내고 내보낸 모듈을 require와 경로를 명시해서 불러오는 시스템을 CommonJS라고 합니다, CommonJS는 모듈을 독립적인 파일 단위로 분리하고, 모듈간의 의존성을 관리할 수 있게 합니다.
ES 모듈 공식적인 자바스크립트 모듈형식입니다. ES모듈은 CommonJS모듈과 다르게 require, export, module.export가 각각 import,
export, export default로 바뀌었습니다.
CommonJS에서 ES 모듈로 바꾸는 방법은 다음과 같습니다. 파일 확장자 변경 ,exports 대신 export 사용`;
console.log(answer);