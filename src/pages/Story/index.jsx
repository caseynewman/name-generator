import { useState } from 'react';
import { storyData } from '../../components/StoryData';
import CustomOption from '../../components/CustomOption';
import './style.css';

export default function Story() {
    const [currentSceneId, setCurrentSceneId] = useState('start');

    const handleOptionClick = (nextSceneId) => {
        setCurrentSceneId(nextSceneId);
    };

    const currentScene = storyData.find(scene => scene.id === currentSceneId);

    if (!currentScene) {
        return (
            <div className="story-container">
                <h2>Scene not found</h2>
                <p>Oops! Something went wrong.</p>
            </div>
        );
    }

    return (
        <div className='story-container'>
            <h2>{currentScene.text}</h2>
            <div className='scene-selections'>
                {currentScene.options.map((option, index) => (
                    <CustomOption
                    key={index}
                    option={option}
                    onClick={() => handleOptionClick(option.nextSceneId)} />
                ))}
            </div>
        </div>
    )
}