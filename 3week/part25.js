const m = new Map();

m.set('a', 'b'); //set 키 값 으로 Map에 속성 추가
m.set(3,'c'); //문자열이 아닌 값을 키로 사용 가능하다.
const d = {};
m.set(d, 'e'); //객체도 된다.

m.get(d); //get(키)로 속성값 조회
console.log(m.get(d));  //e

m.size;
console.log(m.size) //3

for (const [k,v ] of m) { //반복문에 바로 넣어 사용이 가능하다.
console.log(k, v); //
} //속성 간의 순서도 지켜준다.

// m.forEach(v, k) => { //forEach도 사용 가능
//     console.log(k, v);
// });

m.has(d); //has(키)로 속성 존재 여부를 확인합니다.
console.log(m.has(d)); //true

m.delete(d); //delete(키)로 속성을 삭제합니다.
m.clear(); //clear()로 전부 제거합니다.
console.log(m.size); //0