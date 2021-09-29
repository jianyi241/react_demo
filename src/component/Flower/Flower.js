// @flow
import React from 'react'
import'./Flower.scss'
class Flower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div className={'flower'} onClick={this.props.onChangeFlower}>
        {this.props.name}
      </div>
    )
  }
}

export default Flower
