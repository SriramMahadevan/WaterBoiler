import {Component} from 'react';

class BoilingVerdict extends Component {

    render() {
      if(this.props.temperature>=100) {
        return <div>The water would boil.</div>
      } else {
        return <div>The water wont boil.</div>
      }
      
    }
}

export default BoilingVerdict;