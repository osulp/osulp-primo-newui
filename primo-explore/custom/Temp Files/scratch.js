// OSU branding - header    
app.component('prmshowPrimoExploreAfter', {
    bindings: {},
    templateUrl: 'custom/OSU/html/osu-header.html'
});   
        
function add_custom_header(header_container)
{
	console.log("... in add_custom_header function");
	var header_container = angular.element(document.getElementsByClassName('custom-header'));
	if(header_container.length == 0)
	{
		var custom_header_html = '<div id="header"><div id="osu-top-hat" class="new container-fluid"><a href="http://www.oregonstate.edu"><img src="http://oregonstate.edu/themes/osu/drupal8-osuhomepage/logo.svg" alt="Oregon State University "></a> </div><h1><a href="http://library.oregonstate.edu">Libraries</a></h1><div id="mobile-icon-menu"><a href="#" id="toggle-mobile-menu" class="m-icon-link"><i class="icon-reorder"></i></a></div><div id="page-wrapper" class="container-fluid"><div id="main-menu" role="navigation"><div class="region region-nav"><div id="block-nice-menus-1" class="block block-nice-menus"><div class="menu-container" id="desktop-menu"><ul class="nice-menu nice-menu-down nice-menu-main-menu" id="nice-menu-1"><li class="menuparent"><span title="" class="menu-top-level">Borrow &amp; Request</span><ul class="menu-dropdown fade"><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/reserves" title="">Course Reserves</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/ill" title="">Interlibrary Loan</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/purchase-request" title="">Purchase Request</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/borrowing-policies" title="">Borrowing Policies</a></li></ul></li><li class="menuparent"><span title="" class="menu-top-level">Help</span><ul class="menu-dropdown fade"><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/reference" title="">Ask a Librarian</a></li><li class="menu-dropdown-item"><a href="//guides.library.oregonstate.edu/" title="">Research Guides</a></li><li class="menu-dropdown-item"><a href="//diy.library.oregonstate.edu/" title="">Library DIY</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/graduate-students" title="">Workshops</a></li></ul></li><li class="menuparent"><span title="" class="menu-top-level">Meet &amp; Study Here</span><ul class="menu-dropdown fade"><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/reserve-room" title="">Reserve a Room</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/floormaps" title="">Floor Maps</a></li></ul></li><li class="menuparent"><span title="" class="menu-top-level">Tech &amp; Print</span><ul class="menu-dropdown fade"><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/loanable-equipment" title="">Loanable Equipment</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/copy-print-scan" title="">Copy, Print, Scan</a></li><li class="menu-dropdown-item"><a href="http://guides.library.oregonstate.edu/3Dprinting" title="">3D Printers</a></li><li class="menu-dropdown-item"><a href="//is.oregonstate.edu/service/large-format-poster-production" title="">Poster Printing</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/computers" title="">Computers</a></li></ul></li><li class="menuparent"><span title="" class="menu-top-level">About</span><ul class="menu-dropdown fade"><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/about/valley" title="">About the Valley Library</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/staff/directory" title="">Directory</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/policies" title="">Policies</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/visit" title="">Visiting</a></li><li class="menu-dropdown-item"><a href="//osulibrary.oregonstate.edu/jobs" title="">Jobs</a></li></ul></li></ul></div></div></div></div></div></div>'
		var prm_explore_main = angular.element(document.querySelector('prm-explore-main'));
		if(prm_explore_main.length == 1)
		{
			prm_explore_main.after(custom_header_html);
			var header_container = angular.element(document.getElementsByClassName('custom-header'));
			angular.element(header_container).after(prm_explore_main);
		}
		
		var prm_full_view_page = angular.element(document.querySelector('prm-full-view-page'));
		if(prm_full_view_page.length == 1)
		{
			prm_full_view_page.after(custom_header_html);
			var header_container = angular.element(document.getElementsByClassName('custom-header'));
			header_container.after(prm_full_view_page);
		}
		
		var prm_services_page = angular.element(document.querySelector('prm-services-page'));
		if(prm_services_page.length == 1)
		{
			prm_services_page.after(custom_header_html);
			var header_container = angular.element(document.getElementsByClassName('custom-header'));
			header_container.after(prm_services_page);
		}
	}
	else
	{
		console.log("header already exists - this function shouldn't have been called?!");
		console.log("path name: " + window.location.pathname);
	}
}
    

// change name of Export RIs action
document.addEventListener('DOMContentLoaded', function() {
  var elements = document.getElementsByTagName('span');
  var matches = Array.prototype.slice.call(elements).filter(function(e) {
    return e.getAttribute('translate') === 'fulldisplay.command.pushto.option.RISPushTo';
  });
  matches.forEach(function(element, index) {
    element.innerText = "Export RIS & EndNote";
  });
}, false);


// report a problem - not working yet   
angular
  .module('reportProblem', [])
  .component('prmActionListAfter', {
    template: `
    <div class="bar filter-bar layout-align-center-center layout-row margin-top-medium" layout="row" layout-align="center center">
        <span class="margin-right-small">{{ message }}</span>
        <a ng-href="{{ link }}">
            <button class="button-with-icon zero-margin md-button md-button-raised md-primoExplore-theme md-ink-ripple" type="button" aria-label="Report a Problem" style="color: #5c92bd;">
                <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>
                <span style="text-transform: none;">{{ button }}</span>
                <div class="md-ripple-container"></div>
            </button>
        </a>
    </div>
    `,
    controller: ['$scope', '$location', 'reportProblemOptions',
      function ($scope, $location, reportProblemOptions) {
        $scope.message = reportProblemOptions.message
        $scope.button = reportProblemOptions.button
        $scope.link = reportProblemOptions.base + $location.search().docid
      }]
  })
 
app.constant('reportProblemOptions', {
  message: "See something that doesn't look right?",
  button: "Report a Problem",
  base: ""
})