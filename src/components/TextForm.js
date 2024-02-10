import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked",text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }

    const handleLoClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    
    const handleClearClick =()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }

    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }

    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleRemoveExtraSpacesClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }

    const [text, setText] = useState('');
    //useState is a hook used to create state variable
    // text="new text";  Wrong way to change the state
    // setText("newText");  // Correct way to change the state
    return (
        <>
        <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" 
            style={{backgroundColor:props.mode==="light"?"white":"#13466e",
            color:props.mode==="light"?"black":"white"
            }}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
