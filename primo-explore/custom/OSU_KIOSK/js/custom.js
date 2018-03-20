(function(){
"use strict";
'use strict';

/************************************* BEGIN Bootstrap Script ************************************/

/* We are a CENTRAL_PACKAGE, so use the below line to bootstrap the module */

var app = angular.module('centralCustom', ['angularLoad']);

var applocal = angular.module('viewCustom', ['angularLoad']);

// var applocal = angular.module('viewCustom', ['angularLoad','reportProblem']);
/************************************* END Bootstrap Script ************************************/

// load jquery - needed for custom header ubermenu
app.component('prmTopBarBefore', {
    bindings: { parentCtrl: '<' },
    controller: function controller() {
        this.$onInit = function () {
            loadScript("//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js", jquery_loaded);
        };
    },
    template: ''
});

/* Add JS keyboard */
app.component('prmTopBarBefore', {
    bindings: { parentCtrl: '<' },
    controller: function controller() {
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

/** Show search scopes by default on basic searches **/
applocal.component('prmSearchBarAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'SearchBarAfterController'
});
applocal.controller('SearchBarAfterController', ['angularLoad', function (angularLoad) {
    var vm = this;
    vm.parentCtrl.showTabsAndScopes = true;
}]);

/* Analytics */
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-35760875-20');
ga('send', 'pageview');
ga('set', 'anonymizeIp', true);
})();