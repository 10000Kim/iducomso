const answer = `HTTP 서버를 생성하고, 요청이 들어오면 "Hello World"를 응답을 보내는 노드 서버 코드입니다.
`;

const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
  // 파일 경로 설정
  const filePath = './public' + request.url;

  // 파일 존재 여부 확인
  fs.exists(filePath, function (exists) {
    if (exists) {
      // 파일이 존재할 경우
      fs.readFile(filePath, function (error, content) {
        if (error) {
          // 파일 로드 중 오류 발생
          response.writeHead(500);
          response.end();
        } else {
          // 파일 로드 성공
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.end(content, 'utf-8');
        }
      });
    } else {
      // 파일이 존재하지 않을 경우
      response.writeHead(404);
      response.end();
    }
  });
}).listen(3000);


console.log(answer);
