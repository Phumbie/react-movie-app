import React from 'react'
import { Link } from 'react-router-dom'
import { shape, bool, func, string } from 'prop-types'

const header = (props) => {
  let utilSpace
  if (props.showSearch) {
    utilSpace = (
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type="text"
        placeholder="Search"
      />
    )
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    )
  }
  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {utilSpace}
    </header>
  )
}

header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  searchTerm: ''
}
header.propTypes = shape({
  showSearch: bool,
  handleSearchTermChange: func,
  searchTerm: string
}).isRequired
export default header
