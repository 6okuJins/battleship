import {Ai, Player, Ship, Gameboard } from '.';

const Controller = (positions) => {
  // initialize DOM
  //initalize game
  const player = Player();
  let ai = Ai();
  player.gameboard = Gameboard();
  ai.gameboard = Gameboard();
  
  const easyAI = () => ai.easyAI();
  const hardAI = () => ai.hardAI();
  const getPDF = () => ai.getPDF();
  for (const position of positions) {
    player.gameboard.placeShip(Ship(position.length), position);
  }
  // mock setup
  for (const position of ai.getPositions()) {
    ai.gameboard.placeShip(Ship(position.length), position);
  }

  // console.table(ai.getPositions());
  const playRound = (playerMove) => {
    const result = [];
    result.push(ai.gameboard.recieveAttack(playerMove));
    const aiMove = ai.getMove();
    const playerTileStatus = player.gameboard.recieveAttack(aiMove);
    console.log(playerTileStatus);
    ai.setVisited(aiMove, (playerTileStatus ? 'Hit' : 'Miss'));
    result.push(aiMove);
    if (player.gameboard.gameOver()) {
      result.push('You Lose!');
    }
    else if (ai.gameboard.gameOver()) {
      result.push('You Win!');
    }
    return result;
  }
  return {
    playRound,
    easyAI,
    hardAI,
    getPDF
  }
};

export default Controller;