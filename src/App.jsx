import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {

  const [activePlayer,setActivePlayer] =  useState('X');
  const [gameTurns,setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X' );

    setGameTurns(prevTurns => {

      let currentActivePlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player == 'X'){
        currentActivePlayer = 'O';
      }

      const updatedTurn = [{square : {'row' : rowIndex,'col' : colIndex}, 
                'player' : currentActivePlayer},...prevTurns];

      return updatedTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log />
    </main>
  );
}

export default App;
