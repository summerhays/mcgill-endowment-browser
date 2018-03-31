import React from 'react'
import SelectorItem from './SelectorItem'
import SelectorSearch from './SelectorSearch'

function renderView (view, index) {
  return <SelectorItem key={index} index={index} view={view} />
}

function Sidebar (props) {
  const { views, open, onMenuToggle, onHeaderClick } = props
  let className = 'sidebar pure-u-1 pure-u-md-2-5 pure-u-lg-1-3 pure-u-xl-1-4'

  if (open) {
    className += ' open'
  }

  return (
    <aside className={className}>
      <header className="header">
        <a href="#" className="menu-toggle"
          onClick={onMenuToggle}>
          <i className="fas fa-fw fa-bars" />
        </a>
        <a href="#" className="header-link"
          onClick={onHeaderClick}>
          McGill Endowment Browser
        </a>
      </header>
      <nav className="pure-menu">
        <ul className="pure-menu-list">
          {views.map(renderView)}
        </ul>
        <SelectorSearch />
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <a href="/api/holdings/csv" className="pure-menu-link">
              Download data as .csv
            </a>
          </li>
          <li className="pure-menu-item">
            <a href="https://github.com/goldenlentils/mcgill-endowment-browser" target="_blank" className="pure-menu-link">
              View source on Github
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
