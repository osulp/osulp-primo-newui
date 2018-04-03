/*
* 
*	Orbis Cascade Alliance Central Package
*	Environment: Sandbox
*	Last updated: 20180306
*	
*	Included customizations:
*		Hide/show Summit institutions (updated 20170605)
*		Insert custom action (updated 20180306)
*
*/

/* Hide/show Summit institutions button */

// hide/show other institutions default settings
var enable_hide_show_other_institutions = false;
var hide_show_other_institutions_default_state = "hidden";
var hide_show_other_institutions_hide_libraries_button_label = "Hide Summit Libraries";
var hide_show_other_institutions_show_libraries_button_label = "Show Summit Libraries";

// hide/show other institutions set options from local config
function hide_show_other_institutions(options) {
  if(typeof options === 'undefined')
    options = new Array();
  enable_hide_show_other_institutions = true;
  if(typeof options.default_state !== 'undefined')
    hide_show_other_institutions_default_state = options.default_state;
  if(typeof options.hide_libraries_button_label !== 'undefined')
    hide_show_other_institutions_hide_libraries_button_label = options.hide_libraries_button_label;
  if(typeof options.show_libraries_button_label !== 'undefined')
    hide_show_other_institutions_show_libraries_button_label = options.show_libraries_button_label;

  hide_show_other_institutions_add_button();
}

// hide/show other institutions add toggle button
function hide_show_other_institutions_add_button() {
  if(hide_show_other_institutions_default_state == "visible") {
    angular.element(document.querySelector('prm-alma-more-inst md-tabs')).removeClass("hide");
    angular.element(document.getElementsByClassName('hide_show_other_institutions_container')).html('<button class="hide_show_other_institutions_button" onclick="hide_show_other_institutions_toggle()">'+hide_show_other_institutions_hide_libraries_button_label+'</button>');
  } else {
    angular.element(document.querySelector('prm-alma-more-inst md-tabs')).addClass("hide");
    angular.element(document.getElementsByClassName('hide_show_other_institutions_container')).html('<button class="hide_show_other_institutions_button" onclick="hide_show_other_institutions_toggle()">'+hide_show_other_institutions_show_libraries_button_label+'</button>');
  }
  // place button above list of libraries 
  angular.element(document.querySelector('prm-alma-more-inst-after')).after(angular.element(document.querySelector('prm-alma-more-inst md-tabs')));
  // show the button
  angular.element(document.getElementsByClassName('hide_show_other_institutions_container')).removeClass("hide");
}

// hide/show other institutions toggle visibility of other institutions list
function hide_show_other_institutions_toggle() {
  if(angular.element(document.querySelector('prm-alma-more-inst md-tabs')).hasClass("hide")) {
    angular.element(document.querySelector('prm-alma-more-inst md-tabs')).removeClass("hide");
    angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text(hide_show_other_institutions_hide_libraries_button_label);
  } else {
    angular.element(document.querySelector('prm-alma-more-inst md-tabs')).addClass("hide");
    angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text(hide_show_other_institutions_show_libraries_button_label);
  }
}

(function(){
  "use strict";
  'use strict';

  var app = angular.module('centralCustom', ['angularLoad']);

// hide/show other institutions toggle button placeholder
  app.component('prmAlmaMoreInstAfter', {
    bindings: {parentCtrl: '<'},
    controller: function () {
	  this.$onInit = function () {
	    if(enable_hide_show_other_institutions) {
		  hide_show_other_institutions_add_button();
	    }
  	  };
    },
    template: '<div class="hide_show_other_institutions_container hide"></div>'
  }); 
  
  angular.module('customActions', []);

/* eslint-disable max-len */
angular.module('customActions').component('customAction', {
    bindings: {
        name: '@',
        label: '@',
        icon: '@',
        iconSet: '@',
        link: '@',
        index: '<'
    },
    require: {
        prmActionCtrl: '^prmActionList'
    },
    controller: ['customActions', function (customActions) {
        var _this = this;

        this.$onInit = function () {
            _this.action = {
                name: _this.name,
                label: _this.label,
                index: _this.index,
                icon: {
                    icon: _this.icon,
                    iconSet: _this.iconSet,
                    type: 'svg'
                },
                onToggle: customActions.processLinkTemplate(_this.link, _this.prmActionCtrl.item)
            };
            customActions.addAction(_this.action, _this.prmActionCtrl);
        };
        this.$onDestroy = function () {
            return customActions.removeAction(_this.action, _this.prmActionCtrl);
        };
    }]
});

/* eslint-disable max-len */
angular.module('customActions').factory('customActions', function () {
    return {
        /**
         * Adds an action to the actions menu, including its icon.
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        // TODO coerce action.index to be <= requiredActionsList.length
        addAction: function addAction(action, ctrl) {
            if (!this.actionExists(action, ctrl)) {
                this.addActionIcon(action, ctrl);
                ctrl.actionListService.requiredActionsList.splice(action.index, 0, action.name);
                ctrl.actionListService.actionsToIndex[action.name] = action.index;
                ctrl.actionListService.onToggle[action.name] = action.onToggle;
                ctrl.actionListService.actionsToDisplay.unshift(action.name);
            }
        },
        /**
         * Removes an action from the actions menu, including its icon.
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        removeAction: function removeAction(action, ctrl) {
            if (this.actionExists(action, ctrl)) {
                this.removeActionIcon(action, ctrl);
                delete ctrl.actionListService.actionsToIndex[action.name];
                delete ctrl.actionListService.onToggle[action.name];
                var i = ctrl.actionListService.actionsToDisplay.indexOf(action.name);
                ctrl.actionListService.actionsToDisplay.splice(i, 1);
                i = ctrl.actionListService.requiredActionsList.indexOf(action.name);
                ctrl.actionListService.requiredActionsList.splice(i, 1);
            }
        },
        /**
         * Registers an action's icon.
         * Called internally by addAction().
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        addActionIcon: function addActionIcon(action, ctrl) {
            ctrl.actionLabelNamesMap[action.name] = action.label;
            ctrl.actionIconNamesMap[action.name] = action.name;
            ctrl.actionIcons[action.name] = action.icon;
        },
        /**
         * Deregisters an action's icon.
         * Called internally by removeAction().
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        removeActionIcon: function removeActionIcon(action, ctrl) {
            delete ctrl.actionLabelNamesMap[action.name];
            delete ctrl.actionIconNamesMap[action.name];
            delete ctrl.actionIcons[action.name];
        },
        /**
         * Check if an action exists.
         * Returns true if action is part of actionsToIndex.
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         * @return {bool}
         */
        actionExists: function actionExists(action, ctrl) {
            return ctrl.actionListService.actionsToIndex.hasOwnProperty(action.name);
        },
        /**
         * Process a link into a function to call when the action is clicked.
         * The function will open the processed link in a new tab.
         * Will replace {pnx.xxx.xxx} expressions with properties from the item.
         * @param  {string}    link    the original link string from the html
         * @param  {object}    item    the item object obtained from the controller
         * @return {function}          function to call when the action is clicked
         */
        processLinkTemplate: function processLinkTemplate(link, item) {
            var processedLink = link;
            var pnxProperties = link.match(/\{(pnx\..*?)\}/g) || [];
            pnxProperties.forEach(function (property) {
                var value = property.replace(/[{}]/g, '').split('.').reduce(function (o, i) {
                    try {
                        var h = /(.*)(\[\d\])/.exec(i);
                        if (h instanceof Array) {
                            return o[h[1]][h[2].replace(/[^\d]/g, '')];
                        }
                        return o[i];
                    } catch (e) {
                        return '';
                    }
                }, item);
                processedLink = processedLink.replace(property, value);
            });
            return function () {
                return window.open(processedLink, '_blank');
            };
        }
    };
}); 

})();