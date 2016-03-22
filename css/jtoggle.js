var navClassSelector = '.mainMenu'; // Make sure to include the . 
var labelClassSelector = '.menuTitle'; // Make sure to include the . 
var toggleChildrenClass = 'toggleChildren'; // Don't include .
var responsiveMenu = function(e) {
	$(navClassSelector + '> ul').css({ 'max-height' : '100%', 'display' : 'none'});
	$(labelClassSelector).click(function () {
		$(navClassSelector + '> ul').slideToggle(); //Can use toggle() if you prefer no animation
	});
}
var forceUncheck = function() {
	$(navClassSelector + ' ul a').click(function() {
		$("#toggleMenu").prop('checked', false);
	});
}
var toggleChildren = function() {
	$(navClassSelector + '> ul > li').each( function() {
		if ($(this).children("ul").length > 0) {
			$(this).prepend('<a class="' + toggleChildrenClass + '" href="#"></a>');
		} else {		
		}
	})
	$(navClassSelector + '> ul ul').hide();
	$(navClassSelector + ' .' + toggleChildrenClass).click(function() {
		$(this).toggleClass("contract");
		$(this).siblings("ul").toggle();
		return false;
	})
}
