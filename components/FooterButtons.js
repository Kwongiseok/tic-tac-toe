import NewGameButton from "./NewGameButton.js";
import ResetGameButton from "./ResetGameButton.js";

export default class FooterButtons {
  constructor($app, resetTurn) {
    this.$footerButtons = document.createElement("div");
    this.$footerButtons.className = "footerButtons";
    $app.appendChild(this.$footerButtons);

    this.$newGameButton = new NewGameButton(this.$footerButtons, resetTurn);
    this.$resetGameButton = new ResetGameButton(this.$footerButtons, resetTurn);
  }
}
