import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Input, Button } from '../components/Form'
import { useSelector, useDispatch } from 'react-redux'
import DifficultyLevelsModal from '../modules/DifficultyLevelsModal'

const useIndexStyles = createUseStyles({
  '@import': [
      'url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap)'
  ],
  
  wrapper: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '20px 67px 73px 67px',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateAreas: `
      "logo sudoku"
      "footer footer"
    `,
    gridColumnGap: '65px',
    gridRowGap: '44px' 
  },
  sudoku: {
    width: '100%',
    gridArea: 'sudoku',
    maxWidth: '550px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    '@media screen and (min-width: 1024px)': {
      maxWidth: '780px'
    }
  },
  sudokuSquare: {
    width: '100%',
    display: 'flex',
    gap: '4px',
    '&:nth-child(3n + 1)': {
      marginTop: '20px'
    },
    '& input': {
      width:'50px',
      fontFamily: '"Poppins", sans-serif',
      '@media screen and (min-width: 1024px)': {
        width:'70px',
      },
      '&:nth-child(3n + 1)': {
        marginLeft: '20px'
      }
    }
  },
  logo: {
    gridArea: 'logo'
  },
  footer: {
    gridArea: 'footer',
    display: 'flex',
    justifyContent: 'center'
  }
})

const GenerateSudoku = (props) => {
  const styles = useIndexStyles()
  const dispatch = useDispatch()
  console.log(props.template)
  return props.template.map((t, i) => (
    <div key={i} className={styles.sudokuSquare}>
        {
          t.map((t1, j) => (
            <Input 
              type="number"
              max="1"
              key={j}
              value={t1.value !== 0 ? t1.value : ''}
              onChange={(value) => dispatch({
                type: 'ON_CELL_CHANGE',
                payload: {
                  x: i,
                  y: j,
                  value
                }
              })}
              prefilled={t1.prefilled}
              tabIndex='-1'
              error={t1.error}
              restriction={(value) => {
                if (value.length > 1 || value === '0') {
                  return false
                }
                return true
              }}
            />
          ))
        }
    </div>
  ))
}

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false)
  const mainState = useSelector(state => state.main)
  const styles = useIndexStyles()

  const template = mainState?.sudoku?.generated

  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src="/img/logo.svg" />
      <div className={styles.sudoku}>
        <GenerateSudoku template={template} />
      </div>
      <div className={styles.footer}>
        <Button onClick={() => setShowModal(true)}>
          Create new puzzle
        </Button>
      </div>
      {
        showModal ? <DifficultyLevelsModal onClose={() => setShowModal(false)} /> : null
      }
    </div>
  )
}

export default IndexPage