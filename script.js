(function () {
  //TODO
  const button = document.getElementById("ex1_button");
  const container = document.getElementById("ex1_content");
  const inputText = document.getElementById("ex2_text");
  const inputMessage = document.getElementById("ex2_content");
  button.addEventListener("click", () => {
    container.textContent = "0,1,2,3,4,5,6,7,8,9";
  });

  const letters = /[A-Z]/gi;
  const specialCharacters = /[.*+?^$#!@%&{}()|[\]\\]+/g;

  inputText.addEventListener("input", (e) => {
    if (e.target.value.length !== 9) {
      inputMessage.textContent = "Długość numeru musi być równa 9";
      return;
    } else if (e.target.value.match(letters)) {
      inputMessage.textContent = "Numer nie może zawierać liter";
      return;
    } else if (e.target.value.match(specialCharacters)) {
      inputMessage.textContent = "Numer nie może zawierać znaków specjalnych";
      return;
    } else {
      inputMessage.textContent = "Numer telefonu jest poprawny";
    }
  });
})();
