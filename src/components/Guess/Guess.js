import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map(i => (
        <span key={i} 
              className={`cell ${result ? result[i]?.status : ''}`}
        >
          {value[i]}
        </span>
      ))}
    </p>
  )
}

export default Guess;
