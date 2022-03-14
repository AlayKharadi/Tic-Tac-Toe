import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares!: any[]; //assigment assertion - Definite Assignment
  declare xIsNext: boolean; //Ambient declaration
  winner!: string;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.playSound('assets/win.wav');
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  get nextPlayer() {
    return this.xIsNext ? 'X' : 'O';
  }

  playSound(url: string){
    new Audio(url).play();
  }

  newMove(index: number) {
    if ((!this.winner) && (!this.squares[index])) {
      this.playSound(this.xIsNext ? 'assets/sound-X.wav' : 'assets/sound-O.wav');
      this.squares.splice(index, 1, this.nextPlayer);
      this.xIsNext = !this.xIsNext;
      this.winner = this.findWinner();
    } else {
      this.playSound('assets/error.wav');
    }
  }

  findWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && (this.squares[a] === this.squares[b]) && (this.squares[a] === this.squares[c])) {    
        setTimeout(() => {
          this.playSound('assets/win.wav');
        }, 1000)
        return this.squares[a];
      }
    }
    return null;
  }
}
