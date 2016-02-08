var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="Nav">
        <div className="Link active">Content</div>
        <div className="Link">Design</div>
        <div className="Link">Visit</div>
      </div>
    )
  }
})