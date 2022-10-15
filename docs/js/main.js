//@ts-check

class mainScreen extends Phaser.Scene {

  /** Init */
  init() {
    //  Inject our CSS
    var element = document.createElement('style');

    document.head.appendChild(element);

    var sheet = element.sheet;

    var styles = '@font-face { font-family: "Caroni"; src: url("assets/caroni.otf") format("opentype"); }\n';
    sheet.insertRule(styles, 0);
  }

  /** Load assets into RAM */
  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('bandera', 'assets/bandera348x192.png');
    this.load.image('escudo', 'assets/escudo240x338.png');
  
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    this.load.svg('2qbradasmap', 'assets/2qbradas.svg');
    }

  /** Create and initialize scene components */
  create() {
    //var txt1; Hector Jaime Trejos

    //  A simple background for our game
    //this.add.image(400, 300, 'sky');
    cityMap = this.add.image(400, 300, '2qbradasmap').setScale(0.2).setAlpha(0.0);
    flag= this.add.image(100, -50, 'bandera').setScale(0.5).setAlpha(0.2);
    emblem= this.add.image(730, -200, 'escudo').setScale(0.5).setAlpha(0.2);

    //txt1= this.add.text(400, 300, 'hola mundo', { color: '#00ff00', align: 'center' }).setOrigin(0.5);
    //txt1.setScale(2.0);

    var add = this.add;
    WebFont.load({
        google: {
          families: ['Raleway:500']
        },
        custom: {
            families: ['Caroni']
        },
        active: function ()
        {
          slogan= add.text(400, 300, 'NombreCampaña', 
            { fontFamily: 'Raleway', fontSize: 70, color: '#373c3f' }).setOrigin(0.5)
            .setShadow(1, 1, "#fae9e9", 2, false, true).setAlpha(0.0);
            
          candidateName= add.text(400, 300, 'Hector Jaime Trejos', 
            {fontFamily: 'Raleway', fontSize: 72, color: '#373c3f'}).setOrigin(0.5).setAlpha(0.0);

            //add.text(150, 350, 'Habitantes: 225Mil.', 
            //{ fontFamily: 'Caroni', fontSize: 64, color: '#377ef2' });
        }
    });


    this.input.on('pointerup', function () {
      if (flag.visible) {
        flag.visible= false;
        emblem.visible= false;
      } else {
        flag.visible= true;
        emblem.visible= true;
      }
    });


  /*
    var tween1 = this.tweens.addCounter({
        from: 0,
        to: 360,
        duration: 5000,
        repeat: -1,
        onUpdate: function (tween)
        {
            //  tween.getValue = range between 0 and 360

            tiger.setAngle(tween.getValue());
        }
    });

  */  
    //game.add.tween(txt1).to( { alpha: 0 }, 2000, "Linear", true);

    showSlogan = this.time.addEvent({ delay: 200, callback: onKeyFrame0, callbackScope: this, repeat: 10 });
    showName = this.time.addEvent({ delay: 3000, callback: onKeyFrame3, callbackScope: this, repeat: 0 });
    showCityMap = this.time.addEvent({ delay: 5000, callback: onKeyFrame5, callbackScope: this, repeat: 0 });

  }
  
  /** runs in a loop, used to check for input changes */
  update() {

  }
}

function onKeyFrame0 () {
  slogan.alpha += 0.1;
}

function onKeyFrame3 () {
  var tween1= this.tweens.add({
    targets: slogan,
    y: 50,
    duration: 2000,
    ease: 'Power2',
    loop: 0
  });

  var tween2 = this.tweens.add({
    targets: flag,
    y: 510,
    duration: 2000,
    ease: 'Back.easeOut',
    loop: 0
  });

  var tween3 = this.tweens.add({
    targets: emblem,
    y: 510,
    duration: 2000,
    ease: 'Back.easeOut',
    loop: 0
  });

  var tween4 = this.tweens.add({
    targets: candidateName,
    alpha: 1,
    duration: 2000,
    ease: 'Sine.Out',
    loop: 0
  })

}

function onKeyFrame5 () {
  var tween1= this.tweens.add({
    targets: candidateName,
    y: 570,
    scaleX: 0.6,
    scaleY: 0.6,
    duration: 3000,
    ease: 'Back.easeOut',
    loop: 0
  });

  var tween2 = this.tweens.add({
    targets: cityMap,
    alpha: 0.3,
    duration: 3000,
    ease: 'Sine.Out',
    loop: 0
  })

}

var config = {
    type: Phaser.AUTO,
    backgroundColor: '#f3f3f3',
    scale: {
      width: 800,
      height: 600,
      parent: 'canvasui',  
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: mainScreen
};

var slogan;
var flag;
var emblem;
var candidateName;
var cityMap;

var showSlogan;
var showName;
var showCityMap;

var game = new Phaser.Game(config);
