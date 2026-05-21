import type { CellValue, Player } from '../game';
import crossImage from '../assets/Cross.png';
import heartImage from '../assets/heart.png';

interface CellProps {
  value: CellValue;
  onClick: () => void;
  disabled: boolean;
  highlight: boolean;
  index: number;
}

const iconByPlayer: Record<Player, string> = {
  X: crossImage,
  O: heartImage,
};

export default function Cell({ value, onClick, disabled, highlight, index }: CellProps) {
  return (
    <button
      type="button"
      className={`cell ${highlight ? 'cell--highlight' : ''}`.trim()}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Cell ${index + 1}${value ? `, ${value}` : ''}`}
    >
      {value !== null && (
        <img
          className="cell__icon"
          src={iconByPlayer[value]}
          alt={value === 'X' ? 'Cross move' : 'Heart move'}
          draggable={false}
        />
      )}
    </button>
  );
}
