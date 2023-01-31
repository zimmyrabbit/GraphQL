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


- ERROR
  - 2023/01/30
    - Error: There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.
    - -> 랜덤함수 실행 시 서버와 클라이언트의 text context가 같지 않아서 발생하는 오류 