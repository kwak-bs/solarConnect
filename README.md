<p align='middle'>
  <a href='https://kwak-bs.github.io/solarConnect/'>
    <img src='https://www.solarconnect.kr/assets/img/common/sc-logo.svg' width="300px;" alt="solarconnect" />
  </a></p>
<p align='middle'><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/kwak-bs/solarConnect?color=blueviolet"> <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/kwak-bs/solarConnect"> 
<h1 align='middle'><a href='https://kwak-bs.github.io/solarConnect/'>https://kwak-bs.github.io/solarConnect/</a></h1>


---

🧐[노션 페이지](https://green-chipmunk-3f6.notion.site/4-c137ce99090e4093b32498fc14bd2846)에서 더 다양한 내용을 확인해보세요!

---

<br/>

## 📌 프로젝트 소개

###  프리온보딩 코스 SolarConnect 기업 과제

> ❕ **Typescript로 TodoList 구현하기**❗

<br/>

<details>
    <summary><STRONG>
       📚 과제 요구사항 보기
        <STRONG></summary>

**1. 완성하기**

- Todo List 화면에 현재 시간을 표시합니다.
- Todo 항목에 완료 버튼을 누르면 Todo가 완료될 수 있도록 완성합니다.

**2. 기능 추가하기**

- Todo 항목에 완료 목표일을 기입합니다.
- 입력 항목 근처에 목표일을 입력 받을 수 있게 UX를 구성합니다.
- Datepicker를 통해서 입력을 받습니다.
- 완료 목표일은 Todo 항목에서 볼 수 있어야 합니다.
- 날짜 표기법, 디자인의 요소는 작성자의 편의에 맞게 구현 가능합니다.

**3. 예외 추가하기**

- 예외가 발생할 만한 부분에 Modal을 띄워 예외를 표시합니다.

**4. 버그 수정하기**

- 버그를 발견하고, 이를 수정합니다.
- 위 요구사항을 먼저 처리해야 버그를 수정하기 쉽습니다.
- 힌트1 : 지워지지가 않네?
- 힌트2 : 불러오고 추가 해볼까?

**5. 기타**

- 개선될 수 있는 부분이 있다면 기술합니다.
- 기술한 부분을 구현할 수 있다면 구현합니다.
- 로그인 기능은 빠져 있습니다. 빠르고 안전하게 구현하기 위하여 고려해야할 사항이 있다면 기술합니다.
</details>

<br/>

## 📑 구현 목록

`시간`

- [x] TodoList 화면에 현재 시간 표시

`TodoList`

- [x] TodoList 완성.

`마감일`

- [x] 입력폼 근처에 마감일 설정 가능. [Datepicker](https://ant.design/components/date-picker/)
- [x] 오늘 날짜를 Default 마감일로 설정.
- [x]  마감일은 Todo 항목에서 볼 수있는 UI 구현.

`버그 수정`

- [x] Todo 삭제 버그 해결

- [x] 불러오고 Todo 추가 시, id가 중복되는 버그 해결


`예외 처리`

  - [x] 빈 값 입력 시, 경고 모달.
  - [x]  오늘을 기준으로 전의 날짜는 disabled 처리.

`추가 기능`

- [x] 삭제 확인 버튼 클릭 시 확인 모달.

  

<br/>

## 👨‍💻 실행 방법

### 설치

`npm install`

### 실행

`npm start`