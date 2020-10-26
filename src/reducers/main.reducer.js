const initialState = {
    sudoku: {
        template: [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
        ]
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default reducer