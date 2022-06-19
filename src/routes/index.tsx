import React from 'react'
import { Switch } from 'react-router-dom'
import { Login, Dashboard } from '../pages'
import { Route } from './route'

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Dashboard} isPrivate />
    {/* <Route path="*" component={NotFound} /> */}
  </Switch>
)
