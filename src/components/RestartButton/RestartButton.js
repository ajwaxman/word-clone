import React from "react";
import { WORDS } from "../../data";
import { sample } from '../../utils';

function RestartButton({gameStatus, setGuesses, setGameStatus, setAnswer}) {

  function restartGame() {
    console.log("hello");
    setGuesses([]);
    setGameStatus('running');
    setAnswer(sample(WORDS));
  }

  if (gameStatus !== 'running') {
    return(
      <button 
        className="restart-button"
        onClick={restartGame}>
          Restart Game
      </button>
    );
  }

}

export default RestartButton;
