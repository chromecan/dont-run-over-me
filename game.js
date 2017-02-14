var background, alien, cursors, cars, timer;

var Game = {

  preload: function() {
    game.load.image('road', './images/road.jpg');
    game.load.spritesheet('alien', './images/alien_sprite.png', 57, 57);
    game.load.image('car', './images/car.png');
  },

  create: function() {
    background = game.add.tileSprite(0, 0, 385, 370, 'road');

    alien = game.add.sprite(game.width/2, 320, 'alien');
    alien.anchor.setTo(0.5, 0.5);
    alien.animations.add('walk', [27,28,29,30,31,32,33,34,35], 10, true);
    game.physics.arcade.enable(alien, true);
    alien.enableBody = true

    cursors = game.input.keyboard.createCursorKeys();

    cars = game.add.group();
    game.physics.arcade.enable(cars, true);
    cars.enableBody = true;
    cars.createMultiple(10, 'car');
    cars.setAll('anchor.x', 0.5);
    cars.setAll('anchor.y', 0.5);
    cars.setAll('checkWorldBounds', true);
    cars.setAll('outOfBoundsKill', true);

    timer = game.time.events.loop(1000, this.createCar, this);

  },

  update: function() {
    background.tilePosition.y += 3;

    game.physics.arcade.overlap(alien, cars, this.hitCar, null, this)

    alien.animations.play('walk');

    if(cursors.right.isDown) {
      alien.position.x += 3;
    }
    if(cursors.left.isDown) {
      alien.position.x -= 3;
    }
    if(cursors.up.isDown) {
      alien.position.y -= 3;
    }
    if(cursors.down.isDown) {
      alien.position.y += 3;
    }


  },

  hitCar() {
    game.time.events.remove(timer);
    game.state.start('Gameover');
  },

  createCar() {
    var position = Math.floor(Math.random()*2) + 1;
    var car = cars.getFirstDead();
    car.physicsBodyType = Phaser.Physics.ARCADE;
    car.reset(position*130, -20);
    car.body.velocity.y = 200;
  }

}
