import { BoardProps, Symbol } from '../../models/game.models';
import { findWinningLine } from '../../utils/game.utils';
import { Square } from '../Square/square';
import './board.css';

export function Board(props: BoardProps) {
  const renderSquare = (i: number) => (
    <Square
      symbol={props.squares[i]}
      position={i}
      onClick={() => props.onClick(i)}
    />
  );
  return (
    <div className='board'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <WinningLine winner={props.winner} squares={props.squares} />
    </div>
  );
}

function WinningLine(props: { winner: Symbol; squares: Symbol[] }) {
  const winningLine = findWinningLine(props.winner, props.squares);
  console.log(winningLine);
  const style = { stroke: '#333', strokeWidth: '4' };
  if (!winningLine) {
    return null;
  }
  const { x1, x2, y1, y2 } = winningLine.coordinates;
  return (
    <svg className='board-winningLine' width='100%' height='100%'>
      <line x1={x1} y1={y1} x2={x2} y2={y2} style={style} />
    </svg>
  );
}
