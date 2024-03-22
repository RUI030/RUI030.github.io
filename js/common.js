$(document).ready(
    function () {
        // Init
        init();
        // RWD
        $(window).on('load resize', function () { RWD(); });
        // nav toggle
        $('.open-nav').on('click', function () { openNav() });
        $('.close-nav').on('click', function () { closeNav() });
        //scroll
        $('.to-top').on('click', function () { scrollTo('#top') });
        $('.to-next').on('click', function () { scrollTo('.to-next + section') });
        //goto another page
        $('.go-home').on('click', function () { go('index.html') });
        $('.go-projects').on('click', function () { go('projects.html') });
        $('.go-portfolio').on('click', function () { go('portfolio.html') });
    }
);

function init() {
    // nav icons
    $("span").css({
        'font-size': '40px',
        'line-height': '60px'
    }
    );
    $("nav img").css({
        'width': '40px',
        'padding': '10px 0px',
        'line-height': '60px',
        'transform': 'scaleX(-1)',
        '-webkit-transform': 'scaleX(-1)'
    }
    );
    RWD();
}

function RWD() {
    closeNav();
    var a_w = document.body.clientWidth;
    if (a_w >= 1200) {
        // PC
        $("#main-btn").siblings().css({ 'display': 'block' })
    } else {
        //phone&tablet
        $("#main-btn").siblings().css({ 'display': 'none' })
    }
}

// nav toggle
function openNav() {
    $(".close-nav-btn").css({ 
        'display': 'block',
        'opacity': '1'
    });
    $("nav div").css({
        'opacity': '1',
    });
    var a_w = document.body.clientWidth;
    if (a_w >= 768) {
        // Tablet&PC
        $("nav").css({
            'width': '25%',
        });
        $("main").css({
            'width': '75%',
        });
    } else {
        //phone
        $("nav").css({
            'width': '100%'
        });
    }
}

function closeNav() {
    $(".close-nav-btn").css({ 
        'display': 'none',
        'opacity': '0'
    });
    $("nav div").css({
        'opacity': '0',
    });
    var a_w = document.body.clientWidth;
    if (a_w >= 768) {
        // Tablet&PC
        $("nav").css({
            'width': '0%'
        });
        $("main").css({
            'width': '100%',
        });
    } else {
        //phone
        $("nav").css({
            'width': '0px'
        });
        $("main").css({
            'width': '100%',
        });
    }
}

// scroll to section
function scrollTo(selector) {
    $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, 200);
    var a_w = document.body.clientWidth;
    if (a_w < 768) closeNav();
}

// go to another page
function go(fp) {
    window.open(fp,'_self');
}

// 外部連結新分頁
function goTo(fp) {
    window.open(fp,'_blank');
}