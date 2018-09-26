import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: 180,
      saturation: 50,
      lightness: 50
    };
  }
  _changeHue = event => {
    let hue = event.target.value;
    this.setState((state, props) => {
      return {
        hue: hue,
      };
    });
  };
  _changeSaturation = event => {
    let saturation = event.target.value;
    this.setState((state, props) => {
      return {
        saturation: saturation,
      };
    });
  };
  _changeLightness = event => {
    let lightness = event.target.value;

    this.setState((state, props) => {
      return {
        lightness: lightness,
      };
    });
  };
  
  render() {
    return (
        <div className="body">
          <header>
            <h1>My Color Chart</h1>
          </header>
          <main>
            <aside>
              <div className="colorDisplay" style={{ backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%, ${this.state.lightness}%)` }}></div>
              </aside>
            <aside>
              <span>H<input type="range" className="hue" min="0" max="360" value={this.state.hue} onChange={this._changeHue} /></span>
              <span>S<input type="range" className="saturation" min="0" max="100" value={this.state.saturation} onChange={this._changeSaturation}/></span>
              <span>L<input type="range" className="lightness" min="0" max="100" value={this.state.lightness} onChange={this._changeLightness}/></span>
            </aside>
          </main>
        </div>
    );
  }
}
export default App;
