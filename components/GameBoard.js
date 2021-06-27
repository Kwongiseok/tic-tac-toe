export default class GameBoard {
  constructor($app, initialTurn, updateTurn, updateWinner) {
    this.state = { turn: initialTurn, lines: [], squares: [] }; // turn
    this.updateTurn = updateTurn;
    this.updateWinner = updateWinner;
    this.$gameBoardContainer = document.createElement("div");
    this.$gameBoardContainer.className = "gameBoardContainer";

    this.$gameBoard = document.createElement("table");
    this.$gameBoard.className = "gameBoard";

    this.$gameBoardContainer.appendChild(this.$gameBoard);
    $app.appendChild(this.$gameBoardContainer);

    for (let i = 0; i < 3; i++) {
      const $tr = document.createElement("tr");
      $tr.className = "gameBoard__tr";
      //데이터 관리 줄, 칸
      this.state.lines.push($tr);
      this.state.squares.push([]);
      this.$gameBoard.append($tr);
      for (let j = 0; j < 3; j++) {
        const $td = document.createElement("td");
        $td.className = "gameBoard__td";
        this.state.squares[i].push($td);
        $tr.append($td);
      }
    }
    //클릭이벤트
    this.$gameBoard.addEventListener("click", this.clickEvent.bind(this)); // this 바인드 공부
  }

  async clickEvent(e) {
    if (e.target.innerHTML) {
      // 비어있지 않다면
      alert("이미 클릭된 부분입니다.!");
      return;
    }
    e.target.innerHTML = this.state.turn;
    const res = await this.checkWinner(e.target);
    if (res) {
      if (res !== "무승부") {
        this.updateWinner(this.state.turn);
      } else {
        // 무승부
        alert("무승부 입니다!");
        this.resetBoard();
      }
    } else {
      const turn = this.state.turn === "O" ? "X" : "O";
      this.updateTurn(turn);
    }
  }

  makeStoneHTML() {
    if (this.state.turn === "O") {
      return ``;
    } else {
    }
  }

  resetBoard() {
    this.state.squares.forEach((lines) => {
      lines.forEach((square) => {
        square.innerHTML = "";
      });
    });
  }

  checkWinner(target) {
    //몇줄
    const lineIndex = this.state.lines.indexOf(target.parentNode);
    const line = this.state.squares[lineIndex];
    //현재 칸

    //몇칸
    const squareIndex = line.indexOf(target);

    // 클릭 이벤트가 끝났을떄 승리, 패배 로직을 판단해야하다
    let full = false;
    //1차 가로줄 판단로직
    if (
      this.state.squares[lineIndex][0].innerHTML === this.state.turn &&
      this.state.squares[lineIndex][1].innerHTML === this.state.turn &&
      this.state.squares[lineIndex][2].innerHTML === this.state.turn
    ) {
      return true;
    }
    // 2차 세로줄 판단로직
    if (
      this.state.squares[0][squareIndex].innerHTML === this.state.turn &&
      this.state.squares[1][squareIndex].innerHTML === this.state.turn &&
      this.state.squares[2][squareIndex].innerHTML === this.state.turn
    ) {
      return true;
    }

    // 3차 대각선 판단 로직
    //대각선은 [0,0], [1, 1], [2, 2]  [0, 2], [1, 1], [2,0] 두가지일때
    // x, y값을 뺐을떄 0이 되거나 x, y를 뺏을떄 절대값 2가 되어야한다
    if (lineIndex - squareIndex === 0 || Math.abs(lineIndex - squareIndex) === 2) {
      if (
        (this.state.squares[0][0].innerHTML === this.state.turn &&
          this.state.squares[1][1].innerHTML === this.state.turn &&
          this.state.squares[2][2].innerHTML === this.state.turn) ||
        (this.state.squares[0][2].innerHTML === this.state.turn &&
          this.state.squares[1][1].innerHTML === this.state.turn &&
          this.state.squares[2][0].innerHTML === this.state.turn)
      ) {
        return true;
      }
    }

    for (let i = 0; i < this.state.squares.length; i++) {
      for (let j = 0; j < this.state.squares[i].length; j++) {
        if (!this.state.squares[i][j].innerHTML) {
          return false;
        }
      }
    }
    return "무승부";
  }

  setState(nextState) {
    this.state = nextState;
  }
}
