import { generateSudokuData, isPossibleNumber } from '../utils'

const initialState = {
    sudoku: generateSudokuData()
}


const onCellChange = (x, y, value, data) => {
    const originalData = [...data.original]
    const generatedData = [...data.generated]
    const currentIndex = 9 * x + y
    console.log(value)


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
            
            return {
                ...state,
                sudoku: data
            }
        }
        case 'CHANGE_DIFFICULTY': {
            return {
                ...state,
                sudoku: generateSudokuData(action.payload)
            }
        }
        default:
            return state
    }
}

export default reducer