import {Ai, Player, Ship, Gameboard } from '.';

const Controller = (positions) => {
  // initialize DOM
  //initalize game
  const player = Player();
  const ai = Ai();
  player.gameboard = Gameboard();
  ai.gameboard = Gameboard();
  
  let currentPlayer = player;
  let currentOpponent = ai;

  for (const position of positions) {
    player.gameboard.placeShip(Ship(position.length), position);
  }
  // mock setup
  for (const position of ai.getPositions()) {
    ai.gameboard.placeShip(Ship(position.length), position);
  }

  console.table(ai.getPositions());
  // game loop
  // while (!(player.gameboard.gameOver() || ai.gameboard.gameOver())) {
  //   let move;

  //   if (currentPlayer == player) {
  //     move = prompt('Make your move');
  //     //move = 1;
  //     player.setVisited(move);
  //     if (move === 'break') {
  //       break;
  //     }
  //   } else {
  //     move = ai.getMove();
  //   }
  //   currentOpponent.gameboard.recieveAttack(move);
  //   [currentPlayer, currentOpponent] = [currentOpponent, currentPlayer];
  // }
  const playRound = (playerMove) => {
    const result = [];
    result.push(ai.gameboard.recieveAttack(playerMove));
    const aiMove = ai.getMove();
    player.gameboard.recieveAttack(aiMove);
    result.push(aiMove);
    if ((player.gameboard.gameOver() || ai.gameboard.gameOver())) {
      result.push(true);
    }
    return result;
  }
  return {
    playRound
  }
};

export default Controller;