import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
   return (
      <div className="App">
         <UnicornRouter />
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
