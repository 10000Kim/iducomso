const conditon = true; // true -> resolve, false -> reject

function myAsyncFunc(conditon, onSuccess, onError) {
  if (conditon) {
    onSuccess('ok');
  } else {
    onError('error');
  }
}

myAsyncFunc(
  conditon,
  (message) => {
    console.log(message); // ok한 경우 실행됨
  },
  (error) => {
    console.error(error); // 실패한 경우 실행됨
  }
);

console.log('무조건 반드시');


//--------------------- 변환
async function myAsyncFunc(conditon) {
    return new Promise((resolve, reject) => {
    if (conditon) {
    resolve('ok');
    } else {
    reject('error');
    }
    });
    }
    
    (async () => {
    try {
    const message = await myAsyncFunc(conditon);
    console.log(message); // ok한 경우 실행됨
    } catch (error) {
    console.error(error); // 실패한 경우 실행됨
    } finally {
    console.log('무조건 반드시');
    }
    })();


const answer = ``;
console.log(answer);