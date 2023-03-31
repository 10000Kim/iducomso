const fs = require('fs').promises;

fs.readFile('/Users/man/Documents/GitHub/iducomso/5week/3.6/readme.txt')
//맥에서는 절대경로를 주어야한다.
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });