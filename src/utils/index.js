const getRow = (cell) => {
	return Math.floor(cell / 9)
}

const getColumn = (cell) => {
	return cell % 9
}

const getSquare = (cell) => {
	return Math.floor(getRow(cell) / 3) * 3 + Math.floor(getColumn(cell) / 3)
}

const isPossibleRow = (number, row, board) => {
	for (let i = 0; i < 9; i++) {
		if (board[row * 9 + i] === number) {
			return false
		}
	}
	return true
}

const isPossibleColumn = (number, col, board) => {
	for (let i = 0; i < 9; i++) {
		if (board[col+9 * i] === number) {
			return false
		}
	}
	return true
}

const isPossibleSquare = (number, square, board) => {
	for (let i = 0; i < 9; i++) {
		if (board[Math.floor(square / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (square % 3)] === number) {
			return false
		}
	}
	return true
}

export const isPossibleNumber = (cell, number, board) => {
	const row = getRow(cell)
	const col = getColumn(cell)
	const square = getSquare(cell)
	return isPossibleRow(number, row, board) && isPossibleColumn(number, col, board) && isPossibleSquare(number, square, board)
}

const isCorrectRow = (row, board) => {
	let rightSequence = new Array(1,2,3,4,5,6,7,8,9)
	let rowTemp= new Array()
	for (let i = 0; i < 9; i++) {
		rowTemp[i] = board[row * 9 + i]
	}
	rowTemp.sort()
	return rowTemp.join() === rightSequence.join()
}

const isCorrectCol = (col, board) => {
	let rightSequence = new Array(1,2,3,4,5,6,7,8,9)
	let colTemp= new Array()
	for (let i = 0; i < 9; i++) {
		colTemp[i] = board[col + i * 9]
	}
	colTemp.sort()
	return colTemp.join() === rightSequence.join()
}

const isCorrectSquare = (square, board) => {
	let rightSequence = new Array(1,2,3,4,5,6,7,8,9)
	let squareTemp= new Array()
	for (let i=0; i < 9; i++) {
		squareTemp[i] = board[Math.floor(square / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (square % 3)]
	}
	squareTemp.sort()
	return squareTemp.join() == rightSequence.join()
}

const isSolvedboard = (board) => {
	for (let i = 0; i < 9; i++) {
		if (!isCorrectSquare(i,board) || !isCorrectRow(i,board) || !isCorrectCol(i,board)) {
			return false
		}
	}
	return true
}

const determinePossibleValues = (cell, board) => {
	let possible = new Array()
	for (let i = 1; i <= 9; i++) {
		if (isPossibleNumber(cell,i,board)) {
			possible.unshift(i)
		}
	}
	return possible
}

const determineRandomPossibleValue = (possible, cell) => {
	let randomPicked = Math.floor(Math.random() * possible[cell].length)
	return possible[cell][randomPicked]
}

const scanboardForUnique = (board) => {
	let possible = new Array()
	for (let i = 0; i <= 80; i++) {
		if (board[i] === 0) {
			possible[i] = new Array()
			possible[i] = determinePossibleValues(i, board)
			if (possible[i].length === 0) {
				return false
			}
		}
	}
	return possible
}

const removeAttempt = (attemptArray, number) => {
	let newArray = new Array()
	for (let i = 0; i < attemptArray.length; i++) {
		if (attemptArray[i] !== number) {
			newArray.unshift(attemptArray[i])
		}
	}
	return newArray
}

const nextRandom = (possible) => {
	let max = 9
	let minChoices = 0
	for (let i = 0; i <= 80; i++) {
		if (possible[i] !== undefined) {
			if ((possible[i].length <= max) && (possible[i].length > 0)) {
				max = possible[i].length
				minChoices = i
			}
		}
	}
	return minChoices
}

const solve = (board) => {
	const saved = new Array()
	const savedboard = new Array()
	let i = 0
	let nextMove
	let whatToTry
	let attempt
	while (!isSolvedboard(board)) {
		i++
		nextMove = scanboardForUnique(board)
		if (nextMove === false) {
			nextMove = saved.pop()
			board = savedboard.pop()
		}
		whatToTry = nextRandom(nextMove)
		attempt = determineRandomPossibleValue(nextMove,whatToTry)
		if (nextMove[whatToTry].length>1) {
			nextMove[whatToTry] = removeAttempt(nextMove[whatToTry],attempt)
			saved.push(nextMove.slice())
			savedboard.push(board.slice())
		}
		board[whatToTry] = attempt
	}
	return board
}

const generateSudoku = (b) => {
  const board = JSON.parse(JSON.stringify(b))
  const newBoard = new Array()


  for (let i = 0; i < 9; i++ ) {
    const boardArr = []
    for (let j = 0; j < 9; j++) {
      boardArr.push(board[i * 9 + j])
    }

    newBoard.push(boardArr)

  }

  return newBoard
}

const getDifficultyNumber = (difficulty) => {
  if (difficulty === 'medium') {
    return Math.floor((Math.random() * 4) + 2)
  }
  if (difficulty === 'hard') {
    return Math.floor((Math.random() * 3) + 1)
  }

  return Math.floor((Math.random() * 5) + 3)
}

const makeDifficulty = (difficulty, board) => {
  const newBoard = [...board]
  const randomed = getDifficultyNumber(difficulty)

  const count = 9 - randomed
  let deletedAmount = count * 9

  while (deletedAmount > 0) {
    const del = Math.floor(Math.random() * board.length)
    if (newBoard[del] !== 0) {
      newBoard[del] = 0
      deletedAmount--
    }
  }

  return newBoard
}

export const generateSudokuData = (difficulty = 'easy') => {
  const board = new Array(81).fill(0)
  const newBoard = solve(board)
  const withDifficulty = makeDifficulty(difficulty, newBoard)
  const generated = generateSudoku(withDifficulty)
  return {
	  generated: generated.map(i => {
		return i.map(j => {
		  return {
			value: j,
			prefilled: !!j
		  }
		})
	  }),
	  original: withDifficulty
  }
}




