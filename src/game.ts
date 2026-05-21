export type Player = 'X' | 'O';
export type CellValue = Player | null;

export interface WinResult {
  winner: Player;
  line: [number, number, number];
}

const WINNING_LINES: Array<[number, number, number]> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function getWinner(cells: CellValue[]): WinResult | null {
  for (const [a, b, c] of WINNING_LINES) {
    const value = cells[a];
    if (value !== null && value === cells[b] && value === cells[c]) {
      return {
        winner: value,
        line: [a, b, c],
      };
    }
  }

  return null;
}

export function isDraw(cells: CellValue[], winner: WinResult | null): boolean {
  return winner === null && cells.every((cell) => cell !== null);
}
