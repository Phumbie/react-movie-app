import React, { Component } from 'react'
import Header from './header'
import ShowCard from './showcard'
import showType from './../types/'

class Search extends Component {
  state = {
    searchTerm: ''
  }

  handleSearchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div className="search">
        <Header
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(
              (show) =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map((show) => (
              <ShowCard key={show.imdbID} {...show} />
            ))}
        </div>
      </div>
    )
  }
}
// using centralized proptypes
Search.propTypes = {
  shows: showType.isRequired
}.isRequired

export default Search
