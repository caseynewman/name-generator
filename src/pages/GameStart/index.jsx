import MyButton from '../../components/Button'
import './style.css'

export default function GameStart() {

    return (
        <div className='game-container'>
            <p className='game-intro'>
                Imagine...
            </p>
            <MyButton>
                Let's go!
            </MyButton>
        </div>
    )
}