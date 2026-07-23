const clock = document.querySelector("h2#clock");
const today = document.querySelector("h3#date");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  function getToday() {
    const date = new Date();
    
    const year = date.getFullYear();
    // 1월은 0부터 시작하므로 +1을 해주고, 2자리로 맞춤 (ex: 05월)
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    
    // 요일 배열 만들기
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = week[date.getDay()];
  
    today.innerText = `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
  }
getToday();  
getClock();
setInterval(getClock, 1000);
setInterval(getToday,1000);
