import { createStore } from 'redux'
const reducer = (state={ grid: [], color: 'red'}, action)=> {
  if(action.type === 'SET_COLOR'){
    state = { ...state, color: action.color };
  }
  if(action.type === 'ADD_ROW'){
    const arr = new Array(10).fill('');
    state = { ...state, grid: [...state.grid, arr ] };
  }
  if(action.type === 'COLORIZE'){
    const row = [...state.grid[action.rdx]];
    const color = row[action.cdx] === action.color ? '' : action.color;
    row[action.cdx] = color;
    const grid = state.grid.map((_row, idx)=> idx === action.rdx ? row : _row);
    state = {...state, grid };
  }
  return state;
};

const store = createStore(reducer);
store.dispatch({ type: 'ADD_ROW'});

export default store;

