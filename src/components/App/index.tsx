import React, { useState } from 'react';
import DisplayNumber from '../DisplayNumber.tsx';
import Button from '../Button/index'
import './App.scss';

import { MAX_COLS, MAX_ROWS } from '../../constants';
import { Cell, CellValue, CellState } from "../../types/index";



/** Create 2d array */
/**we can type output like =():Type output here */
const makeGrid = ():Cell[][] => {
    // cell on array of object ja object with value and state propertys''
    const cells: Cell[][] = [];
    for (let row = 0; row < MAX_ROWS; row++) {
        cells.push([]);
        for (let col = 0; col < MAX_COLS; col++) {
            cells[row].push({
                value: CellValue.none,
                state: CellState.open,
            })
        }
    }
    return cells
}
    const App: React.FC = () => {

        const [cellsState, setCells] = useState(makeGrid());

        //function will return Node elemnt
        const renderCells= (): React.ReactNode =>{ 
            return cellsState.map((row, rowIndex) => 
            row.map((cell, colIndex) => <Button key={`${rowIndex}` +`${colIndex}`}></Button>))
        }
        

        console.log(cellsState)

        return <div className="App">
            <div className="Header">
                <DisplayNumber value={0} />
                {/* aria-lable="face" */}
                <div className="Face"><span role="img" aria-label="face">:D</span></div>
                <DisplayNumber value={23} />
            </div>
            <div className="Body">
                {renderCells()}
            </div>
        </div>
    }

    export default App;