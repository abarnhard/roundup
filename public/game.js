var level = (function(){
  var o = {
    preload: preload,
    create: create,
    update: update
  };

  var platforms;

  function preload(){
    game.load.image('platform', 'assets/cloud.png');
    // game.load.spritesheet('platform', 'assets/cloud-platform.png', 16, 15);

    game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);


    game.load.image('sky', '/assets/sky.png');
  }

  function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //cloud platform
    platforms = game.add.group();
    // var yo = game.add.sprite(400,540, 'platform');
    platforms.scale.setTo(0.3);
    platforms.angle = 180
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'platform');



    game.add.sprite(0, 0, 'sky');
    
  }

  function update(){

  }

  return o;
})();
