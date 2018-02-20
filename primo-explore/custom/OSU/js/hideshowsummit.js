// Hide/Show Summit Institutions - FIX
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