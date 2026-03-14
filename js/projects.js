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
        $('.go-l0deblur').on('click', function () { goTo('https://drive.google.com/file/d/1MmIHbRMFCbV_EQQUUTUJskwjj-UPB3Gm/view?usp=drive_link');});        
        $('.go-dml').on('click', function () { goTo('https://drive.google.com/file/d/1M0jTyTpKl-oYlQz1GXb2cshQBrmEiCHX/view?usp=drive_link');});        
        $('.go-CircuitVideo').on('click', function () { goTo('https://www.youtube.com/watch?v=NS2VoYjIKHI');});        
        $('.card a').on('click', function (e) {e.stopPropagation()}) // this make sure the hyper link in the description will not go to the JS linked card link above
        //scroll
        $('.to-software').on('click', function () { scrollTo('#software') });
        $('.to-hardware').on('click', function () { scrollTo('#hardware') });
        $('.to-pages').on('click', function () { scrollTo('#pages') });
        $('.to-links').on('click', function () { scrollTo('#links') });
    }
);