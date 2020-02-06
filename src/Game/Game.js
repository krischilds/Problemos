import React, { Component } from "react";
import Cell from "./Cell";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      justClicked: null,
      cells: Array(9).fill(null),
      isComplete: false
    };
  }

  handleBoxClick(index) {
    if (!this.state.isComplete) {
      const boxes = this.state.cells.slice();
      const numCells = boxes.length / 3;
      if (!boxes[index]) {
        const next = this.state.justClicked ? "X" : "O";
        boxes[index] = next;

        for (let i = 0; i < numCells; i++) {
          this.checkRow(i, numCells, boxes);
        }

        for (let i = 0; i < numCells; i++) {
          this.checkCol(i, numCells, boxes);
        }

        this.setState({
          justClicked: !this.state.justClicked,
          cells: boxes
        });
      }
    }
  }

  checkRow(row, rows, boxes) {
    // is game over
    const result =
      boxes[row * rows + 0] + boxes[row * rows + 1] + boxes[row * rows + 2];
    console.info("RESULTS = " + result);
    if (result === "XXX" || result === "OOO") {
      this.setState({ isComplete: true });
    }
  }

  checkCol(col, rows, boxes) {
    let row = 0;

    const col1Row1 = col + rows * row;
    row++;
    const col1Row2 = col + rows * row;
    row++;
    const col1Row3 = col + rows * row;

    const result = boxes[col1Row1] + boxes[col1Row2] + boxes[col1Row3];
    if (result === "XXX" || result === "OOO") {
      this.setState({ isComplete: true });
    }

    return result;
  }

  checkDiagonals(boxes) {
    return true;
  }

  render() {
    return (
      <div
        style={{
          width: "50%",
          padding: "10px",
          fontFamily: "Arial",
          fontWeight: "bold"
        }}
      >
        <div style={{ display: "flex" }}>
          <Cell
            value={this.state.cells[0]}
            onClick={() => this.handleBoxClick(0)}
          />
          <Cell
            value={this.state.cells[1]}
            onClick={() => this.handleBoxClick(1)}
          />
          <Cell
            value={this.state.cells[2]}
            onClick={() => this.handleBoxClick(2)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Cell
            value={this.state.cells[3]}
            onClick={() => this.handleBoxClick(3)}
          />
          <Cell
            value={this.state.cells[4]}
            onClick={() => this.handleBoxClick(4)}
          />
          <Cell
            value={this.state.cells[5]}
            onClick={() => this.handleBoxClick(5)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Cell
            value={this.state.cells[6]}
            onClick={() => this.handleBoxClick(6)}
          />
          <Cell
            value={this.state.cells[7]}
            onClick={() => this.handleBoxClick(7)}
          />
          <Cell
            value={this.state.cells[8]}
            onClick={() => this.handleBoxClick(8)}
          />
        </div>
      </div>
    );
  }
}
