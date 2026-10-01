let count = 0;

const countText = document.querySelector("#clickCount");
const clickButton = document.querySelector("#click-Button");

clickButton.addEventListener("click", () => {
  count += 1;
  countText.textContent = count;

  console.log("จำนวนคลิก: " ,count);
})