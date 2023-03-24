let i = 1;
setInterval(() => {
  if (i === 5) {
    console.log('종료!');
    process.exit();
  }
  console.log(i);
  i += 1;
}, 1000);
// 현재의 프로세스를 멈춤 , 강제 종료 할때 자주 사용한다.