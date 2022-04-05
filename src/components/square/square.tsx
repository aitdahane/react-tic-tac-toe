import { Symbol } from '../../models/game.models';
import './square.css';

export function Square(props: {
  symbol: null | Symbol;
  position: number;
  onClick: () => void;
}) {
  const className = `square square--${props.position}`;;
  return (
    <button className={className} onClick={props.onClick}>
      <SquareSymbol symbol={props.symbol} />
    </button>
  );
}

function SquareSymbol(props: { symbol: null | Symbol }) {
  if (props.symbol === 'X') {
    return <XSymbol />;
  }
  if (props.symbol === 'O') {
    return <OSymbol />;
  }
  return null;
}

function OSymbol() {
  return (
    <svg width='100%' height='100%'>
      <circle
        cx='45'
        cy='45'
        r='30'
        stroke='#333'
        stroke-width='4'
        fill='transparent'
      />
    </svg>
  );
}

function XSymbol() {
  const style = { stroke: '#333', strokeWidth: '4' };
  return (
    <svg width='100%' height='100%'>
      <line
        x1='15'
        y1='15'
        x2='80'
        y2='80'
        style={style}
      />
      <line
        x1='80'
        y1='15'
        x2='15'
        y2='80'
        style={style}
      />
    </svg>
  );
}
