  // Based on Nic Raboy

  const phaserConfig = {
      type: Phaser.AUTO,
      parent: "game",
  //    width: 1280,
  //    height: 400,
    width: 600,
    height: 200,
      backgroundColor: "#5DACD8",
      scene: {
          init: initScene,
          preload: preloadScene,
          create: createScene,
          update: updateScene
      }
  };

  const game = new Phaser.Game(phaserConfig);

  var cloudsWhite, cloudsWhiteSmall;
  var cursors;
  var x,y;


  function initScene() { }
  function preloadScene() {
       this.load.image("clouds-white", "assets/clouds-white.png");
       this.load.image("clouds-white-small", "assets/clouds-white-small.png");
  }
  function createScene() {
       cursors = this.input.keyboard.createCursorKeys();

       cloudsWhite = this.add.tileSprite(640, 200, 1280, 400, "clouds-white");
       cloudsWhiteSmall = this.add.tileSprite(640, 200, 1280, 400, "clouds-white-small");
       this.cameras.main.setSize(600, 200);
  }
  function updateScene() {
      cloudsWhite.tilePositionX += 0.5;
      cloudsWhiteSmall.tilePositionX += 0.25;
      if (cursors.right.isDown) {
           this.cameras.scrollX+=5
        } else if (cursors.left.isDown) {
           this.cameras.scrollX-=5
        } else if (cursors.up.isDown) {
          this.cameras.scrollY+=5
        } else if (cursors.down.isDown) {
           this.cameras.scrollY-=5
        }

  }
