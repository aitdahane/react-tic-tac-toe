export type Player = 'X' | 'O';

export interface GameState {
  squares: Player[];
  currentSquareValue: Player;
  gameOver?: boolean;
  winner?: Player;
}
