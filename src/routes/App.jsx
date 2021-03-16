import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import NotFound from '../containers/NotFound'
import Layout from '../component/Layout'
import Licras from '../pages/Licras'
import Jerseys from '../pages/Jerseys'
import Tapabocas from '../pages/Tapabocas'
import Blusas from '../pages/Blusas'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'

const App = () => {
    const initialState = useInitialState()
    return(
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/checkout' component={Checkout} />
                <Route exact path='/checkout/information' component={Information} />
                <Route exact path='/checkout/payment' component={Payment} />
                <Route exact path='/checkout/success' component={Success} />
                <Route exact path='/licras' component={Licras} />
                <Route exact path='/jerseys' component={Jerseys} />
                <Route exact path='/tapabocas' component={Tapabocas} />
                <Route exact path='/blusas' component={Blusas} />
                <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    )
}

export default App