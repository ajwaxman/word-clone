import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`
    }

    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else {
      if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus('lost');
      }
    }
  }


  return(
    <>
      <Banner 
        gameStatus={gameStatus}
        numOfGuesses={guesses.length}
        answer={answer} />
      <GuessResults 
        guesses={guesses}
        answer={answer}/>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}/>
    </>
  )
}

export default Game;
