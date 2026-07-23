const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // 저장소 키 이름 변수화
let toDos = []; // 할 일을 담을 배열 (업데이트 가능하도록 let으로 선언)

// 1. localStorage에 배열을 문자열 형태로 저장하는 함수
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 2. 삭제 함수 (localStorage에서도 삭제)
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  // 클릭한 li의 id와 다른 것들만 남겨서 새로운 배열을 만듦 (필터링)
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); // 변경된 배열을 다시 저장
}

// 3. 화면에 그리는 함수
function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id; // 삭제 시 구분을 위해 li에 id 부여
  const span = document.createElement("span");
  span.innerText = newTodoObj.text; // 객체의 텍스트 사용

  const button = document.createElement("button");
  button.innerText = "삭제";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// 4. 전송 핸들러
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  
  // 단순 텍스트가 아닌 ID를 가진 객체로 저장 (삭제 편의성)
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // 현재 시간(밀리초)을 고유 ID로 사용
  };
  
  toDos.push(newTodoObj); // 배열에 추가
  paintToDo(newTodoObj); // 화면에 그리기
  saveToDos(); // 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 5. 불러오기 (페이지가 로드될 때 실행)
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // 문자열을 다시 배열 객체로 변환
  toDos = parsedToDos; // 이전 데이터 복구
  parsedToDos.forEach(paintToDo); // 배열의 각 항목을 화면에 그림
}
