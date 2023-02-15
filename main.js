const answer = document.querySelectorAll(".answer");
const button = document.getElementsByTagName("button");

const question = document.querySelectorAll(".question");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (button[i].getAttribute("aria-expanded") === "false") {
      answer.forEach((e) => {
        e.classList.add("hide");
        question.forEach((i) => {
          i.setAttribute("aria-expanded", "false");
        });
      });
      button[i].setAttribute("aria-expanded", "true");
      answer[i].classList.remove("hide"); //shows or hides an answer
      answer[i].setAttribute("aria-hidden", "false");
    } else if (button[i].getAttribute("aria-expanded") === "true") {
      answer[i].classList.add("hide"); //shows or hides an answer
      answer[i].setAttribute("aria-hidden", "true");
      this.setAttribute("aria-expanded", "false");
    }
  });
}
