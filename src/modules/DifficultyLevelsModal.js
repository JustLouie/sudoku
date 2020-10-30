import React, { useState } from 'react'
import Modal from '../components/Modal'
import { Input } from '../components/Form'
import { useDispatch } from 'react-redux'

const DifficultyLevelsModal = (props) => {
    const [difficulty, setDifficulty] = useState('easy')
    const dispatch = useDispatch()

    const onChange = (e) => {
        setDifficulty(e.target.value)
    }

    const onComplete = () => {
        dispatch({
            type: 'CHANGE_DIFFICULTY',
            payload: difficulty
        })
    }

    return (
        <Modal title="Choose difficulty" footerButtonTitle="Continue" {...props} onComplete={onComplete}>

            <Input 
                type="radio" 
                name="difficulty" 
                value="easy"
                checked={difficulty === 'easy'}
                onChange={onChange}
            >
                Easy, 3-5 prefilled numbers
            </Input>
            <Input 
                type="radio" 
                name="difficulty" 
                value="medium" 
                checked={difficulty === 'medium'}
                onChange={onChange}
            >
                Medium, 3-4 prefilled numbers
            </Input>
            <Input 
                type="radio" 
                name="difficulty" 
                value="hard" 
                checked={difficulty === 'hard'}
                onChange={onChange}
            >
                Hard — 1-3 prefilled numbers
            </Input>
        </Modal>
    )
}

export default DifficultyLevelsModal