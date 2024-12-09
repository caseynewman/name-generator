import MyButton from '../../components/Button'
import './style.css'

export default function GameStart() {

    return (
        <div className='game-container'>
            <p className='game-intro'>
                Imagine living amongst nature. When you envision your dream scenario, are there lush trees or bubbling brooks or vast cliffsides? Take a walk to find yourself. Uncover where you would call home, and generate a random name at the end of your adventure based on your answers along the way.
            </p>
            <MyButton>
                Let's go!
            </MyButton>
        </div>
    )
}