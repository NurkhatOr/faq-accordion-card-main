const answer = document.querySelectorAll(".answer");
const button = document.getElementsByTagName("button");
const arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (button[i].getAttribute("aria-expanded") === "false") {
      this.classList.add("fw-700");
      this.setAttribute("aria-expanded", "true");
      answer[i].classList.remove("hide"); //shows or hides an answer
      answer[i].setAttribute("aria-hidden", "false");
      arrow[i].classList.add("arrow-uprotation");
      arrow[i].classList.remove("arrow-downrotation");
    } else if (button[i].getAttribute("aria-expanded") === "true") {
      answer[i].classList.add("hide"); //shows or hides an answer
      answer[i].setAttribute("aria-hidden", "true");
      this.classList.remove("fw-700");
      this.setAttribute("aria-expanded", "false");
      arrow[i].classList.remove("arrow-uprotation");
      arrow[i].classList.add("arrow-downrotation");
    }
  });
}

console.log(answer[0].offset);

const faq = document.querySelector(".container");
