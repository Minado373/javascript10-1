(function () {
  //TODO
  const button = document.getElementById("ex1_button");
  const container = document.getElementById("ex1_content");
  let html = "<p>0,1,2,3,4,5,6,7,8,9</p>";
  button.addEventListener("click", () => {
    container.insertAdjacentHTML("afterend", html);
  });
})();
