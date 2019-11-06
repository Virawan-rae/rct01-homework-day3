import React, { Component } from 'react'
import TMDB from './TMDB'
import FilmListing from './components/FilmListing'
import FilmDetails from './components/FilmDetails'
import './App.css'

class App extends Component {
  state = {
    films: TMDB.films,
    faves: [],
    current: {}
  }

  handleFaveToggle = film => {
    this.setState({ faves: [...this.state.faves, film] })
  }

  render() {
    const { faves, current, films } = this.state

    return (
      <div className="film-library">
        <FilmListing
          films={films}
          faves={faves}
          handleFaveToggle={this.handleFaveToggle}
        />
        <FilmDetails films={films} current={current} />
      </div>
    )
  }
}

export default App
