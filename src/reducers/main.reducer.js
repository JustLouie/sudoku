import { generateSudokuData, getColumn, isPossibleNumber } from '../utils'

const initialState = {
    sudoku: {
        ...generateSudokuData()
    }
}


const onCellChange = (x, y, value, data) => {
    const originalData = [...data.original]
    const generatedData = [...data.generated]
    const currentIndex = 9 * x + y

    generatedData[x][y].value = parseInt(value)
    generatedData[x][y].error = false

    if (isPossibleNumber(currentIndex, parseInt(value), originalData)) {
        originalData[currentIndex] = parseInt(value)
    } else {
        generatedData[x][y].error = true
    }

    return {
        generated: generatedData,
        original: originalData
    }

}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'ON_CELL_CHANGE': {
            const { x, y, value } = action.payload
            const data = onCellChange(x, y, value, state.sudoku)
            console.log(data)
            
            return {
                ...state,
                sudoku: data
            }
        }
        default:
            return state
    }
}

export default reducer