(function(){
"use strict";
'use strict';

/* BEGIN Bootstrap Script */

var app = angular.module('viewCustom', ['angularLoad', 'toggleInstitutions']);

// var app = angular.module('viewCustom', ['angularLoad','toggleInstitutions','reportProblem']);

/* END Bootstrap Script */
/* Hide/Show Summit Institutions */
app.component('prmAlmaMoreInstAfter', { template: '<toggle-institutions />' });
app.constant('showHideMoreInstOptions', {
    default_state: "hidden",
    show_label: "Show Summit libraries",
    hide_label: "Hide Summit libraries"
});

// Show search scopes by default on basic searches
app.component('prmSearchBarAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'SearchBarAfterController'
});
app.controller('SearchBarAfterController', ['angularLoad', function (angularLoad) {
    var vm = this;
    vm.parentCtrl.showTabsAndScopes = true;
}]);

// Analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-35760875-20');
ga('send', 'pageview');
ga('set', 'anonymizeIp', true);
})();