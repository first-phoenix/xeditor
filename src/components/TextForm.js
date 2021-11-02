import React, {useState} from 'react'


export default function TextForm(props) {


    const handleUpClick = () => {
        console.log('uppercase is clicked');
        let newText= text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        console.log('lowercase is clicked');
        let newText= text.tolowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log('On changed is clicked');
        setText(event.target.value);
    }

    const handleClearClick = () => {
        console.log('clear is clicked');
        setText('');
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to lower case</button>
            <button className="btn btn-secondary mx-3 " onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} Words, {text.length} characters</p>
            <p>Approx. reading time - {0.008 * text.split(" ").length} min</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
