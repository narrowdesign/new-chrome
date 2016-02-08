var _winW; // width of the window
var _winH;

// ELEMENTS
///////////

var App = document.querySelector('#app')
// Header Elements
var HeaderElement = document.querySelector('.Header');
var LogoElement = document.querySelector('.Header .logo');
var NotificationElement = document.querySelector('.Notification-badge');
var Button_plusElement = document.querySelector('.Button-plus');
var Header_titleElement = document.querySelector('.Header-title');
var Covers = document.querySelectorAll('.PostCard .Cover')

// Modals
var Notification_modal = document.querySelector('.Notification-modal')
var Editor_modal = document.querySelector('.Editor-modal')


// CONSTANTS
////////////

var _headerMinH = 55;
var _headerMaxH = HeaderElement.clientHeight;
var _headerSpread = _headerMaxH - _headerMinH;
var _headerRatio = 500/_headerSpread;

var _logoMinY = 10;
var _logoMaxY = LogoElement.offsetTop;
var _logoSpread = _logoMaxY - _logoMinY;
var _logoRatio = 500/_logoSpread

var _notificationMinY = 10;
var _notificationMaxY = NotificationElement.offsetTop;
var _notificationSpread = _notificationMaxY - _notificationMinY;
var _notificationRatio = 500/_notificationSpread

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

NotificationElement.addEventListener('click', showNotificationModal);
Button_plusElement.addEventListener('click', showEditorModal)

// FUNCTIONS
////////////

function scrollHandler(e) {
	var scrollTop = -document.getElementsByTagName('body')[0].scrollTop;

	HeaderElement.style.top = Math.max(-_headerSpread,scrollTop/_headerRatio);
	LogoElement.style.top = Math.max(_logoMinY,_logoMaxY+scrollTop/_logoRatio)
	NotificationElement.style.top = Math.max(_notificationMinY,_notificationMaxY+scrollTop/_notificationRatio)
	Button_plusElement.style.webkitTransform = 'scale('+ Math.max(_button_plusMinS,_button_plusMaxS+scrollTop/_button_plusRatio) + ')'
	
	if(scrollTop < -500){
		HeaderElement.classList.add('collapsed')
	}else{
		HeaderElement.classList.remove('collapsed')
	}
	Header_titleElement.style.top = Math.max(0,Math.min(100,-scrollTop/5))

}
function moveHandler(e) {

}
function clickHandler (e) {
	
}
function resizeHandler () {
	_winW = document.width;
	_winH = document.height;
}

function showNotificationModal () {
	App.classList.toggle('show-notification-modal')
}

function showEditorModal () {
	App.classList.toggle('show-editor-modal')
}

// UTILS
///////////
