import type { WinResult } from '../game';

interface GameResultModalProps {
  winner: WinResult | null;
  draw: boolean;
  onPlayAgain: () => void;
}

export default function GameResultModal({ winner, draw, onPlayAgain }: GameResultModalProps) {
  if (!winner && !draw) {
    return null;
  }

  const resultTitle = winner ? (winner.winner === 'X' ? 'CROSS WINS' : 'HEART WINS') : 'DRAW GAME';
  const resultMessage = winner
    ? winner.winner === 'X'
      ? 'Cross conquered the grid.'
      : 'Heart captured the board.'
    : 'No winner this round. Try again!';

  return (
    <div className="result-modal" role="dialog" aria-modal="true" aria-labelledby="game-result-title">
      <div className="result-modal__card">
        <p className="result-modal__label">GAME OVER</p>
        <h2 id="game-result-title" className="result-modal__title">
          {resultTitle}
        </h2>
        <p className="result-modal__message">{resultMessage}</p>
        <button type="button" className="result-modal__button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}
