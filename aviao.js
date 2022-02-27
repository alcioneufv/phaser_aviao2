  // Based on Nic Raboy

  const phaserConfig = {
      type: Phaser.AUTO,
      parent: "game",
      width: 1280,
      height: 400,
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

  function initScene() { }
  function preloadScene() {
       this.load.image("clouds-white", "clouds-white.png");
       this.load.image("clouds-white-small", "clouds-white-small.png");
  }
  function createScene() {
       cloudsWhite = this.add.tileSprite(640, 200, 1280, 400, "clouds-white");
       cloudsWhiteSmall = this.add.tileSprite(640, 200, 1280, 400, "clouds-white-small");
  }
  function updateScene() {
      cloudsWhite.tilePositionX += 0.5;
      cloudsWhiteSmall.tilePositionX += 0.25;
  }