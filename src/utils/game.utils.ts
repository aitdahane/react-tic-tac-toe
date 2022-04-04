import { GameState, Player } from '../models/game';

export const isWinner = (squareValue: Player, squares: Player[]): boolean => {
  const winningLines = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  return winningLines.some((winningLine) =>
    winningLine.every((i) => squareValue === squares[i])
  );
};

export const isDraw = (squares: Player[]) => {
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
