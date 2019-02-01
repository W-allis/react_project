import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import asynComponent from '../utils/asynComponent'
// const layout = asynComponent(() => import('../views/layout/layout'))
import layout from '../views/layout/layout'

export default class RouteConfig extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => {
          return (
            <Switch key={location.pathname}>
              <Route location={location} exact path="/" component={layout} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          )
        }} />
      </Router>
    )
  }
}