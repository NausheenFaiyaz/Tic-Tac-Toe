import Cell from './Cell';
import type { CellValue } from '../game';

interface BoardProps {
  cells: CellValue[];
  disabled: boolean;
  winningLine: number[];
  onCellClick: (index: number) => void;
}

export default function Board({ cells, disabled, winningLine, onCellClick }: BoardProps) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {cells.map((value, index) => {
        const isHighlighted = winningLine.includes(index);

        return (
          <Cell
            key={index}
            value={value}
            index={index}
            highlight={isHighlighted}
            disabled={disabled || value !== null}
            onClick={() => onCellClick(index)}
          />
        );
      })}
    </div>
  );
}
