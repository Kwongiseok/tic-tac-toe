import FooterButtons from "./components/footerButtons.js";
import GameBoard from "./components/GameBoard.js";
import Score from "./components/Score.js";
import Title from "./components/Title.js";

export default class App {
  constructor($main) {
    this.state = {
      turn: "O",
      left__score: 0,
      right__score: 0,
    };

    this.$app = document.createElement("div");
    $main.appendChild(this.$app);

    this.$title = new Title(this.$app);

    this.$score = new Score(this.$app, { left__score: this.state.left__score, right__score: this.state.right__score });

    this.$gameBoard = new GameBoard(
      this.$app,
      this.state.turn,
      (turn) => {
        this.setState({ ...this.state, turn });
      },
      (winner) => {
        if (winner === "O") {
          alert("승자는 O 입니다. :)");
          this.setState({ ...this.state, left__score: this.state.left__score + 1 });
        } else {
          alert("승자는 X 입니다. :)");
          this.setState({ ...this.state, right__score: this.state.right__score + 1 });
        }
        this.$gameBoard.resetBoard();
      }
    );

    this.$footerButtons = new FooterButtons(
      this.$app,
      () => {
        this.$gameBoard.resetBoard();
        this.setState({ ...this.state, turn: "O" });
      },
      () => {
        this.$gameBoard.resetBoard();
        this.setState({ right__score: 0, left__score: 0, turn: "0" });
      }
    );
  }

  setState(nextState) {
    this.state = nextState;
    this.$gameBoard.setState({ ...this.$gameBoard.state, turn: this.state.turn });
    this.$score.setState({ left__score: this.state.left__score, right__score: this.state.right__score });
  }

  render() {}
}
