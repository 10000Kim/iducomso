const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    //절대 경로를 주어야 에러가 안뜬다.
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});