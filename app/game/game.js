window.onload = function() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create , update : update});
    var player;
    var platforms;
    var cursors;
    var jumpButton;
    function preload () {
        game.stage.backgroundColor = '#85b5e1';
        //game.load.baseURL = 'http://examples.phaser.io/assets/';
        game.load.crossOrigin = 'anonymous';
        game.load.spritesheet('player', 'images/chara.png',50,44,5);
        game.load.image('platform', 'images/platform.png');
    }
    function create () {
        player = game.add.sprite(100, 200, 'player');
        //  Here we add a new animation called 'walk'
        //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
        player.animations.add('walk');

        //  And this starts the animation playing by using its key ("walk")
        //  30 is the frame rate (30fps)
        //  true means it will loop when it finishes
        player.animations.play('walk', 10, true);
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        player.body.gravity.y = 500;
        platforms = game.add.physicsGroup();
        platforms.create(500, 150, 'platform');
        platforms.create(-200, 300, 'platform');
        platforms.create(400, 450, 'platform');
        platforms.setAll('body.immovable', true);
        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }
    function update () {
        game.physics.arcade.collide(player, platforms);
        player.body.velocity.x = 0;
        if (cursors.left.isDown)
        {
            player.body.velocity.x = -250;
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 250;
        }
        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
        {
            player.body.velocity.y = -400;
        }
    }
};