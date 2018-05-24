import React, { Component } from 'react'

export default class Square extends Component {
  state = {
    value: null
  }

  render() {
    return (
      <button className="square" onClick={() => console.log('click')}>
        {this.props.value}
      </button>
    )
  }
}