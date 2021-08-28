import {Component} from 'react';
import BoilingVerdict from './BoilingVerdict';
import WaterBoiler from './WaterBoiler';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFarenChange = this.handleFarenChange.bind(this);
        this.state={temperature:'',scale:'c'};
        this.convert = this.convert.bind(this);
      }

      convert(temp,scale) {
        if(scale==='c') {
          return (temp * 9 / 5) + 32;
        } else {
          return (temp - 32) * 5 / 9;
        }
       }

      handleCelciusChange(temp) {
            this.setState({temperature:temp,scale:'c'});
      }

      handleFarenChange(temp) {
        this.setState({temperature:temp,scale:'f'});
      }

    render(){
        const scale = this.state.scale;
        const celcius = scale === 'f' ? this.convert(this.state.temperature,'c') : this.state.temperature;
        const faren = scale ==='c' ? this.convert(this.state.temperature,'f') : this.state.temperature;
        return (
        <div>
            <WaterBoiler temperature={celcius} scale='c' handleChange={this.handleCelciusChange}></WaterBoiler>
            <WaterBoiler temperature={faren} scale='f' handleChange={this.handleFarenChange}></WaterBoiler>
            <BoilingVerdict temperature={celcius}></BoilingVerdict>
        </div>);
    }
}

export default App;