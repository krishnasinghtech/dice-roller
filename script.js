function roll() {
  let noOfDice = document.getElementById("noOfDice").value;
  let diceResult = document.getElementById("diceResult");
  let diceImages = document.getElementById("diceImages");
  let submit = document.getElementById("submit");
  let values = [];
  let images = [];

  for (let i = 0; i < noOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="${value}.png" alt="dice ${value}"/>`);
  }
  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join(" ");
}
