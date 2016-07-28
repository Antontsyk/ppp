$(document).ready(function () {


    $('#number').click(function () {
        $('#close_numbers').show();
        $('#numbers').show(function () {
            $('.header_scolkovo').addClass("header_scolkovo_active");
            $('body').click(function () {
                $('#numbers,#close_numbers').hide();
                $('.header_scolkovo').removeClass("header_scolkovo_active");
            });
            $('.header_scolkovo').click(function () {
                return false;
            });

        });
    });
    $('#close_numbers').click(function () {
        $('#numbers,#close_numbers').hide();
        $('.header_scolkovo').removeClass("header_scolkovo_active");
        return false;
    });

    $('li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').toggle();
        $(this).toggleClass('active');
    });

});