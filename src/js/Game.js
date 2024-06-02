export default class Game {
  constructor() {
    this.arrGameBoard = [];
  }

  startGame() {
    this.arrGameBoard = Array.from(document.querySelectorAll('.cell'));
    setInterval(() => {
      this.positionGoblin();
    }, 500);
  }

  positionGoblin() {
    const newPosition = Math.floor(Math.random() * (this.arrGameBoard.length));
    if (this.goblinPosition >= 0) {
      this.arrGameBoard[this.goblinPosition].classList.remove('goblin');
    }

    if (this.goblinPosition !== newPosition) {
      this.goblinPosition = newPosition;
      this.arrGameBoard[this.goblinPosition].classList.add('goblin');
    }
  }
}
