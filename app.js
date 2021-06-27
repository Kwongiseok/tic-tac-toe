import FooterButtons from "./components/footerButtons.js";
import GameBoard from "./components/GameBoard.js";
import Score from "./components/Score.js";
import Title from "./components/Title.js";

export default class App {
  constructor($main) {
    this.state = {
      turn: "O",
    };

    this.$app = document.createElement("div");
    $main.appendChild(this.$app);

    this.$title = new Title(this.$app);

    this.$score = new Score(this.$app);

    this.$gameBoard = new GameBoard(this.$app, this.state.turn);

    this.$footerButtons = new FooterButtons(this.$app, () => {
      this.$gameBoard.resetBoard();
      this.setState({ ...this.state, turn: "O" });
    });
  }

  setState(nextState) {
    this.state = nextState;
  }

  render() {}
}
