export default class CurrentTurn {
  constructor($app, initialTurn) {
    this.state = { turn: initialTurn };
    this.$currentTurnWrapper = document.createElement("div");
    this.$currentTurnWrapper.className = "currentTurnWrapper";

    this.$currentTurn = document.createElement("span");
    this.$currentTurn.className = "currentTurn";
    this.$currentTurn.innerHTML = `현재 턴은 : ${this.state.turn} 입니다.`;

    this.$currentTurnWrapper.appendChild(this.$currentTurn);
    $app.appendChild(this.$currentTurnWrapper);
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$currentTurn.innerHTML = `현재 턴은 : ${this.state.turn} 입니다.`;
  }
}
