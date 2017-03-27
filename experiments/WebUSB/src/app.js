(function () {

    function wrapDevice (device) {
        console.log(device);
    }

    const filters = [];

    const btn = document.getElementById('connect');

    btn.addEventListener('click', function () {
        navigator.usb
        .requestDevice({ 'filters': filters })
        .then(device => wrapDevice(device));
    });

}());

/* global navigator document */
/* eslint no-console:0 */
