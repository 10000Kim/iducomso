const condition = true; 
const promise = new Promise((resolve, reject) => {
    if (condition) {
      resolve('성공');
    } else {
      reject('실패');
    }
  });
promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
    console.log(message3);
  })

  .catch((error) => {
    console.error(error);
  });

  //프로미스의 then 연달아 사용 O 프로미스 체이닝