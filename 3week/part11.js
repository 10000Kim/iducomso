var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

// 배열도 구조분해 할당이 가능하다.

const array = ['nodejs',{}, 10, true];
const [node, obj, , bool] = array;
