import MyButton from '../../components/Button';
import './style.css'

export default function GameStart() {
    return (
        <div className='game-container'>
            <p className='game-intro'>
                Imagine living amongst nature. When you envision your dream home, are there lush trees or bubbling brooks or vast cliffsides?<br/><br/>
                Take a walk to find yourself. When you've uncovered the place where you would call home, generate a random name at the end of your adventure based on your answers along the way.
            </p>
            <MyButton to="/story">
                Let's go!
            </MyButton>
        </div>
    )
}