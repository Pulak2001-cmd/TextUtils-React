import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
    const handleLowClick = (e)=>{
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleclear = ()=>{
        setText("")
        props.showAlert("Text cleared", "success")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text) 
        props.showAlert("Copies to clipboard", "success")
    }
    const removeExtraSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join([" "]))
        props.showAlert("Extra space removed", "success")
    }
    const [text, setText] = useState("")
    return (
        <>
        <div style={{color: props.mode === 'light'?'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" style={{color: props.mode === 'light'?'black' : 'white'}}>
                <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white' : 'grey', color: props.mode === 'light'?'black' : 'white'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'?'black' : 'white'}}>
            <h2>Your text summary</h2>
            <p>{text.length===0? 0 : text.split(" ").length} words and {text.length} characters</p>
            <p>{text.length===0? 0 : 0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the above textbox to preview"}</p>
        </div>
        </>
    )
}
