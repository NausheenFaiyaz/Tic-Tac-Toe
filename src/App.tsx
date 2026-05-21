import { useMemo, useState } from 'react';
import Board from './components/Board';
import GameResultModal from './components/GameResultModal';
import TurnPanel from './components/TurnPanel';
import { getWinner, isDraw, type CellValue, type Player } from './game';
import './App.css';

const INITIAL_CELLS: CellValue[] = Array.from({ length: 9 }, () => null);

export default function App() {
  const [cells, setCells] = useState<CellValue[]>(INITIAL_CELLS);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');

  const winner = useMemo(() => getWinner(cells), [cells]);
  const draw = useMemo(() => isDraw(cells, winner), [cells, winner]);
  const gameFinished = winner !== null || draw;

  const handleCellClick = (index: number) => {
    if (cells[index] !== null || gameFinished) {
      return;
    }

    setCells((previousCells) => {
      const nextCells = [...previousCells];
      nextCells[index] = currentPlayer;
      return nextCells;
    });

    setCurrentPlayer((previousPlayer) => (previousPlayer === 'X' ? 'O' : 'X'));
  };

  const resetGame = () => {
    setCells(INITIAL_CELLS);
    setCurrentPlayer('X');
  };

  return (
    <main className="app">
      <section className="game-card">
        <h1 className="title">Pixel Tic Tac Toe</h1>

        <TurnPanel currentPlayer={currentPlayer} gameFinished={gameFinished} />

        <Board
          cells={cells}
          disabled={gameFinished}
          winningLine={winner?.line ?? []}
          onCellClick={handleCellClick}
        />

        <button className="reset-button" type="button" onClick={resetGame}>
          Reset Game
        </button>
      </section>

      <GameResultModal winner={winner} draw={draw} onPlayAgain={resetGame} />
    </main>
  );
}
