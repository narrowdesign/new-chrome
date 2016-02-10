var React = require('react')
var ReactDOM = require('react-dom')
var Logo = require('./components/Logo')
var PlusButton = require('./components/PlusButton')
var Nav = require('./components/Nav')
var NotificationBadge = require('./components/NotificationBadge')
var HeaderContent = require('./components/HeaderContent')

var Header = React.createClass({
  render: function(){
    return (
      <div className="Header">
        <Logo />
        <HeaderContent />
        <Nav />
        <PlusButton />
        <NotificationBadge />
      </div>
    )
  }
});

ReactDOM.render(<Header />, document.querySelector('.reactApp'))

