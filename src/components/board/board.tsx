import { Player } from "../../models/game";
import { Square } from "../square/square";
import './board.css';

export function Board(props: { squares: Player[]; onClick: (i: number) => void }) {
  const renderSquare = (i: number) => (
    <Square
      value={props.squares[i]}
      position={i}
      onClick={() => props.onClick(i)}
    />
  );
  return (
    <div>
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
    </div>
  );
}