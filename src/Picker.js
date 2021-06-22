import React  from 'react';
import store from './store';


const Picker = ({ color })=> {
  return (
    <div className='picker'>
      <select value={ color} onChange={ (ev)=> store.dispatch({ type: 'SET_COLOR', color: ev.target.value })}>
        <option value='red'>red</option>
        <option value='blue'>blue</option>
        <option value='green'>green</option>
      </select>
      <div className='swatch' style={{ backgroundColor: color }}></div>
      <button onClick={()=> store.dispatch({ type: 'ADD_ROW' })}>+</button>
    </div>
  );
}

export default Picker;
