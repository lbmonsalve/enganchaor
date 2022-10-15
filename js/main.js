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
    this.load.image('bandera', 'assets/bandera348x192.png');
    this.load.image('escudo', 'assets/escudo240x338.png');
  
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    this.load.svg('2qbradasmap', 'assets/2qbradas.svg');
    }

  /** Create and initialize scene components */
  create() {

    //  A simple background for our game
    cityMap = this.add.image(400, 300, '2qbradasmap').setScale(0.2).setAlpha(0.0);
    flag= this.add.image(100, -50, 'bandera').setScale(0.5).setAlpha(0.2);
    emblem= this.add.image(730, -200, 'escudo').setScale(0.5).setAlpha(0.2);

    var add = this.add;
    var tweens = this.tweens
    WebFont.load({
        google: {
          families: ['Raleway:500']
        },
        custom: {
            families: ['Caroni']
        },
        active: function ()
        {
          slogan= add.text(400, 300, '\"LemaCampaña\"', 
            { fontFamily: 'Raleway', fontSize: 70, color: '#373c3f' }).setOrigin(0.5)
            .setShadow(1, 1, "#fae9e9", 2, false, true).setAlpha(0.0);

          var tween1 = tweens.add({
            targets: slogan,
            alpha: 1.0,
            duration: 2000,
            ease: 'Sine.Out',
            loop: 0
          })
        
          candidateName= add.text(400, 300, 'Hector Jaime Trejos', 
            {fontFamily: 'Raleway', fontSize: 72, color: '#373c3f'}).setOrigin(0.5).setAlpha(0.0);

          cityInfoGeneral1=  add.text(50, 140, '70.58km2', 
            { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral2=  add.text(50, 210, '225k habitantes', 
            { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral3=  add.text(50, 280, '95% urbana', 
            { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral4=  add.text(50, 350, '78% nació en otro municipio', 
            { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);

          cityInfoGeneral5=  add.text(545, 100, '12 comunas', 
            { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral6=  add.text(545, 160, '273 barrios', 
            { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral7=  add.text(545, 220, '32 veredas', 
            { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral8=  add.text(460, 280, '2 corregimientos', 
            { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
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

    var scene = this.scene;
    this.input.keyboard.on('keydown_SPACE', function () {
      if (scene.isActive()) {
        scene.pause();
      } else {
        scene.resume();
      }
    });

    var showName = this.time.addEvent({ delay: 3000, callback: onKeyFrame3, callbackScope: this, repeat: 0 });
    var showCityMap = this.time.addEvent({ delay: 5000, callback: onKeyFrame5, callbackScope: this, repeat: 0 });
    var showCityInfo1 = this.time.addEvent({ delay: 6000, callback: onKeyFrame6, callbackScope: this, repeat: 0 });
    var showCityInfo2 = this.time.addEvent({ delay: 8000, callback: onKeyFrame8, callbackScope: this, repeat: 0 });
    var hideCityInfos = this.time.addEvent({ delay: 11000, callback: onKeyFrame11, callbackScope: this, repeat: 0 });

  }
  
  /** runs in a loop, used to check for input changes */
  update() {

  }
}

function onKeyFrame3 () {
  var tween1= this.tweens.add({
    targets: slogan,
    x: 290,
    y: 50,
    duration: 2000,
    ease: 'Power2',
    loop: 0
  });

  var tween2 = this.tweens.add({
    targets: flag,
    y: 510,
    duration: 4000,
    ease: 'Back.easeOut',
    loop: 0
  });

  var tween3 = this.tweens.add({
    targets: emblem,
    y: 510,
    duration: 8000,
    ease: 'Back.easeOut',
    loop: 0
  });

  var tween4 = this.tweens.add({
    targets: candidateName,
    alpha: 1.0,
    duration: 2000,
    ease: 'Sine.Out',
    loop: 0
  })

}

function onKeyFrame5 () {
  var tween1= this.tweens.add({
    targets: candidateName,
    x: 430,
    y: 550,
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

function onKeyFrame6 () {
  var timeline = this.tweens.createTimeline();

  timeline.add({
    targets: cityInfoGeneral1,
    alpha: 1.0,
    duration: 500,
    ease: 'Sine.easeIn',
    loop: 0
  });


  timeline.add({
    targets: cityInfoGeneral2,
    alpha: 1.0,
    duration: 500,
    ease: 'Sine.easeIn',
    loop: 0
  });


  timeline.add({
    targets: cityInfoGeneral3,
    alpha: 1.0,
    duration: 500,
    ease: 'Sine.easeIn',
    loop: 0
  });


  timeline.add({
    targets: cityInfoGeneral4,
    alpha: 1.0,
    duration: 500,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.play();
}

function onKeyFrame8 () {
  var timeline = this.tweens.createTimeline();

  timeline.add({
    targets: cityInfoGeneral5,
    alpha: 1.0,
    duration: 500,
    ease: 'Sine.easeIn',
    loop: 0
  });


  timeline.add({
    targets: cityInfoGeneral6,
    alpha: 1.0,
    duration: 500,
    ease: 'Sine.easeIn',
    loop: 0
  });


  timeline.add({
    targets: cityInfoGeneral7,
    alpha: 1.0,
    duration: 500,
    ease: 'Sine.easeIn',
    loop: 0
  });


  timeline.add({
    targets: cityInfoGeneral8,
    alpha: 1.0,
    duration: 500,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.play();
}

function onKeyFrame11 () {
  var tween1= this.tweens.add({
    targets: [cityInfoGeneral1, cityInfoGeneral2, cityInfoGeneral3, cityInfoGeneral4],
    x: -800,
    duration: 3000,
    ease: 'Back.easeOut',
    loop: 0
  });

  var tween1= this.tweens.add({
    targets: [cityInfoGeneral5, cityInfoGeneral6, cityInfoGeneral7, cityInfoGeneral8],
    x: 1600,
    duration: 3000,
    ease: 'Back.easeOut',
    loop: 0
  });

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
var cityInfoGeneral1, cityInfoGeneral2, cityInfoGeneral3, cityInfoGeneral4;
var cityInfoGeneral5, cityInfoGeneral6, cityInfoGeneral7, cityInfoGeneral8;

var game = new Phaser.Game(config);
