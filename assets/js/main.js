'use strict'

$(window).on('load resize', function () {
    $('#ytjelly').height((9 * $('#ytjelly').parent().width()) / 16);
});
