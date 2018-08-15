{
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        blinkSpeed:35,
        loop: false
    });

    typewriter
        .typeString('The')
        .typeString(' B')
        .pauseFor(200)
        .typeString('lasted')
        .pauseFor(600)
        .deleteChars(6)
        .typeString('elittling')
        .pauseFor(600)
        .deleteChars(9)
        .typeString('rute')
        .pauseFor(600)
        .deleteChars(4)
        .typeString('linking')
        .pauseFor(1500)
        .typeString(' World')
        .pauseFor(800)
        .deleteChars(2)
        .pauseFor(1500)
        .deleteChars(2)
        .pauseFor(1500)
        .deleteChars(9)
        .pauseFor(1500)
        .typeString('linking Word')
        .pauseFor(700)
        .typeString('.')
        .start();
}

