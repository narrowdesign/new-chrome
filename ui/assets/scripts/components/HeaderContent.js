import React from 'react'

class HeaderContent extends React.Component {
  render() {
    var site_title = 'The Grid Showcase';
    return (
      <div className="Header-content">
        <h5 className="Url">http://app.thegrid.io</h5>
        <h1 className="Title Header-title"><span>{site_title}</span></h1>
        <h5 className="Title small Link"><span>{site_title}</span></h5>
      </div>
    )
  }
}