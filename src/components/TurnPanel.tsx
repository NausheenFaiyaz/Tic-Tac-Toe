import type { Player } from '../game';
import crossImage from '../assets/Cross.png';
import heartImage from '../assets/heart.png';

interface TurnPanelProps {
  currentPlayer: Player;
  gameFinished: boolean;
}

export default function TurnPanel({ currentPlayer, gameFinished }: TurnPanelProps) {
  const activePlayer = gameFinished ? null : currentPlayer;

  return (
    <div className="turn-panel" aria-label="Player turn panel">
      <article className={`player-card ${activePlayer === 'O' ? 'player-card--active' : ''}`.trim()}>
        <div className="player-card__avatar player-card__avatar--o" aria-hidden="true">
          <img className="player-card__avatar-image" src={heartImage} alt="Heart avatar" draggable={false} />
        </div>
        <p className="player-card__name">Player Heart</p>
      </article>

      <article className={`player-card ${activePlayer === 'X' ? 'player-card--active' : ''}`.trim()}>
        <div className="player-card__avatar player-card__avatar--x" aria-hidden="true">
          <img className="player-card__avatar-image" src={crossImage} alt="Cross avatar" draggable={false} />
        </div>
        <p className="player-card__name">Player Cross</p>
      </article>
    </div>
  );
}
