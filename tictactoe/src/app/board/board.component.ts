import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(27).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      // Each layer
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [9, 10, 11],
      [12, 13, 14],
      [15, 16, 17],
      [9, 12, 15],
      [10, 13, 16],
      [11, 14, 17],
      [9, 13, 17],
      [11, 13, 15],
      [18, 19, 20],
      [21, 22, 23],
      [24, 25, 26],
      [18, 21, 24],
      [19, 22, 25],
      [20, 23, 26],
      [18, 22, 26],
      [20, 22, 24],
      // Downwards
      [0, 9, 18],
      [1, 10, 19],
      [2, 11, 20],
      [3, 12, 21],
      [4, 13, 22],
      [5, 14, 23],
      [6, 15, 24],
      [7, 16, 25],
      [8, 17, 26],
      // Diagonal across and down
      [0, 13, 26],
      [1, 13, 25],
      [2, 13, 24],
      [3, 13, 23],
      [4, 13, 22],
      [5, 13, 21],
      [6, 13, 20],
      [7, 13, 19],
      [8, 13, 18],
      // Diagonal vertical
      [0, 12, 24],
      [1, 13, 25],
      [2, 14, 26],
      [6, 12, 18],
      [7, 13, 19],
      [8, 14, 20],
      // Diagonal horizontal
      [0, 10, 20],
      [3, 13, 23],
      [6, 16, 26],
      [2, 10, 18],
      [5, 13, 21],
      [8, 16, 24]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}