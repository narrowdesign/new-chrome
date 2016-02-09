
import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './components/Logo'
import PlusButton from './components/PlusButton'
import Nav from './components/Nav'
import NotificationBadge from './components/NotificationBadge'
import HeaderContent from './components/HeaderContent'

class Header extends React.Component {
  render() {
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
}

ReactDOM.render(<Header />, document.querySelector('.reactApp'))

