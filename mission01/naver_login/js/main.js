const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{10,16}$/;
  return re.test(String(text).toLowerCase());
}

let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");
const button = document.querySelector(".btn-login");

userEmail.addEventListener("input", () => {
  let value = userEmail.value;

  let checkEmail = emailReg(value);
  userEmail.classList.toggle("is--invalid", !checkEmail);
});
userPassword.addEventListener("input", () => {
  let value = userPassword.value;

  let checkPassword = pwReg(value);
  userPassword.classList.toggle("is--invalid", !checkPassword);
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  let userEmailInput = document.querySelector("#userEmail").value;
  let userPasswordInput = document.querySelector("#userPassword").value;
  if (userEmailInput === user.id && userPasswordInput === user.pw) {
    window.location.href = "welcome.html";
  } else {
    alert("땡~ 틀렸습니다! 다시 시도하세요!");
  }
});
