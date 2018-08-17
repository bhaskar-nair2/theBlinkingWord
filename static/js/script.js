function appPLay() {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        blinkSpeed: 35,
        loop: false
    });

    typewriter
        .typeString('The')
        .typeString(' B')
        // .pauseFor(200)
        // .typeString('lasted')
        // .pauseFor(600)
        // .deleteChars(6)
        // .typeString('elittling')
        // .pauseFor(600)
        // .deleteChars(9)
        // .typeString('rute')
        // .pauseFor(600)
        // .deleteChars(4)
        // .typeString('linking')
        // .pauseFor(1500)
        // .typeString(' World')
        // .pauseFor(800)
        // .deleteChars(2)
        // .pauseFor(1500)
        // .deleteChars(2)
        // .pauseFor(1500)
        // .deleteChars(9)
        // .pauseFor(1500)
        .typeString('linking Word')
        .pauseFor(700)
        .typeString('.')
        .start()
        linkPlay()

}

function linkPlay() {
    $('#link-holder').css({
    });
}

$(document).ready(function () {
    $('#hero').css({
        'height': '100%',
        'width': '100%'
    });
    $('#app-holder').css({
        'margin-top': 35 + 'vh'
    });
    $('#link-holder').css({
        'display': 'None'
    });
    $('#scr-ani').css({
        'opacity': 0
    });
    $('#jst-scr').css({
        'opacity': 0
    });
    $('#chev').css({
        'opacity': 0
    });
    appPLay()
});

$(document).on("scroll", function () {

    var dh = $(document).height();
    var wh = $(window).height();
    var scrollTop = $(document).scrollTop() / (dh - wh) * 10000;

    if (scrollTop > 650) {
        $('#scr-ani').css({
            'opacity': 0
        });
        $('#jst-scr').css({
            'opacity': 0
        });
        $('#chev').css({
            'opacity': 0
        })
    }
    else {
        $('#scr-ani').css({
            'display': 'grid'
        });
        $('#jst-scr').css({
            'display': ''
        });
        $('#chev').css({
            'display': ''
        })
    }


    if (scrollTop <= 0) {
        opacity = 0;
        maxHeight = 100;
    }

    else if (scrollTop > 1000) {
        maxHeight = 40;
        opacity = 0.98;
    }

    else {
        maxHeight = 100 - (scrollTop / 1000 * 60);
        opacity = (scrollTop / 1000 * 0.98);

    }
    //App height control
    if (scrollTop < 700) {
        lineHeight = 15;
        marginTop = 25;
        typer = 45;
        link = 13;
        dwn = 12;
    }
    else if (scrollTop > 1000) {
        lineHeight = 7.5;
        marginTop = 7;
        typer = 0;
        link = 0;
        dwn = 5;
    }
    else {
        lineHeight = 15 - ((scrollTop / 2000 * 7.5));
        appHeight = 60;
        marginTop = 25 - ((scrollTop + 8000) / 10000 * 7);
    }

    $('#hero').css({
        'height': maxHeight + "vh",
        'background-color': "rgba(63, 81, 181, " + opacity + ")",
        'grid-template-rows': '[typer]' + typer + ' vh [links]' + link + 'vh [dwn]' + dwn + 'vh',
    });
    $('#app').css({
        'line-height': lineHeight + 'vh',
    });
    $('#app-holder').css({
        'margin-top': marginTop + 'vh',
    });


    // if ($(document).scrollTop() > 100) {
    //
    //     $('#link-holder').addClass('link-holder-shrink');
    //     $('#scr-ani').addClass('scr-ani-shrink');
    //     $('#jst-scr').addClass('jst-scr-shrink');
    //     $('#chev').addClass('chevron-shrink')
    // }
    // if ($(document).scrollTop() > 150) {
    //     $('#app').addClass('app-shrink');
    // }
    // else if ($(document).scrollTop() < 80) {
    //     $("#hero").removeClass("under").removeClass("hero-shrink");
    //     $('#app').removeClass('app-shrink');
    //     $('#link-holder').removeClass('link-holder-shrink');
    //     $('#scr-ani').removeClass('scr-ani-shrink');
    //     $('#jst-scr').removeClass('jst-scr-shrink');
    //     $('#chev').removeClass('chevron-shrink')
    // }
});