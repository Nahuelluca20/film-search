import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Pages/Home'
import Search from '../Pages/Search'
import About from '../Pages/About'
import '../Styles/Nav.css'

export default function Nav() {
  const navItems = [
    {
      title: 'Home',
      url:`${process.env.PUBLIC_URL}/`,
      component: <Home />
    },
    {
      title: 'Search',
      url:`${process.env.PUBLIC_URL}/search`,
      component: <Search />
    },
    {
      title: 'About',
      url:`${process.env.PUBLIC_URL}/about`,
      component: <About />
    }
  ]

  return (
    <Router>
    <nav className="nav">
      {
        navItems.map((item) => {
          return (
            <li key={item.title} className="item-nav"> 
              <Link to={item.url} className="link-nav">
                {item.title}
              </Link>
            </li>
          )
        })
      }
    </nav>

    <Switch>
      {
        navItems.map((item) => {
          return (
            <Route exact path={item.url} key={item.title}>
              {item.component}
            </Route>
          )
        })
      }
    </Switch>
    </Router>
  )
}
