const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('실패2');
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // ['성공1', '성공2'];
  })
  .catch((error) => {
    console.error(error);
  });

  //allSettled로 실패한 것만 알아낼 수 있다.