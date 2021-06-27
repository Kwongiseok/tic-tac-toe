export default class NewGameButton {
  constructor($footerButtons, resetGame) {
    this.resetGame = resetGame;
    this.$newGameButton = document.createElement("button");
    this.$newGameButton.className = "button";
    this.$newGameButton.innerHTML = "NEW GAME";
    $footerButtons.appendChild(this.$newGameButton);

    this.$newGameButton.addEventListener("click", this.onClick.bind(this));
  }

  onClick() {
    const res = confirm("해당 경기를 새롭게 진행하시겠습니까?");
    if (res) {
      this.resetGame();
    }
  }
}
