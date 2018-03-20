
/* Add JS keyboard */ 
app.component('prmTopBarBefore', {
bindings: {parentCtrl: '<'},
controller: function () {
    this.$onInit = function () {
        loadScript("//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", jquery_loaded);
        loadScript("//ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js", jquery_ui_loaded);
        loadScript("//cdnjs.cloudflare.com/ajax/libs/virtual-keyboard/1.28.0/js/jquery.keyboard.js", jquery_keyboard_loaded);
    };
},
template: '<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/themes/ui-lightness/jquery-ui.css" rel="stylesheet"><link href="https://cdnjs.cloudflare.com/ajax/libs/virtual-keyboard/1.28.0/css/keyboard.min.css" rel="stylesheet">'
});

applocal.controller('prmSearchBar', ['angularLoad', function (angularLoad) {
    var options = {};
    var target_input = '#searchBar';
    $(target_input).keyboard(options);
}]);
