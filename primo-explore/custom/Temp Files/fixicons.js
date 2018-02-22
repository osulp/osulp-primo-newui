// Fix icons in February release - in progress 
angular.element(document).ready(function () {
    var list = document.getElementsByClassName('fallback-img');
    for (var i = 0; i < list.length; i++) {
        var broken_src = list[i].getAttribute('src');
        list[i].setAttribute('src', 'custom/CENTRAL_PACKAGE/' + broken_src);
    }
});