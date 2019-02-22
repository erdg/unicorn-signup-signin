import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'

function App() {
   return (
      <div className="App">
         <MuiThemeProvider theme={theme}>
            <UnicornRouter />
         </MuiThemeProvider>
      </div>
   )
}

function UnicornRouter() {
   return (
      <Router>
         <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
         </div>
      </Router>
   )
}

export default App;
