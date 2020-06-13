import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { shape, string } from 'prop-types'
// import type { Match } from 'react-router-dom'
import Landing from './landing'
import Search from './Search'
import Details from './Details'
import preload from '../data.json'

const FourOhFour = () => <h1>Error 404</h1>

// arrow functions have implict return i.e if you want to immdiately return something hence non use of the parenthesis
const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={(props) => <Search shows={preload.shows} {...props} />}
        />
        <Route
          path="/details/:id"
          component={(props) => {
            const selectedShow = preload.shows.find(
              (show) => props.match.params.id === show.imdbID
            )
            return <Details show={selectedShow} {...props} />
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
)

App.propTypes = {
  match: shape({
    params: shape({
      id: string
    })
  })
}
export default App
