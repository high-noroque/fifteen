import React, { Component } from 'react'

class Tile extends Component {
  renderTile(i) {
    return <div className="tile" />
  }

  render() {
    return (
      <div>
        <div className="tile-row">
          {this.renderTile(1)}
          {this.renderTile(2)}
          {this.renderTile(3)}
          {this.renderTile(4)}
        </div>
        <div className="tile-row">
          {this.renderTile(5)}
          {this.renderTile(6)}
          {this.renderTile(7)}
          {this.renderTile(8)}
        </div>
        <div className="tile-row">
          {this.renderTile(9)}
          {this.renderTile(10)}
          {this.renderTile(11)}
          {this.renderTile(12)}
        </div>
        <div className="tile-row">
          {this.renderTile(13)}
          {this.renderTile(14)}
          {this.renderTile(15)}
        </div>
      </div>
    )
  }
}

export default Tile