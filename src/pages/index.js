import React from 'react'
import { createUseStyles } from 'react-jss'
import { Input, Button } from '../components/Form'
import { useSelector } from 'react-redux'

const useIndexStyles = createUseStyles({
  wrapper: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '90px 67px 73px 67px',
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
    gridArea: 'sudoku',
    maxWidth: '980px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '24px'
  },
  sudokuSquare: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gridGap: '4px'
  },
  logo: {
    gridArea: 'logo'
  },
  footer: {
    gridArea: 'footer'
  }
})

const GenerateSudoku = (props) => {
  const styles = useIndexStyles()
  return props.template.map((t, i) => (
    <div key={i} className={styles.sudokuSquare}>
        {
          t.map((t1, j) => (
            <Input type="number" max="1" key={j} disabled={t1 !== 0} />
          ))
        }
    </div>
  ))
}

const IndexPage = () => {
  const mainState = useSelector(state => state.main)
  const styles = useIndexStyles()

  const template = mainState?.sudoku?.template

  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src="/img/logo.svg" />
      <div className={styles.sudoku}>
        <GenerateSudoku template={template} />
      </div>
      <div className={styles.footer}>
        <Button>
          Create new puzzle
        </Button>
      </div>
    </div>
  )
}

export default IndexPage