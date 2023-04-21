const answer = `노드 콜백 핸들러의 전달되는 인수로는 첫번째 이벤트루프 - 이벤트 발생 시 호출할 콜백 함수들을 관리하고, 호출된 콜백 함수의 실행 순서를 결정하는 역할을 담당합니다.
두번째 백그라운드 - 이벤트 리스너들이 대기하는 곳입니다. 여러 작업이 동시에 실행될 수 있습니다. 세번째 태스크 큐 - 이벤트 발생 후. 백그라운드에서는 태스크 큐로 타이머나 이벤트 리스너의 콜백 함수를
보냅니다. 콜백지옥을 해결할 수 있는 방안은 콜백 대신 프로미스(Promise)를 사용해 현상을 극복했습니다. `;
// 콜백지옥(Promise 사용)
const conditon = true; //true -> resolve, false -> reject
const promise = new Promise((resolve, reject) => {
    if (conditon){
        resolve('ok');
    }else {
        reject('error');
    }
});
promise.then((message)=> {
    console.log(message); //ok한 경우 실행됨
})
.catch((error)=>{
    console.error(error); //실패한 경우 실행됨
})
.finally(()=> { //끝나고 무조건 실행됨
    console.log('무조건 반드시')
});
console.log(answer);