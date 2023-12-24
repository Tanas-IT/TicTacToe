import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helpers";

const Game = () => {
  // object destructuring
  /* const obj = {
        name: "Tanas",
        age: 20
    }

    const {name, age} = obj (object destructuring)
    */
  //   const [board, setBoard] = useState(Array(9).fill(null));
  //   const [xIsNext, setXIsNext] = useState(true);
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
    prevBoard: Array(9).fill(null),
    name: "Tanas",
  });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xIsNext ? "X" : "O";
    setState({
      ...state,
      boardPrev: state.board,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
    // setBoard(boardCopy);
    // setXIsNext((state.xIsNext) => !state.xIsNext);
  };
  const handleResetGame = () => {
    setState({
      ...state,
      board: Array(9).fill(null),
      xIsNext: true,
    });
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
  };
  const handleRedoGame = (boardCopy) => {
    setState({
      ...state,
      board: state.boardPrev,
      xIsNext: !state.xIsNext,
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner"> Winner is {winner}</div>}
      <div className="group-button">
        <button className="game-redo" onClick={handleRedoGame}>
          Redo
        </button>
        <button className="game-reset" onClick={handleResetGame}>
          Reset game
        </button>
      </div>
    </div>
  );
};
export default Game;
