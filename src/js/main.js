//@ts-check

class resumeScreen extends Phaser.Scene {
  constructor() {
    super('sceneResume');
  }

  create() {
    var scene= this.scene;
    this.input.keyboard.on('keydown_SPACE', function () {
      scene.resume('sceneMain');
    });    
  }
}

class mainScreen extends Phaser.Scene {
  constructor() {
    super('sceneMain');
  }

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
    // size of canvas:
    this.canvas = this.sys.game.canvas;

    this.load.image('bandera', 'assets/bandera348x192.png');
    this.load.image('escudo', 'assets/escudo240x338.png');
  
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    this.load.svg('2qbradasmap', 'assets/2qbradas.svg');
    this.load.svg('2qbradasmapn', 'assets/2qbradasn.svg');
    }

  /** Create and initialize scene components */
  create() {
    // resize game canvas:
    window.addEventListener('resize', resize);
    resize();

    // center xy:
    centerX = this.canvas.width/ 2;
    centerY = this.canvas.height/ 2;

    //  A simple background for our game
    cityMap = this.add.image(centerX, centerY, '2qbradasmap').setScale(0.2).setAlpha(0.0);
    flag= this.add.image(105, -50, 'bandera').setScale(0.5).setAlpha(0.2);
    flag.setX(((flag.width* flag.scaleX)* 0.5)+ 10);
    emblem= this.add.image(730, -200, 'escudo').setScale(0.5).setAlpha(0.2);
    emblem.setX(this.canvas.width- ((emblem.width* emblem.scaleX)* 0.5)- 10);

    var add = this.add;
    var tweens = this.tweens
    var canvas = this.canvas;
    WebFont.load({
        google: {
          families: ['Raleway:500']
        },
        custom: {
            families: ['Caroni']
        },
        active: function ()
        {
          slogan= add.text(centerX, centerY, '\"LemaCampaña\"', 
            { fontFamily: 'Raleway', fontSize: 70, color: '#373c3f' }).setOrigin(0.5)
            .setShadow(1, 1, "#fae9e9", 2, false, true).setAlpha(0.0);

          var tween1 = tweens.add({
            targets: slogan,
            alpha: 1.0,
            duration: 2000,
            ease: 'Sine.Out',
            loop: 0
          })
        
          candidateName= add.text(centerX, centerY, 'Hector Jaime Trejos', 
            {fontFamily: 'Raleway', fontSize: 72, color: '#373c3f'}).setOrigin(0.5).setAlpha(0.0);

          cityInfoGeneral1=  add.text(50, 140, '70km2', 
          { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral2=  add.text(50, 210, '225k habitantes', 
          { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral3=  add.text(50, 280, '95% urbana', 
          { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral4=  add.text(50, 350, '80% nació en otro municipio', 
          { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);

          cityInfoGeneral5=  add.text(545, 100, '12 comunas', 
          { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral5.setX(canvas.width- cityInfoGeneral5.width- 50);
          cityInfoGeneral6=  add.text(545, 160, '273 barrios', 
          { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral6.setX(canvas.width- cityInfoGeneral6.width- 50);
          cityInfoGeneral7=  add.text(545, 220, '32 veredas', 
          { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral7.setX(canvas.width- cityInfoGeneral7.width- 50);
          cityInfoGeneral8=  add.text(460, 280, '2 corregimientos', 
          { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
          cityInfoGeneral8.setX(canvas.width- cityInfoGeneral8.width- 50);

          cityInfoDensity1= add.text(300, 300, '140 habitantes/ha', 
          { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);
          cityInfoDensity2= add.text(280, 430, '3.5 personas/vivienda', 
          { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);
          cityInfoDensity3= add.text(180, 400, '55 viviendas/ha', 
          { fontFamily: 'Caroni', fontSize: 64, color: '#1490d8' }).setAlpha(0.0);
          cityInfoDensity4= add.text(-500, 270, '3500km vías principales', 
          { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
          cityInfoDensity5= add.text(-500, 270, '2700 periféricas', 
          { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
          cityInfoDensity6= add.text(-500, 270, '365km sin pavimentar', 
          { fontFamily: 'Caroni', fontSize: 54, color: '#1490d8' }).setAlpha(0.0);
          
          cityInfoEconomi1= add.text(60, 140, 'PIB: 3Billones', 
          { fontFamily: 'Caroni', fontSize: 70, color: '#1490d8', fontStyle: 'bold' }).setAlpha(0.0);
          cityInfoEconomi2= add.text(120, 270, '75% comercio y servicios', 
          { fontFamily: 'Caroni', fontSize: 70, color: '#1490d8', fontStyle: 'bold' }).setAlpha(0.0);
          cityInfoEconomi3= add.text(240, 400, '24% industria', 
          { fontFamily: 'Caroni', fontSize: 70, color: '#1490d8', fontStyle: 'bold' }).setAlpha(0.0);
          cityInfoEconomi4= add.text(510, 210, '209k millones presupuesto', 
          { fontFamily: 'Caroni', fontSize: 50, color: '#1490d8' }).setAlpha(0.0);
          cityInfoEconomi5= add.text(400, 100, 'Salud: 43%', 
          { fontFamily: 'Caroni', fontSize: 60, color: '#1490d8' }).setAlpha(0.0);
          cityInfoEconomi6= add.text(680, 140, 'Educación: 40%', 
          { fontFamily: 'Caroni', fontSize: 60, color: '#1490d8' }).setAlpha(0.0);

          cityInfoCrimes1= add.text(centerX, 450, 'Delitos mayor impacto:', 
          { fontFamily: 'Caroni', fontSize: 60, color: '#1490d8', fontStyle: 'bold' }).setOrigin(0.5).setAlpha(0.0);
          cityInfoCrimes2= add.text(centerX, 450, 'hurto (personas, residencias, comercio)', 
          { fontFamily: 'Caroni', fontSize: 40, color: '#1490d8' }).setOrigin(0.5).setAlpha(0.0);
          cityInfoCrimes3= add.text(centerX, 450, 'violencia intrafamiliar', 
          { fontFamily: 'Caroni', fontSize: 40, color: '#1490d8' }).setOrigin(0.5).setAlpha(0.0);
          cityInfoCrimes4= add.text(centerX, 450, 'homicidios', 
          { fontFamily: 'Caroni', fontSize: 40, color: '#1490d8' }).setOrigin(0.5).setAlpha(0.0);
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

    var scene= this.scene;
    this.input.keyboard.on('keydown_SPACE', function () {
      scene.pause();
      scene.run('sceneResume');
    });

    var showName = this.time.addEvent({ delay: 3000, callback: onKeyFrame3, callbackScope: this, repeat: 0 });
    var showCityMap = this.time.addEvent({ delay: 5000, callback: onKeyFrame5, callbackScope: this, repeat: 0 });
    var showCityInfo1 = this.time.addEvent({ delay: 6000, callback: onKeyFrame6, callbackScope: this, repeat: 0 });
    var showCityInfo2 = this.time.addEvent({ delay: 8000, callback: onKeyFrame8, callbackScope: this, repeat: 0 });
    var hideCityInfos = this.time.addEvent({ delay: 11000, callback: onKeyFrame11, callbackScope: this, repeat: 0 });
    var showCityInfo3 = this.time.addEvent({ delay: 11500, callback: onKeyFrame115, callbackScope: this, repeat: 0 });
    var hideCityInfo3 = this.time.addEvent({ delay: 15000, callback: onKeyFrame15, callbackScope: this, repeat: 0 });
    var showCityInfo4 = this.time.addEvent({ delay: 15000, callback: onKeyFrame155, callbackScope: this, repeat: 0 });
    var hideCityInfo4 = this.time.addEvent({ delay: 19000, callback: onKeyFrame19, callbackScope: this, repeat: 0 });
    var showCityInfo5 = this.time.addEvent({ delay: 20000, callback: onKeyFrame20, callbackScope: this, repeat: 0 });
    var hideCityInfo5 = this.time.addEvent({ delay: 26000, callback: onKeyFrame26, callbackScope: this, repeat: 0 });
    var showCityInfo6 = this.time.addEvent({ delay: 27500, callback: onKeyFrame28, callbackScope: this, repeat: 0 });
    var hideCityInfo6 = this.time.addEvent({ delay: 32000, callback: onKeyFrame32, callbackScope: this, repeat: 0 });
    var showCityMap = this.time.addEvent({ delay: 35000, callback: onKeyFrame35, callbackScope: this, repeat: 0 });
    var restart = this.time.addEvent({ delay: 40000, callback: onKeyFrame40, callbackScope: this, repeat: 0 });

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
    x: centerX,
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

function onKeyFrame115 () {
  var timeline = this.tweens.createTimeline();

  timeline.add({
    targets: cityInfoDensity1,
    alpha: 1.0,
    duration: 400,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoDensity1,
    x: 50,
    y: 120,
    duration: 600,
    ease: 'Back.easeInOut',
    loop: 0
  });

  timeline.add({
    targets: cityInfoDensity2,
    alpha: 1.0,
    duration: 400,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoDensity2,
    x: 50,
    y: 200,
    duration: 600,
    ease: 'Back.easeInOut',
    loop: 0
  });

  timeline.add({
    targets: cityInfoDensity3,
    alpha: 1.0,
    duration: 400,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoDensity3,
    x: 50,
    y: 280,
    duration: 600,
    ease: 'Back.easeInOut',
    loop: 0
  });

  timeline.play();
}

function onKeyFrame15 () {
  var tween1= this.tweens.add({
    targets: [cityInfoDensity1, cityInfoDensity2, cityInfoDensity3],
    x: 800,
    y: -800,
    duration: 3000,
    ease: 'Back.easeOut',
    loop: 0
  });
}

function onKeyFrame155 () {
  var timeline = this.tweens.createTimeline();

  timeline.add({
    targets: cityInfoDensity4,
    alpha: 1.0,
    duration: 400,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoDensity4,
    x: centerX- (cityInfoDensity4.width/ 2),
    y: 150,
    duration: 600,
    ease: 'Back.easeInOut',
    loop: 0
  });

  timeline.add({
    targets: cityInfoDensity5,
    alpha: 1.0,
    duration: 400,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoDensity5,
    x: centerX- (cityInfoDensity4.width/ 2),
    y: 240,
    duration: 600,
    ease: 'Back.easeInOut',
    loop: 0
  });

  timeline.add({
    targets: cityInfoDensity6,
    alpha: 1.0,
    duration: 400,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoDensity6,
    x: centerX- (cityInfoDensity4.width/ 2),
    y: 310,
    duration: 600,
    ease: 'Back.easeInOut',
    loop: 0
  });

  timeline.play();
}

function onKeyFrame19 () {
  var tween1= this.tweens.add({
    targets: [cityInfoDensity4, cityInfoDensity5, cityInfoDensity6],
    x: -800,
    duration: 4000,
    ease: 'Back.easeOut',
    loop: 0
  });
}

function onKeyFrame20 () {
  var timeline = this.tweens.createTimeline();

  timeline.add({
    targets: cityInfoEconomi1,
    alpha: 1.0,
    duration: 1000,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoEconomi2,
    alpha: 1.0,
    duration: 1000,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoEconomi3,
    alpha: 1.0,
    duration: 1000,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoEconomi4,
    alpha: 1.0,
    duration: 1000,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoEconomi5,
    alpha: 1.0,
    duration: 1000,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoEconomi6,
    alpha: 1.0,
    duration: 1000,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.play();
}

function onKeyFrame26 () {
  var tween1= this.tweens.add({
    targets: [cityInfoEconomi1, cityInfoEconomi2, cityInfoEconomi3, cityInfoEconomi4, cityInfoEconomi5, cityInfoEconomi6],
    alpha: 0.0,
    duration: 4000,
    ease: 'Back.easeOut',
    loop: 0
  });
}

function onKeyFrame28 () {
  var timeline = this.tweens.createTimeline();

  timeline.add({
    targets: cityInfoCrimes1,
    alpha: 1.0,
    duration: 400,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoCrimes1,
    y: 130,
    duration: 600,
    ease: 'Expo.easeOut',
    loop: 0
  });

  timeline.add({
    targets: cityInfoCrimes2,
    alpha: 1.0,
    duration: 400,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoCrimes2,
    y: 220,
    duration: 600,
    ease: 'Expo.easeOut',
    loop: 0
  });

  timeline.add({
    targets: cityInfoCrimes3,
    alpha: 1.0,
    duration: 400,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoCrimes3,
    y: 300,
    duration: 600,
    ease: 'Expo.easeOut',
    loop: 0
  });

  timeline.add({
    targets: cityInfoCrimes4,
    alpha: 1.0,
    duration: 400,
    ease: 'Sine.easeIn',
    loop: 0
  });

  timeline.add({
    targets: cityInfoCrimes4,
    y: 380,
    duration: 600,
    ease: 'Expo.easeOut',
    loop: 0
  });

  timeline.play();

  this.tweens.addCounter({
    from: 60,
    to: 70,
    duration: 600,
    onUpdate: function (tween) {
      cityInfoCrimes1.setFontSize(tween.getValue());
    }
  });

  this.tweens.addCounter({
    from: 40,
    to: 60,
    duration: 600,
    onUpdate: function (tween) {
      cityInfoCrimes2.setFontSize(tween.getValue());
      cityInfoCrimes3.setFontSize(tween.getValue());
      cityInfoCrimes4.setFontSize(tween.getValue());
    }
  });

}

function onKeyFrame32 () {
  var timeline = this.tweens.createTimeline();

  timeline.add({
    targets: cityInfoCrimes4,
    y: 450,
    alpha: 0.0,
    scaleX: 0.6,
    scaleY: 0.6,
    duration: 1000,
    ease: 'Expo.easeOut',
    loop: 0
  });

  timeline.add({
    targets: cityInfoCrimes3,
    y: 450,
    alpha: 0.0,
    scaleX: 0.6,
    scaleY: 0.6,
    duration: 1000,
    ease: 'Expo.easeOut',
    loop: 0
  });

  timeline.add({
    targets: cityInfoCrimes2,
    y: 450,
    alpha: 0.0,
    scaleX: 0.6,
    scaleY: 0.6,
    duration: 1000,
    ease: 'Expo.easeOut',
    loop: 0
  });

  timeline.add({
    targets: cityInfoCrimes1,
    y: 450,
    alpha: 0.0,
    scaleX: 0.6,
    scaleY: 0.6,
    duration: 1000,
    ease: 'Expo.easeOut',
    loop: 0
  });

  timeline.play();

}

function onKeyFrame35 () {
  cityMap = this.add.image(centerX, centerY, '2qbradasmapn').setScale(0.2).setAlpha(0.0);
  
  var tween1 = this.tweens.add({
    targets: cityMap,
    alpha: 0.7,
    duration: 2000,
    ease: 'Sine.Out',
    loop: 0
  })
}

function onKeyFrame40 () {
  this.scene.restart();
}

var config = {
    type: Phaser.AUTO,
    backgroundColor: '#f3f3f3',
    scale: {
      width: 1072,
      height: 603,
      parent: 'canvasui',  
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [mainScreen, resumeScreen]
};

function resize() {
  var canvas = game.canvas, width = window.innerWidth, height = window.innerHeight;
  var wratio = width / height, ratio = canvas.width / canvas.height;
  if (wratio < ratio) {
      canvas.style.width = width + "px";
      canvas.style.height = (width / ratio) + "px";
  } else {
      canvas.style.width = (height * ratio) + "px";
      canvas.style.height = height + "px";
  }
}

var centerX, centerY;
var slogan;
var flag;
var emblem;
var candidateName;
var cityMap;
var cityInfoGeneral1, cityInfoGeneral2, cityInfoGeneral3, cityInfoGeneral4;
var cityInfoGeneral5, cityInfoGeneral6, cityInfoGeneral7, cityInfoGeneral8;
var cityInfoDensity1, cityInfoDensity2, cityInfoDensity3;
var cityInfoDensity4, cityInfoDensity5, cityInfoDensity6;
var cityInfoEconomi1, cityInfoEconomi2, cityInfoEconomi3;
var cityInfoEconomi4, cityInfoEconomi5, cityInfoEconomi6;
var cityInfoCrimes1, cityInfoCrimes2, cityInfoCrimes3, cityInfoCrimes4;

var game = new Phaser.Game(config);
