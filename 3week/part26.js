const s = new Set();
s.add(fasle); //add(요소)로 Set에 추가합니다
s.add(1);
s.add('1');
s.add(1);
s.add(2);

console.log(s.size); //중복이 없어져 4가 됩니다.

s.has(1); //has(요소)로 요소 존재 여부를 확인합니다.
console.log(s.has(1)); //true

for (const a of s) {
    console.log(a);
}

// s.forEach(a) => {
//     console.log(a);
// }

s.delete(2);
s.clear();

const arr = [1,3,2,7,2,6,3,5];