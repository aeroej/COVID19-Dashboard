# Covid19-Dashboard


[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Faeroej%2FCOVID-19_Dashboard&count_bg=%2379C83D&title_bg=%23555555&icon=counter-strike.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)


##### 9월 첫째주
- [x] Naming 수정 (명사형)
- [x] src 디렉토리 생성 후 index.js 이동
- [x] src 디렉토리 내 views 디렉토리 생성하여 index.html 생성
- [x] localhost:{port}/ 로 접속 시 위에서 생성한 index.html 출력
- [x] URL Routing 처리(index.html 출력, nodemon 모듈 설치)
- [x] views 폴더를 static 디렉토리로 설정
- [x] images 폴더 생성 후 html에 image 출력
- [x] localhost:{port}/index 로 접속 시 index.html 출력
- [x] views 폴더에 POST 요청을 위한 form.html 생성
- [x] postman 프로그램 설치
- [x] postman 사용법 확인
- [x] express 모듈의 router 기능 공부 : 라우터로 페이지 2~3개 구현
- [x] readme 작성요령 확인 (마크다운 문법 검색)
- [x] bodyParser로 클라이언트에서 받은 text 조회
- [x] templates 폴더를 추가하고 폴더 안에 email.ejs 파일 추가
- [x] express view engine 중에서 ejs 사용
- [x] app.js와 form.html을 수정하여 JSON을 통한 Ajax처리
##### 200907(월)
- [x] Router 모듈화
- [x] RESTful API 개념 공부 (4가지 Method, 4가지 연산, member.html은 기존에 했던 것과 동일한 POST 예제)
- [x] postman을 이용한 API 호출 테스트
- [x] Fetch API를 이용한 우리나라 데이터 호출
- [x] 호출한 데이터를 웹에 출력
- [x] UI는 table로 하여 데이터 출력

# Todos 
##### 200908(화)
- fetch.html의 javascript 소스를 api > api.js로 옮기기
- 옮겨진 소스를 함수로 만들어서 export 하기
- views > index.html 파일에서 api.js 불러오기
- 불러오는 소스는 window.onload 사용하여 호출하기
- fetch response 데이터를 JSON 타입으로 index.html 페이지에 출력하기
- index.html에서 버튼 삭제
##### 200909(수)
- [ ] api.js에 함수만 남겨두고, window.onload는 index.html 파일로 옮기기 
- [x] UI 꾸미기
- [x] callback hell 찾아보기
- [ ] fetch API 사용한 부분 리팩토링
```
1. 인덱스 페이지 접속(메인 페이지 로드) -> api.js의 함수 호출 -> 데이터를 페이지에 rendering
2. bootstrap, pure(순수 자바스크립트, vanilla js), css 프레임웤에 너무 의존하는 것은 권장X(차후 자체적으로 만들어도 프레임웤 쓴 것처럼 됨)
```




<br/>

# 이 프로젝트의 목적
- node.js + express 사용
- Express Router, Request, Response 이해 및 사용
- Axios를 사용하여 API 호출 및 RESTful API 이해
- async/await 비동기 처리
- JSON data parsing
