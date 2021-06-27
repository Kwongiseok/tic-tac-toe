export default class ResetGameButton {
  constructor($footerButtons, resetGame) {
    this.resetGame = resetGame;
    this.$resetGameButton = document.createElement("button");
    this.$resetGameButton.className = "button";
    this.$resetGameButton.innerHTML = "RESET GAME";
    $footerButtons.appendChild(this.$resetGameButton);

    this.$resetGameButton.addEventListener("click", this.onClick.bind(this));
  }

  onClick() {
    const res = confirm("해당 게임을 초기화 시키시겠습니까?");
    if (res) {
      this.resetGame();
    }
  }
}
