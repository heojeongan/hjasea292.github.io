const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const mainbox = document.querySelector(".main-screen");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
const toDoFormInFormJs = document.getElementById("todo-form");
const toDoListInFormJs = document.getElementById("todo-list");

function onSubmit(event){
    event.preventDefault(); //기본동작이 실행되는 것을 막아줌. ex) form에서는 엔터를 누르거나 버튼을 누르면 자동으로 새로고침되는 것
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, username);
    toDoFormInFormJs.classList.remove(HIDDEN_CLASS);
    toDoListInFormJs.classList.remove(HIDDEN_CLASS);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `좋은 하루입니다! ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
    mainbox.classList.add("move-up");
}
const saved_username = localStorage.getItem(USERNAME_KEY);

if(saved_username === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onSubmit);
}else{
    paintGreetings(saved_username);
    toDoFormInFormJs.classList.remove(HIDDEN_CLASS);
    toDoListInFormJs.classList.remove(HIDDEN_CLASS);
}
