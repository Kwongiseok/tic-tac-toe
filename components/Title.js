export default class Title {
  constructor($app) {
    this.$titleContainer = document.createElement("div");
    this.$title = document.createElement("span");
    this.$titleContainer.className = "titleContainer";
    this.$title.className = "title";
    this.$title.innerHTML = "Tic Tac Toe";
    this.$titleContainer.appendChild(this.$title);
    $app.appendChild(this.$titleContainer);
  }
}
