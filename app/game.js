import { ShuffleCells } from './ShuffleCells.js';



class Game {
    constructor(board) {
        this.board = board;
        this.shuffle = new ShuffleCells();
        this.ShuffledBoard = this.shuffle.shuffle();
        this.start = document.querySelector(".start");
        this.startButton = document.querySelector(".start-button");
        this.compare = [];
        // this.renderBoard();
        // this.Cells = document.querySelectorAll("div.cell");
        // setTimeout(() => {
        //     this.Cells.forEach((cell) => cell.classList.add('hide'));
        // }, 3000);
        // this.CellsAddEventListeners();
        this.startButton.addEventListener('click', this.initGame);
    }



    initGame = () => {
        this.startButton.style.opacity = "0";
        this.start.style.opacity = "0";
        setTimeout(() => {
            this.startButton.style.display = 'none';
            this.start.style.display = 'none';
        }, 3100);
        this.renderBoard();
        this.Cells = document.querySelectorAll("div.cell");
        setTimeout(() => {
            this.Cells.forEach((cell) => cell.classList.add('hide'));
            this.CellsAddEventListeners();
        }, 3000);

    }

    renderBoard() {
        this.ShuffledBoard.forEach((cell, index) => {
            this.board.appendChild(cell.renderCell())
        });
    }

    CellsAddEventListeners() {
        this.Cells.forEach((cell) => {
            cell.addEventListener('click', this.revealCell);
        })
    }

    isSame = () => {
        this.compare.forEach(cell => {
            cell.removeEventListener('click', this.revealCell);
            cell.style.backgroundColor = "black";
        });
        this.compare.splice(0, 2);
    }


    difrent = () => {
        this.compare.forEach(cell => {
            cell.classList.toggle('hide');
        });
        this.compare.splice(0, 2);
    }

    revealCell = (e) => {
        const target = e.target;
        target.classList.toggle("hide");
        this.compare.push(target);
        if (this.compare[0].classList[2] === this.compare[1].classList[2]) {
            setTimeout(this.difrent, 1000);
        } else if (this.compare[0].classList[1] === this.compare[1].classList[1]) {
            setTimeout(this.isSame, 1000);
        } else if (this.compare[0].classList[1] !== this.compare[1].classList[1]) {
            setTimeout(this.difrent, 1000);

        }
    }


}

const game = new Game(document.querySelector("main"));


