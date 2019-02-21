import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Signin from './components/Signin'
import Signup from './components/Signup'

class App extends Component {
   render() {
      return (
         <div className="App">
            <UnicornRouter />
         </div>
      )
   }
}

function UnicornRouter() {
   return (
      <Router>
         <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
         </div>
      </Router>
   )
}

export default App;
