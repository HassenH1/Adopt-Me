import Random from './components/Random';
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Random />}></Route>
        <Route exact path='/animal/:id' ></Route> {/*Missing a component here */}
      </Switch>
      {/* <Random /> */}
    </div>
  )
}
{/* <Route exact path='/products/:id' render={() => <Showpage currentUser={this.state.currentUser} addToCart={this.addToCart} />} /> */}

export default withRouter(App);
