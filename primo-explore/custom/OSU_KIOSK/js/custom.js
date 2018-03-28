(function(){
    "use strict";
    'use strict';
    
    /************************************* BEGIN Bootstrap Script ************************************/
    
    var app = angular.module('centralCustom', ['angularLoad']);
    
    var applocal = angular.module('viewCustom', ['angularLoad']);
    
    /************************************* END Bootstrap Script ************************************/
       
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
    


    
    /* Loads jQuery into Primo application */
    app.component('prmTopBarBefore', {
        bindings: { parentCtrl: '<' },
        controller: function controller() {
            this.$onInit = function () {
                loadJquery("//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", loadScript);
            };
        },
        template: '<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/themes/ui-lightness/jquery-ui.css" rel="stylesheet"><link href="https://cdnjs.cloudflare.com/ajax/libs/virtual-keyboard/1.28.0/css/keyboard.min.css" rel="stylesheet">'
    });

    /* End anonymous function */     
    })();
    