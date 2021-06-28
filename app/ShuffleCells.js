import { Cell, Colors } from './Cell.js';

export class ShuffleCells {
    cells = [];
    constructor() {
        Colors.forEach((color, index) => {
            this.cells.push(new Cell(color, index));
        });
    }

    shuffle() {
        for (let i = this.cells.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = this.cells[i];
            this.cells[i] = this.cells[j];
            this.cells[j] = temp;
        }
        return this.cells;
    }
} 