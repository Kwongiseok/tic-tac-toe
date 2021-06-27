export default class Score {
  constructor($app) {
    this.state = { left: 0, right: 0 };
    this.$scoreContainer = document.createElement("div");
    this.$scoreContainer.className = "scoreContainer";
    this.$score = document.createElement("span");
    this.$score.className = "score";
    this.$score.innerHTML = "0 : 0";
    this.$scoreContainer.appendChild(this.$score);
    $app.appendChild(this.$scoreContainer);
  }

  setState() {}

  render() {}
}
