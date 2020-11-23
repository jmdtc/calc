import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      radioButt: "retail",
      priceInput: ""
    }
  }
  
  handleInput = (e) => {
    const {value} = e.target
    if (isNaN(value[value.length - 1]) && value !== "") return 
    this.setState(prevState => {
      return {...prevState, priceInput: value}
    })
  }
  
  handleRadio = (e) => {
    const value = e.target.value
    this.setState(prevState => {
      return {...prevState, radioButt: value}
    })
  }
  
  render() {
    const styles = {
      title: {
        textAlign: "center"
      },
      price : {
        marginBottom: "20px"
      },
      priceNumber: {
        lineHeight: "1.5",
        fontSize: "48px"
      },
      priceInput: {
        marginTop: "10px"
      }
    }
    
    const calculate = () => {
      const price =
            this.state.radioButt === "retail" ?
            Number(this.state.priceInput) * (0.28) :
            + Number(this.state.priceInput) * (100/28)
      return Math.round(price)
    }
    
    return (
      <div className="App">
        <h1 style={styles.title}>Leap Calculator</h1>
        <div className="final-price" style={styles.price}>
          <span>{this.state.radioButt === "retail" ? "The maximum purchasing price should be" : "The minimum retail price should be"}</span> <br/>
          <span style={styles.priceNumber}>{calculate()}</span>
        </div>
        
        <div className="price-input">
          <form onSubmit={(e) => {e.preventDefault()}}>
            <input
              type="radio" name="gender"
              value="retail"
              checked={this.state.radioButt === "retail"}
              onChange={(e) => this.handleRadio(e)}/> Retail<br/>
            <input
              type="radio"
              name="gender"
              value="purchase"
              checked={this.state.radioButt === "purchase"}
              onChange={(e) => this.handleRadio(e)}/> Purchasing <br/>
            <input
              type="text"
              name="price"
              style={styles.priceInput}
              value={this.state.priceInput}
              onChange={this.handleInput}/>
          </form>
        </div>
        
      </div>
    );
  }
}

export default App;
