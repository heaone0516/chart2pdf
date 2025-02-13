환경 설정 및 실행 방법

1. Node.js 설치
Node.js 22 버전을 설치합니다.

2. 실행 환경 설정
IDE의 Edit Configurations에서 아래와 같이 설정합니다:

Working Directory: 실제 프로젝트 경로 (예: ~/Projects/chart2Pdf)
JavaScript File: 프로젝트 내 index.js 파일 지정

3. 서버 실행
설정 완료 후 프로젝트를 빌드 및 실행합니다.
서버 실행 후 http://localhost:3000 에 접속합니다.

4. PDF 다운로드
PDF 생성 요청은 아래 URL로 접근하여 실행합니다.
http://localhost:3000/generate-pdf