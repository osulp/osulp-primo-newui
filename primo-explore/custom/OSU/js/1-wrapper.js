
/************************************* BEGIN Bootstrap Script ************************************/

/* We are a CENTRAL_PACKAGE, so use the below line to bootstrap the module */

var app = angular.module('centralCustom', ['angularLoad']);

var applocal = angular.module('viewCustom', ['angularLoad']);

/************************************* END Bootstrap Script ************************************/

console.log("from central package");