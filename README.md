- core
  - NodeJS
  - express
  - json Database (file system)

- optioanl
  - React.JS
  - Next.JS
  - GrapQL
  - Axios
  - ReactQuery
  - LowDB

- yarn 설치
  - npm install -g yarn

- yarn 버전 확인
  - yarn --version

- npm package 설치
  - yarn add react react-dom next sass axios
  - yarn add --dev webpack

- yarn 초기화 (package.json 생성)
  - yarn init  

- package.json에 정의된 스크립트를 실행
  - yarn run (client)



- 2023/01/30
  - Error: There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.
  - -> 랜덤함수 실행 시 서버와 클라이언트의 text context가 같지 않아서 발생하는 오류 



- 2023/05/23(express server, json database 생성)
  cd server
  yarn init -y
  -> server패키지에 package.json 파일 생성
  -> "type": "module" 추가 해줘야 nodejs에서 js es6 모듈 import 하여 사용 가능

  yarn add express cors uuid
  yarn add --dev nodemon
  -> 파일 변경 시 자동으로 서버 재시작 해주는 역할 

  nodemon.json
  -> nodemon이 실행되었을때 어떤것을 감시해서 변경 사항을 반영 및 무시 할 지 정의