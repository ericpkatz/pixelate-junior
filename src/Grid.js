import React  from 'react';
import store from './store';

const Grid = ({ grid, color })=> {
  return (
    <div className='grid'>
      {
        grid.map( (row, rdx) => {
          return (
            <div key={ rdx }>
              {
                row.map( (cell, cdx) => {
                  return (
                    <div 
                    key={cdx}
                    style={{ backgroundColor: cell}}
                    onClick={ ()=> store.dispatch({ type: 'COLORIZE', cdx, rdx, color})}></div>
                  );
                })
              }
            </div>
          );
        })

      }
    </div>
  );
}

export default Grid;
