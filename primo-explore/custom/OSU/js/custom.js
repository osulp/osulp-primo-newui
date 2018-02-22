(function(){
"use strict";
'use strict';

/************************************* BEGIN Bootstrap Script ************************************/

/* We are a CENTRAL_PACKAGE, so use the below line to bootstrap the module */

var app = angular.module('centralCustom', ['angularLoad']);

var applocal = angular.module('viewCustom', ['angularLoad', 'reportProblem']);

/************************************* END Bootstrap Script ************************************/

// Add Google Scholar and Worldcat search in facet pane 
app.component('prmFacetExactAfter', {
    bindings: { parentCtrl: '<' },
    controller: function controller($scope) {
        console.log($scope.$parent.$ctrl.facetGroup.name);
        if ($scope.$parent.$ctrl.facetGroup.name == "tlevel") {
            this.class = "WC_show";
        } else {
            this.class = "WC_hide";
        }
        try {
            this.query = this.parentCtrl.facetService.$location.$$search.query.split(",")[2];
        } catch (e) {
            this.query = "";
        }
    },
    template: '<div class="{{$ctrl.class}}"><div aria-label="Search in Worldcat" class="section-title md-button md-primoExplore-theme md-ink-ripple layout-fill" style="" ><div class="layout-align-start-center layout-row"><h3 class="section-title-header"><span title="External Search" translate="External Search"></span></h3></div><div class="md-ripple-container"></div></div><div aria-hidden="false" class="section-content animate-max-height-variable" style=""><div class="md-chips md-chips-wrap"><div aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4"><div class="md-chip-content layout-row" role="button" tabindex="0"><strong dir="auto" title="Search Worldcat" ><a href="https://www.worldcat.org/search?qt=worldcat_org_all&q={{$ctrl.query}}" target="_blank"><img src="custom/OSU/img/worldcat.png" width="22" height="22" alt="worldcat-logo" style="vertical-align:middle;"> Search Worldcat</a></strong></div></div><div aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4"><div class="md-chip-content layout-row" role="button" tabindex="0"><strong dir="auto" title="Search Google Scholar" ><a href="https://scholar.google.com/scholar?q={{$ctrl.query}}" target="_blank"> <img src="custom/OSU/img/gscholar.png" width="22" height="22" alt="google-scholar-logo" style="vertical-align:middle;"> Google Scholar</a></strong></div></div></div></div>'
});
// Hide/Show Summit Institutions 
angular.element(document).ready(function () {
    hide_show_other_institutions();
});

var enable_hide_show_other_institutions = false;
var hide_show_other_institutions_default_state = "hidden";
var hide_show_other_institutions_hide_libraries_button_label = "Hide Libraries";
var hide_show_other_institutions_show_libraries_button_label = "Show Libraries";
// hide/show other institutions set options from local config
function hide_show_other_institutions(options) {
    if (typeof options === 'undefined') options = new Array();
    enable_hide_show_other_institutions = true;
    if (typeof options.default_state !== 'undefined') hide_show_other_institutions_default_state = options.default_state;
    if (typeof options.hide_libraries_button_label !== 'undefined') hide_show_other_institutions_hide_libraries_button_label = options.hide_libraries_button_label;
    if (typeof options.show_libraries_button_label !== 'undefined') hide_show_other_institutions_show_libraries_button_label = options.show_libraries_button_label;

    hide_show_other_institutions_add_button();
}
// hide/show other institutions add toggle button
function hide_show_other_institutions_add_button() {
    if (hide_show_other_institutions_default_state == "visible") {
        angular.element(document.querySelector('prm-alma-more-inst md-tabs')).removeClass("hide");
        angular.element(document.getElementsByClassName('hide_show_other_institutions_container')).html('<button class="hide_show_other_institutions_button" onclick="hide_show_other_institutions_toggle()">' + hide_show_other_institutions_hide_libraries_button_label + '</button>');
    } else {
        angular.element(document.querySelector('prm-alma-more-inst md-tabs')).addClass("hide");
        angular.element(document.getElementsByClassName('hide_show_other_institutions_container')).html('<button class="hide_show_other_institutions_button" onclick="hide_show_other_institutions_toggle()">' + hide_show_other_institutions_show_libraries_button_label + '</button>');
    }
    // place button above list of libraries
    angular.element(document.querySelector('prm-alma-more-inst-after')).after(angular.element(document.querySelector('prm-alma-more-inst md-tabs')));
    // show the button
    angular.element(document.getElementsByClassName('hide_show_other_institutions_container')).removeClass("hide");
}
// hide/show other institutions toggle visibility of other institutions list
function hide_show_other_institutions_toggle() {
    if (angular.element(document.querySelector('prm-alma-more-inst md-tabs')).hasClass("hide")) {
        angular.element(document.querySelector('prm-alma-more-inst md-tabs')).removeClass("hide");
        angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text(hide_show_other_institutions_hide_libraries_button_label);
    } else {
        angular.element(document.querySelector('prm-alma-more-inst md-tabs')).addClass("hide");
        angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text(hide_show_other_institutions_show_libraries_button_label);
    }
}
(function () {
    "use strict";
    'use strict';

    var app = angular.module('centralCustom', ['angularLoad']);
    // hide/show other institutions toggle button placeholder
    app.component('prmAlmaMoreInstAfter', {
        bindings: { parentCtrl: '<' },
        controller: function controller() {
            this.$onInit = function () {
                if (enable_hide_show_other_institutions) {
                    hide_show_other_institutions_add_button();
                }
            };
        },
        template: '<div class="hide_show_other_institutions_container hide"></div>'
    });
})();
// Add link to ILL in My Account
applocal.component('prmLoansOverviewAfter', {
    bindings: { parentCtrl: '<' },
    controller: function controller($scope, $element) {},
    template: '<div class=tiles-grid-tile><div class="layout-column tile-content"layout=column><div class="layout-column tile-header"layout=column><h2 class="header-link light-text"role=button tabindex=0><span>Interlibrary Loan</span></h2></div><div class="layout-column layout-align-center-center layout-margin layout-padding message-with-icon" layout=column layout-align="center center"><span><a href="https://access.library.oregonstate.edu/illiad.dll?" target="_blank" aria-label="Link to Interlibrary Loan login" tabindex="0">Log into your ILL account</a> to check pending requests and view articles.</span></div></div></div>'
});
// Add chat widget to header 
app.component('prmSearchBookmarkFilterAfter', {
    bindings: {},
    template: '<div class="chat"><a ng-href="http://answers.library.oregonstate.edu/widget_standalone.php?hash=848ad121b384a3768c03838752654abb" target="_blank">Live Chat</a></div>'
});
// Force users to login to services page  
app.component('prmAuthenticationAfter', {
    bindings: { parentCtrl: '<' },
    controller: function controller($location) {
        this.$onInit = function () {
            if (($location.search().isSerivcesPage || $location.search().isServicesPage) && !this.parentCtrl.isLoggedIn) {
                this.parentCtrl.loginService.handleLoginClick();
            }
        };
    }
});
/** Show search scopes by default on basic searches **/
applocal.component('prmSearchBarAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'SearchBarAfterController'
});
applocal.controller('SearchBarAfterController', ['angularLoad', function (angularLoad) {
    var vm = this;
    vm.parentCtrl.showTabsAndScopes = true;
}]);
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-35760875-20');
ga('send', 'pageview');
ga('set', 'anonymizeIp', true);
})();