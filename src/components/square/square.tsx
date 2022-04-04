import { Player } from '../../models/game';
import './square.css';

export function Square(props: {
  value: null | Player;
  position: number;
  onClick: () => void;
}) {
  const className = `square square--${props.position}`;
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
