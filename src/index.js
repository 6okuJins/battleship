import { Player, Ship, Gameboard, Ai } from './classes';

const Controller = (() => {
  //initalize game
  const player = Player();
  const ai = Ai();
  player.gameboard = Gameboard();
  ai.gameboard = Gameboard();
  
  let currentPlayer = player;
  let currentOpponent = ai;

  // mock setup
  player.gameboard.placeShip(Ship(5), [0,1,2,3,4]);
  player.gameboard.placeShip(Ship(4), [5,6,7,8]);
  player.gameboard.placeShip(Ship(3), [9,10,11]);
  player.gameboard.placeShip(Ship(2), [12,13]);
  player.gameboard.placeShip(Ship(1), [14]);
  ai.gameboard.placeShip(Ship(5), [0,1,2,3,4]);
  ai.gameboard.placeShip(Ship(4), [5,6,7,8]);
  ai.gameboard.placeShip(Ship(3), [9,10,11]);
  ai.gameboard.placeShip(Ship(2), [12,13]);
  ai.gameboard.placeShip(Ship(1), [14]);

  // game loop
  while (!(player.gameboard.gameOver() || ai.gameboard.gameOver())) {

    let move;
    if (currentPlayer == player) {
      move = prompt('Make your move');
      player.setVisited(move);
    } else {
      move = ai.getMove();
    }
    currentOpponent.gameboard.recieveAttack(move);
    [currentPlayer, currentOpponent] = [currentOpponent, currentPlayer];
  }
})();