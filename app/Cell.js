export const Colors = ['red', 'blue', 'yellow', 'gray', 'green', 'orange', 'brown', 'gold', 'red', 'blue', 'yellow', 'gray', 'green', 'orange', 'brown', 'gold'];

export class Cell {
    constructor(color, number) {
        this.color = color;
        this.number = number;
    }

    renderCell() {
        const cell = document.createElement("div");
        cell.setAttribute('class', `cell ${this.color} ${this.number}`);

        return cell;
    }

}