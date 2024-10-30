import React, { useState } from 'react'
import './style.css'

export default function Generator() {

    const [generatedFirstName, setGeneratedFirstName] = useState('');
    const [generatedSecondName, setGeneratedSecondName] = useState('');
    const [copied, setCopied] = useState(false);

    const firstNames = [
        'glittering', 'sparkling', 'dewey',
        'forest', 'merriweather'
    ]

    const secondNames = [
        'treebeard', 'fawn', 'flora', 'fauna',
        'raindrops', 'dewdrops'
    ]

    function generate() {
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomSecondName = secondNames[Math.floor(Math.random() * secondNames.length)];
        setGeneratedFirstName(randomFirstName);
        setGeneratedSecondName(randomSecondName);
        setCopied(false);
    }

    function printName() {
        const fullName = `${generatedFirstName} ${generatedSecondName}`
        console.log(fullName)
    }

    return (
        <div className='name-container'>
            <h2>Find your woodland name</h2>
            <button className='my-button' onClick={generate}>
                Generate Name
            </button>
            <p className="generated-name"> 
                Your name is: 
                {`${generatedFirstName} ${generatedSecondName}`} 
            </p>
        </div>
    )
}