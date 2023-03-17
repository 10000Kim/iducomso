//화살표 함수도 async, await 사용이 가능하다.
const findAndSaveUser = async (Users) => {
    try {
      let user = await Users.findOne({});
      user.name = 'zero';
      user = await user.save();
      user = await Users.findOne({ gender: 'm' });
      // 생략
    } catch (error) {
      console.error(error);
    }
  };