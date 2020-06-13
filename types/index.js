import { string, arrayOf, shape } from 'prop-types'

const showType = arrayOf(
  shape({
    title: string,
    description: string,
    year: string,
    imdbID: string,
    trailer: string,
    poster: string
  })
)

export default showType
