var _winW; // width of the window
var _winH;

// ELEMENTS
///////////

// Header Elements
var Header_el = document.getElementsByClassName('Header')[0];
var Logo_el = document.querySelector('.Header .logo');
var Notif_el = document.querySelector('.Notification-dot');
var Button_plus_el = document.querySelector('.Button-plus');
var Header_title_el = document.querySelector('.Header-title');

// Modules
var Notif_menu = document.querySelector('.Notification-menu')


// CONSTANTS
////////////

var _headerMinH = 55;
var _headerMaxH = Header_el.clientHeight;
var _headerSpread = _headerMaxH - _headerMinH;
var _headerRatio = 500/_headerSpread;

var _logoMinY = 10;
var _logoMaxY = Logo_el.offsetTop;
var _logoSpread = _logoMaxY - _logoMinY;
var _logoRatio = 500/_logoSpread

var _notifMinY = 10;
var _notifMaxY = Notif_el.offsetTop;
var _notifSpread = _notifMaxY - _notifMinY;
var _notifRatio = 500/_notifSpread

var _button_plusMinS = .8;
var _button_plusMaxS = 1;
var _button_plusSpread = _button_plusMaxS - _button_plusMinS;
var _button_plusRatio = 500/_button_plusSpread;



var _scrollSpread = 500; // number of pixels to scroll for full collapse

// EVENTS
/////////

document.addEventListener('resize',resizeHandler);
document.addEventListener('scroll',scrollHandler)
document.addEventListener('touchmove',moveHandler)
document.addEventListener('click',function(){})

Notif_el.addEventListener('click', showNotifications);

// FUNCTIONS
////////////

function scrollHandler(e) {
	var scrollTop = -document.getElementsByTagName('body')[0].scrollTop;

	Header_el.style.top = Math.max(-_headerSpread,scrollTop/_headerRatio);
	Logo_el.style.top = Math.max(_logoMinY,_logoMaxY+scrollTop/_logoRatio)
	Notif_el.style.top = Math.max(_notifMinY,_notifMaxY+scrollTop/_notifRatio)
	Button_plus_el.style.webkitTransform = 'scale('+ Math.max(_button_plusMinS,_button_plusMaxS+scrollTop/_button_plusRatio) + ')'
	
	if(scrollTop < -500){
		Header_el.classList.add('collapsed')
	}else{
		Header_el.classList.remove('collapsed')
	}
	Header_title_el.style.top = Math.max(0,Math.min(100,-scrollTop/5))
}
function moveHandler(e) {

}
function clickHandler (e) {
	
}
function resizeHandler () {
	_winW = document.width;
	_winH = document.height;
}

function showNotifications () {
	Notif_menu.classList.toggle('open')
}

// UTILS
///////////
