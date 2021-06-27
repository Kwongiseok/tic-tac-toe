export default class Score {
  constructor($app, initialState) {
    this.state = initialState;
    this.$scoreContainer = document.createElement("div");
    this.$scoreContainer.className = "scoreContainer";
    this.$score = document.createElement("span");
    this.$score.className = "score";
    this.$score.innerHTML = `${this.state.left__score} : ${this.state.right__score}`;
    this.$scoreContainer.appendChild(this.$score);
    $app.appendChild(this.$scoreContainer);
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$score.innerHTML = `${this.state.left__score} : ${this.state.right__score}`;
  }
}
