$(document).ready(
    function () {
        //外部連結
        $('.go-MELab').on('click', function () { goTo('https://github.com/RUI030/MELab');});
        $('.go-ODE').on('click', function () { goTo('https://github.com/RUI030/2021_Fall_ODE');});
        $('.go-v1').on('click', function () { goTo('https://imrui.mystrikingly.com/');});
        $('.go-v2').on('click', function () { goTo('https://rui030.github.io/v2');});
        $('.go-pt').on('click', function () { goTo('https://rui030.github.io/PeriodicTable');});
        $('.go-bingo').on('click', function () { goTo('https://github.com/RUI030/MFC-BINGO-Chatroom');});
        $('.go-aiwc').on('click', function () { goTo('https://github.com/Terence1219/WeatherClassifierOnKV260');});        
        //scroll
        $('.to-software').on('click', function () { scrollTo('#software') });
        $('.to-hardware').on('click', function () { scrollTo('#hardware') });
        $('.to-pages').on('click', function () { scrollTo('#pages') });
        $('.to-links').on('click', function () { scrollTo('#links') });
    }
);