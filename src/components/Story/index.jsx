import { useState } from 'react';
import CustomOption from '../CustomOption';
import './style.css';

export default function Story({ storyData }) {
    const [currentScene, setCurrentScene] = useState('start');

    const handleOptionClick = (nextScene) => {
        setCurrentScene(nextScene);
    };

    const scene = storyData[currentScene];

    return (
        <div className='story-container'>
            <p>{scene.text}</p>
            {scene.options.map((option, index) => (
                <CustomOption key={index} option={option} onClick={handleOptionClick} />
            ))}
        </div>
    )
}