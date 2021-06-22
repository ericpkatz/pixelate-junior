import React, { Component }  from 'react';
import { render } from 'react-dom';
import store from './store';
import Picker from './Picker';
import Grid from './Grid';

store.dispatch({ type: 'ADD_ROW'});

class App extends Component{
  constructor(){
    super();
    this.state = store.getState(); 
  }
  componentDidMount(){
    store.subscribe(()=> {
      this.setState(store.getState());
    });
  }
  render(){
    const { color, grid } = this.state;
    return (
      <main>
        <Picker color={ color } />
        <Grid grid={ grid } color={ color }/>
      </main>
    );
  };
}

render(<App />, document.querySelector('#root'));
