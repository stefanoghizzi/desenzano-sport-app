import Player from "./Player";
import './TicTacToe.css';

export default function TicTacToe() {

  return (
    <section className="tic-tac-toe df-fdc-jcc-aic padding-l">

      <div className="game-container padding-s">
        <ol className="players df-jcc-aic">
          <Player 
            initialName='Player 1'
            symbol='X'
          />
          <Player 
            initialName='Player 2'
            symbol='O'
          />
        </ol>
        Game board
      </div>

      Log

    </section>
  );
}
