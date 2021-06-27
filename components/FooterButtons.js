import NewGameButton from "./NewGameButton.js";
import ResetGameButton from "./ResetGameButton.js";

export default class FooterButtons {
  constructor($app, newGame, resetGame) {
    this.$footerButtons = document.createElement("div");
    this.$footerButtons.className = "footerButtons";
    $app.appendChild(this.$footerButtons);

    this.$newGameButton = new NewGameButton(this.$footerButtons, newGame);
    this.$resetGameButton = new ResetGameButton(this.$footerButtons, resetGame);
  }
}
