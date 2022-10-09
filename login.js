/*Login form handle and greeting*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username=loginInput.value;
  localStorage.setItem(USER_NAME, username); //USER_NAME key 안에 입력된 username 추가
  viewGreeting(username);
}

function viewGreeting(username){
    greeting.innerText=`Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

const savedUsername=localStorage.getItem(USER_NAME);
if (savedUsername=== null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',loginSubmit);
}else{
    viewGreeting(savedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

//delete username if user press the button
// dltbutton.addEventListener('click', ()=>{});