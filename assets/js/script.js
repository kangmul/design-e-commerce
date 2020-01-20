$(document).ready(function () {
    const yurl = window.location.pathname;
    console.log(yurl);
    $('.nav-link').on('click', function () {

        const id = $(this).attr("id");
        console.log(yurl);
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    })
})