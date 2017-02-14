var game = new Phaser.Game(385,370, Phaser.CANVAS, 'game-div');

game.state.add('Game', Game);
game.state.add('Gameover', Gameover);
game.state.start('Game');
