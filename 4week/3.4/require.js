console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);

//cache하면 가장느린 디스크에서 읽어올 필요가 없음
//require 사용하는 이유는 모듈 재사용 (자주 사용하는것은 cache한다면 빠르게 가능)
//(속도차이) 하드디스크 < 메모리 < 레지스터