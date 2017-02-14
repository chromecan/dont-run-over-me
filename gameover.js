var text, button;

var Gameover = {

  preload: function() {
    game.stage.backgroundColor = '#fff';
    game.load.image('button', './images/button.png');
  },

  create: function() {
    text = game.add.text(game.width/2, 50, 'Has perdido!!!')
    text.fill = '#000';
    text.anchor.setTo(0.5);

    button = game.add.button(game.width/2, 200, 'button', this.startGame, this)
    button.anchor.setTo(0.5);

  },

  startGame() {
    this.state.start('Game');
  }

}
