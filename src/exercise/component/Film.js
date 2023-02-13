import React, { Component } from 'react'
import propTypes from 'prop-types'
export default class Film extends Component {
  static propTypes = {
    title: propTypes.string
  }

  render() {
    return (
      <div>Film</div>
    )
  }
}

// Film.propTypes = {
//   title: propTypes.string
// }
Film.defaultProps = {
  // title: string
}
