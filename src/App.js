import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Work } from './Pages/Work'


export const App = () => {

return (

    <BrowserRouter>
    <Switch>


    <Route path="/" exact>
    <Home />
    </Route>


    <Route path="/about" exact>
    <About />
    </Route>

    <Route path="/work" exact>
    <Work />
    </Route>


    </Switch>
   </BrowserRouter>


)

}
