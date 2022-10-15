import React from "react";
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({guesses, answer}) {

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map(i => (
          <Guess key={i} value={guesses[i] ? guesses[i]?.value : ''} answer={answer}/>
        ))}
      </div>
    </>
  );
}

export default GuessResults;
