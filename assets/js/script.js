$(document).ready(function () {
    const yurl = window.location.pathname;
    $('.dropdown-item').on('click', function () {
        const id = $(this).attr("href");
        const seksion = $(id);
        console.log(seksion.offset());
        console.log($('body').scrollTop(seksion.offset().top));
        // $('body').animate({
        //     scrollTop: seksion.offset().top - 500
        // }, 1250, 'swing');
    });
})