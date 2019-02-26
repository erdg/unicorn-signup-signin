import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'

function App() {
   return (
      <div className="App">
         <MuiThemeProvider theme={theme}>
            <AppRouter />
         </MuiThemeProvider>
      </div>
   )
}

function AppRouter() {
   return (
      <Router history={AppHistory}>
         <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
         </div>
      </Router>
   )
}

export const AppHistory = createBrowserHistory()

export default App
