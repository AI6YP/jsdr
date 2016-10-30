(function () {
    navigator
    .usb
    .getDevices()
    .then(dev => { console.log(dev); });
}());
