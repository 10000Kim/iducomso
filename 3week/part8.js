//화살표 함수2
// var relationship1 = {
//     name: 'zero',
//     friends: ['nero', 'hero', 'xero'],
//     logFriends: function () {
//       var that = this; // relationship1을 가리키는 this를 that에 저장
//       this.friends.forEach(function (friend) {
//         console.log(that.name, friend);
//       });
//     },
//   };
//   relationship1.logFriends();
  
//   const relationship2 = {
//     name: 'zero',
//     friends: ['nero', 'hero', 'xero'],
//     logFriends() {
//       this.friends.forEach(friend => {
//         console.log(this.name, friend);
//       });
//     },
//   };
//   relationship2.logFriends();


const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends : () => {
      this.friends?.forEach(friend => { //변수, 상수, 메소드 값이 null이면 값을 인식해준다.
        console.log(this.name, friend);
      });
    },
  };
  relationship2.logFriends();