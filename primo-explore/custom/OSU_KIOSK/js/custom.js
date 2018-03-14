(function(){
  "use strict";
  'use strict';
  
  /************************************* BEGIN Bootstrap Script ************************************/
  
  /* We are a CENTRAL_PACKAGE, so use the below line to bootstrap the module */
  
  var app = angular.module('centralCustom', ['angularLoad']);
  
  var applocal = angular.module('viewCustom', ['angularLoad']);
  
  // var applocal = angular.module('viewCustom', ['angularLoad','reportProblem']);
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
  
  (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
      }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  
  ga('create', 'UA-35760875-20');
  ga('send', 'pageview');
  ga('set', 'anonymizeIp', true);
  })();