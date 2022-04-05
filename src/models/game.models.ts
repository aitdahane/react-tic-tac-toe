export type Symbol = 'X' | 'O';

export interface GameState {
  squares: Symbol[];
  currentSquareValue: Symbol;
  gameOver?: boolean;
  winner?: Symbol;
}

export interface BoardProps {
  squares: Symbol[];
  winner?: Symbol;
  onClick: (i: number) => void;
}

export enum WinningLine {
  LEFT_TO_RIGHT_1 = 'LEFT_TO_RIGHT_1',
  LEFT_TO_RIGHT_2 = 'LEFT_TO_RIGHT_2',
  LEFT_TO_RIGHT_3 = 'LEFT_TO_RIGHT_3',
  TOP_TO_BOTTOM_1 = 'TOP_TO_BOTTOM_1',
  TOP_TO_BOTTOM_2 = 'TOP_TO_BOTTOM_2',
  TOP_TO_BOTTOM_3 = 'TOP_TO_BOTTOM_3',
  TOP_LEFT_TO_BOTTOM_RIGHT = 'TOP_LEFT_TO_BOTTOM_RIGHT',
  TOP_RIGHT_TO_BOTTOM_LEFT = 'TOP_RIGHT_TO_BOTTOM_LEFT',
}

export const WINNING_LINES = [
  {
    name: WinningLine.LEFT_TO_RIGHT_1,
    value: [0, 1, 2],
    coordinates: { x1: '5%', y1: '16%', x2: '95%', y2: '16%' },
  },
  {
    name: WinningLine.LEFT_TO_RIGHT_2,
    value: [3, 4, 5],
    coordinates: { x1: '5%', y1: '50%', x2: '95%', y2: '50%' },
  },
  {
    name: WinningLine.LEFT_TO_RIGHT_3,
    value: [6, 7, 8],
    coordinates: { x1: '5%', y1: '83%', x2: '95%', y2: '83%' },
  },
  {
    name: WinningLine.TOP_TO_BOTTOM_1,
    value: [0, 3, 6],
    coordinates: { x1: '16%', y1: '5%', x2: '16%', y2: '95%' },
  },
  {
    name: WinningLine.TOP_TO_BOTTOM_2,
    value: [1, 4, 7],
    coordinates: { x1: '50%', y1: '5%', x2: '50%', y2: '95%' },
  },
  {
    name: WinningLine.TOP_TO_BOTTOM_3,
    value: [2, 5, 8],
    coordinates: { x1: '83%', y1: '5%', x2: '83%', y2: '95%' },
  },
  {
    name: WinningLine.TOP_LEFT_TO_BOTTOM_RIGHT,
    value: [0, 4, 8],
    coordinates: { x1: '5%', y1: '5%', x2: '95%', y2: '95%' },
  },
  {
    name: WinningLine.TOP_RIGHT_TO_BOTTOM_LEFT,
    value: [2, 4, 6],
    coordinates: { x1: '95%', y1: '5%', x2: '5%', y2: '95%' },
  },
];
