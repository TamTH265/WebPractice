import React, { Component } from 'react';

const withHoverEffect = (WrappedComponent, passedOpacity) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHover: false
      }
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseOver() {
      this.setState({ isHover: true });
    }

    onMouseLeave() {
      this.setState({ isHover: false });
    }

    render() {
      const { isHover } = this.state;
      const opacity = isHover ? passedOpacity : 1;
      return (
        <span style={{opacity}} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}> 
            <WrappedComponent {...this.props}/>
        </span>
      )
    }
  }
}

export default withHoverEffect;
