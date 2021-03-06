import React, { Component } from 'react'

// import { shape, string } from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { any } from 'prop-types'
import showType from './../types/'

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`

class ShowCard extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image
          alt={`${this.props.title} Show Poster`}
          src={`/public/img/posters/${this.props.poster}`}
        />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.description}</p>
        </div>
      </Wrapper>
    )
  }
}

// shape means object
ShowCard.propTypes = {
  shows: showType.isRequired,
  Link: any
}.isRequired

export default ShowCard
