import React from 'react'
import { Switch } from 'react-router-dom'
import { Sheduling } from '../pages'
import { Route } from './route'

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Sheduling} />
    {/* <Route path="*" component={NotFound} /> */}
  </Switch>
)
