import { GameState, Symbol, WINNING_LINES } from '../models/game.models';

export const isWinner = (squareValue: Symbol, squares: Symbol[]): boolean => {
  return WINNING_LINES.some((winningLine) =>
    winningLine.value.every((i) => squareValue === squares[i])
  );
};

export const findWinningLine = (
  squareValue: Symbol,
  squares: Symbol[]
): any => {
  if (!squares?.length || !squareValue) {
    return null;
  }
  return WINNING_LINES.find((winningLine) =>
    winningLine.value.every((i) => squareValue === squares[i])
  );
};

export const isDraw = (squares: Symbol[]) => {
  return squares.every((i) => !!i);
};

export const computeStatus = (state: GameState) => {
  const { currentSquareValue, gameOver, winner } = state;
  if (winner) {
    return 'Winner: ' + winner;
  }
  if (gameOver) {
    return 'Draw';
  }
  return 'Next player: ' + currentSquareValue;
};
