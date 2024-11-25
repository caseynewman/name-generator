import { useState } from 'react';

export default function Story({ storyData }) {
    const [currentScene, setCurrentScene] = useState('start');

    const handleOptionClick = (nextScene) => {
        setCurrentScene(nextScene);
    };

    const scene = storyData[currentScene];

    return (
        <div>
            <p>{scene.text}</p>
            {scene.option.man((option, index) => (
                <Option key={index} option={option} onClick={handleOptionClick} />
            ))}
        </div>
    )
}