import {Component} from 'react';

class WaterBoiler extends Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state={temperature:0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e.target.value);
    }

    render() {
        
        return (
        <form>
            <input type='number' value={this.props.temperature} onChange={this.handleChange}/>
        </form>)
        
    }
}

export default WaterBoiler;