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
    
   /*  function loadJquery(url, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);   
    }
    
    function loadScript() {
        var urls = [["//ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js", undefined], ["//cdnjs.cloudflare.com/ajax/libs/virtual-keyboard/1.28.0/js/jquery.keyboard.js", setTimeout(jquery_loaded, 5000)]];
        var head = document.getElementsByTagName('head')[0];
        for (var url in urls) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = urls[url][0];
            if (urls[url][1] !== undefined){
                script.onreadystatechange = urls[url][1];
                script.onload = urls[url][1];
            }
            head.appendChild(script);
        }
    }
    
    var jquery_loaded = function() {
        console.log("jquery loaded");
        // load custom header
        $(document).ready(function(){
            var header_container = $('#searchBar2');
            if(header_container.length > 0) {
                var options = {
                    accepted: function(e, keyboard, el) {
                        $('button.button-confirm').click();
                    }
                };
                $(header_container).keyboard(options);
            }
        });
    };*/ 