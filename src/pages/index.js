import React from 'react'
import { createUseStyles } from 'react-jss'
import { Input, Button } from '../components/Form'

const useIndexStyles = createUseStyles({
  wrapper: {
    boxSizing: 'border-box',
    width: '100%',
    maxHeight: '100vh',
    overflow: 'hidden',
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
    gridArea: 'sudoku'
  },
  logo: {
    gridArea: 'logo'
  },
  footer: {
    gridArea: 'footer'
  }
})

const IndexPage = () => {

  const styles = useIndexStyles()

  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src="/img/logo.svg" />
      <div className={styles.sudoku}>
        <Input />
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