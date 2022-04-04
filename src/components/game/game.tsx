import { Component } from "react";
import { GameState, Player } from "../../models/game";
import { computeStatus, isDraw, isWinner } from "../../utils/game.utils";
import { Board } from "../board/board";
import './game.css'

export class Game extends Component<{}, GameState> {
  private initialState = {
    squares: Array(9).fill(null) as Player[],
    currentSquareValue: 'X' as Player,
    gameOver: false,
    winner: undefined,
  };

  constructor(props: GameState) {
    super(props);
    this.state = { ...this.initialState };
  }

  render() {
    return (
      <div className='game'>
        <div className='game-status'>{computeStatus(this.state)}</div>
        <div className='game-board'>
          <Board
            squares={this.state.squares}
            onClick={(i) => this.handleClickOnSquare(i)}
          />
        </div>
        <div>
          <button
            className='game-restart-btn'
            onClick={() => this.setState({ ...this.initialState })}>
            Restart
          </button>
        </div>
      </div>
    );
  }

  private handleClickOnSquare(i: number): void {
    const squares = this.state.squares.slice();
    if (squares[i] || this.state.gameOver) {
      return;
    }
    squares[i] = this.state.currentSquareValue.slice() as Player;
    const win = isWinner(squares[i], squares);
    const draw = isDraw(squares);
    this.setState({
      squares: squares,
      currentSquareValue: this.state.currentSquareValue === 'X' ? 'O' : 'X',
      winner: win ? this.state.currentSquareValue : undefined,
      gameOver: win || draw,
    });
  }
}
