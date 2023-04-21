const EventEmitter = require('events'); // events 모듈 불러오기

const myEvent = new EventEmitter(); // EventEmitter 객체 생성

// 이벤트 등록
myEvent.on('event1', () => {
  console.log('이벤트 1');
});

// 이벤트 등록
myEvent.addListener('event2', () => {
  console.log('이벤트 2');
});

// 이벤트 등록
myEvent.on('event2', () => {
  console.log('이벤트 2 추가');
});

// 이벤트 등록 (한 번만 실행됨)
myEvent.once('event3', () => {
  console.log('이벤트 3');
});

// 이벤트 실행
myEvent.emit('event1'); // '이벤트 1' 출력
myEvent.emit('event2'); // '이벤트 2', '이벤트 2 추가' 출력
myEvent.emit('event3'); // '이벤트 3' 출력
myEvent.emit('event3'); // 이벤트는 한 번만 실행되므로 출력 안 함

// 이벤트 등록 후 즉시 모든 이벤트 리스너 삭제
myEvent.on('event4', () => {
  console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 이벤트는 등록되지 않았으므로 출력 안 함

// 이벤트 등록 후 리스너 삭제
const listener = () => {
  console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5'); // 이벤트 리스너가 삭제되었으므로 출력 안 함

// 등록된 이벤트 리스너의 개수를 확인
console.log(myEvent.listenerCount('event2')); // 2 출력




const answer = `1. on(이벤트명, 콜백): 이벤트 발생 시의 콜백을 연결합니다. 이렇게 연결하는 동작을 이벤트 리스닝이라고하며 이벤트를 등록합니다.
2. addListener(이벤트명, 콜백): on과 같은기능으로 이벤트를 등록합니다.
3. emit(이벤트명): 이벤트를 호출하는 메서드입니다. 이벤트 이름을 인수로 넣으면 미리 등록해뒀던 이벤트 콜백 실행됩니다.
4.once(이벤트명, 콜백): 한번만 실행되는 이벤트 
5.removeAllListeners(이벤트명): 이벤트에 연결된 모든 이벤트 리스너 제거
6.removeListener(이벤트명, 리스너): 이벤트에 연결된 리스너를 하나씩 제거
7.off(이벤트명, 콜백): removeListener와 기능이ß 같다.
8.listenerCount(이벤트명): 현재 리스너가 몇 개 연결되어 있는지 확인한다.
실행순서: 이벤트1~5등록 -> 이벤트1호출 -> 출력 -> 이벤트2 호출 -> 2, 이벤트 2추가 출력 -> 이벤트3호출 이벤트3출력 -> 이벤트4등록 즉시 삭제 -> 4호출 -> 
출력X -> 이벤트5 등록 콜백함수 listener변수 할당 -> 이벤트5 콜백함수 삭제 -> 5호출 -> 5출력 출력x -> 이벤트2에 등록된 리스너 개수 출력 -> 2출력`;
console.log(answer);