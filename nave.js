class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
       this.load.image("clouds-white", "assets/clouds-white.png");
       this.load.image("clouds-white-small", "assets/clouds-white-small.png");
    }

    create ()
    {
        this.add.image(0, 0, 'clouds-white').setOrigin(0);

        //  Set the camera bounds to be the size of the image
        this.cameras.main.setBounds(0, 0, 1280, 400);

        //  Camera controls
        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
    }

    update (time, delta)
    {
        this.controls.update(delta);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 800,
    backgroundColor: '#000000',
    scene: [ Example ]
};

const game = new Phaser.Game(config);