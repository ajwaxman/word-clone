import React from "react";

function GuessInput({handleSubmitGuess, gameStatus}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5 ) {
      window.alert('Please enter exactly 5 characters. 💖');
      return;
    }

    handleSubmitGuess(tentativeGuess);

    console.log({tentativeGuess});

    setTentativeGuess('');
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input
        autoFocus
        required
        pattern={".{5,5}"}
        title="Your guess must be 5 characters long"
        type="text"
        id="guess-input"
        value={tentativeGuess}
        onChange={ (event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        disabled={gameStatus !== 'running'}
      >
      </input>
    </form>
  );
}

export default GuessInput;
