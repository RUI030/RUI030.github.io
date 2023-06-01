$(document).ready(
    function () {
        //to section
        $('.to-top').on('click', function () { scrollTo('#top') });
        $('.to-design').on('click', function () { scrollTo('#design') });
        $('.to-photos').on('click', function () { scrollTo('#photos') });
        $('.to-pages').on('click', function () { scrollTo('#pages') });
        $('.to-links').on('click', function () { scrollTo('#links') });


        // fancy-box
        $(".fancybox").fancybox
        (
            {
                animationEffect: "fade",
                animationDuration: 500
            }
        );
    }
);