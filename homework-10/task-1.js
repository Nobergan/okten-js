// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
const form = document.querySelector("#form");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const age = +form.age.value;

  message.textContent =
    age < 18 ? "You are too young!!!" : "You are old enough!!!";
});
