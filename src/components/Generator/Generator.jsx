import React, { useState } from 'react'
import './style.css'
import MyButton from '../Button';

export default function Generator() {

    const [generatedFirstName, setGeneratedFirstName] = useState('');
    const [generatedSecondName, setGeneratedSecondName] = useState('');
    const [generatedPrepPhrase, setGeneratedPrepPhrase] = useState('');
    const [copied, setCopied] = useState(false);

    const firstNames = [
        'glittering', 'sparkling', 'dewey',
        'forest', 'merriweather'
    ]

    const secondNames = [
        'treebeard', 'fawn', 'flora', 'fauna',
        'raindrops', 'dewdrops'
    ]

    const prepPhrase = 'of the ';

    function generate() {
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomSecondName = secondNames[Math.floor(Math.random() * secondNames.length)];

        setGeneratedFirstName(randomFirstName);
        setGeneratedSecondName(randomSecondName);
        setGeneratedPrepPhrase(prepPhrase);
        setCopied(false);
    }

    function printName() {
        const fullName = `${generatedFirstName} ${generatedSecondName}`
        console.log(fullName)
    }

    return (
        <div className='name-container'>
            <h2>Find your woodland name</h2>
            <MyButton onClick={generate}>
                Generate Name
            </MyButton>
            <p className="generated-name"> 
                Your name is:<br />
                {`${generatedFirstName} ${generatedSecondName} ${generatedPrepPhrase}`} 
            </p>
        </div>
    )
}