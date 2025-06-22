import React, { useRef, useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [userInput, setUserInput] = useState('')
    const [charCount, setCharCount] = useState(0)
    const [excludeSpaces, setExcludeSpaces] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const [sentenceCount, setSentenceCount] = useState(0)
    const [averageWord, setAverageWord] = useState(0)
    const [letterFreq, setLetterFreq] = useState({})

    function handleInputChange(event) {
        const newValue = event.target.value;
        setUserInput(newValue);

        const charCountValue = excludeSpaces
            ? newValue.replace(/\s/g, '').length  // removes all whitespace
            : newValue.length;

        setCharCount(charCountValue);

        const words = newValue.match(/\b\w+\b/g) || [];
        setWordCount(words.length);

        const sentences = newValue.split(/[.!?]+/).filter(s => s.trim().length > 0);
        setSentenceCount(sentences.length);

        const freq = {};
        for (const char of newValue.replace(/[^a-zA-Z]/g, "").toUpperCase()) {
            freq[char] = (freq[char] || 0) + 1;
        }
        setLetterFreq(freq);
    }

    const renderLetterDensity = () => {
        const totalChars = userInput.length;

        if (totalChars === 0) {
            return <p>No characters found. Start typing to see letter density.</p>;
        }

        const sorted = Object.entries(letterFreq).sort();

        console.log(sorted);

        return sorted.map(([letter, count]) => {
            const percent = ((count / totalChars) * 100).toFixed(2);
            return (
                <div className="letter-bar" key={letter}>
                    <span>{letter}</span>
                    <div className="bar" style={{ width: `${percent}%` }}></div>
                    <span>{count} ({percent}%)</span>
                </div>
            );
        });
    };

    const excludeFunc = () => {
        const newExcludeSpaces = !excludeSpaces;
        setExcludeSpaces(newExcludeSpaces);

        const charCountValue = newExcludeSpaces
            ? userInput.replace(/\s/g, '').length
            : userInput.length;

        setCharCount(charCountValue);
    };


    return (
        <>
            <div className="container">
                <h1 className='container-heading'>Analyze your text in real-time.</h1>
                <textarea
                    id="textInput"
                    placeholder="Start typing here... (or paste your text)"
                    onChange={handleInputChange}
                    value={userInput}
                >

                </textarea>


                <div className='options-container'>
                    <div className="options-left">
                        <label>
                            <input type="checkbox" checked={excludeSpaces} onChange={excludeFunc} /> Exclude Spaces
                        </label>
                        <label>
                            <input type="checkbox" /> Set Character Limit
                        </label>
                    </div>
                    <div className='options-right'>
                        <span>Approx. reading time: <span id="readingTime">0</span> minute</span>
                    </div>
                </div>

                <div className='stats-container-holder'>
                    <div className="stats-container">
                        <div className="stat-box purple">
                            <p className="stat-number">{charCount}</p>
                            <p className="stat-title">Total Characters</p>
                        </div>
                        <div className="stat-box orange">
                            <p className="stat-number">{wordCount}</p>
                            <p className="stat-title">Word Count</p>
                        </div>
                        <div className="stat-box red">
                            <p className="stat-number">{sentenceCount}</p>
                            <p className="stat-title">Sentence Count</p>
                        </div>
                    </div>
                </div>
                {/* <div className="letter-density">
                    <h2>Letter Density</h2>
                    {renderLetterDensity()}
                </div> */}
            </div>
        </>
    )
}

export default Counter