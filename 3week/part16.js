/** 프로미스 : 콜백 패턴 (3중첩)을 프로미스로 바꾸는 예제 */
function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { // 첫 번째 콜백
      if (err) {
        return console.error(err);
      }
      user.name = 'zero';
      user.save((err) => { // 두 번째 콜백
        if (err) {
          return console.error(err);
        }
        Users.findOne({ gender: 'm' }, (err, user) => { // 세 번째 콜백
          // 생략
        });
      });
    });
  }