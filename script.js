document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("text-input");
  const checkButton = document.getElementById("check-btn");
  const resultText = document.getElementById("result");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      palindromChecker();
    }
  });

  checkButton.addEventListener("click", palindromChecker);

  function palindromChecker() {
    let inputValue = input.value;
    // Remove non-alphanumeric characters and convert to lowercase
    let str = inputValue.replace(/[^a-zA-Z0-9\W]/g, "").toLowerCase();
    let reverseStr = str.split("").reverse().join("");
    resultText.classList.remove("hide");
    setTimeout(() => {
      resultText.classList.add("hide");
    }, 5000);
    if (inputValue.trim() === "") {
      resultText.classList.add("hide");
      alert("Please input a value");
    } else if (str === reverseStr) {
      resultText.innerText = `${inputValue} is a palindrome`;
    } else {
      resultText.innerText = `${inputValue} is not a palindrome`;
    }
  }
});
