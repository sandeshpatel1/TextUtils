import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");
  let words = text.trim() // trim out useless spaces
  let word_length; 
  if(words.length === 0){ //If no letters typed, stright away = 0
      word_length = 0;
  }
  else{
      word_length = words.split(/\s+/).length;
  }

    const handleUConClick = ()=>{
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert("Converted To Uppercase!", "success")
    }
    const handleLConClick = ()=>{
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted To Lowercase!", "success")
    }
    const handleclearonClick = ()=>{
      let newtext = "";
      setText(newtext);
      props.showAlert("TextArea Has Been Cleared!", "success")
    }
    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Text Has Been Copied!", "success")
    }
    
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("ExtraSpaces Has Been Cleared!", "success")
}
    
    const handleOnChange = (event)=>{
      console.log("On Change");
      setText(event.target.value);
    }
    

  return (
    <>

    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="8"></textarea>
    </div>
    <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUConClick}>Uppercase</button>
    <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLConClick}>Lowercase</button>
    <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleclearonClick}>Clear</button>
    <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
    
    
    
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2 className="heading">Text Summary</h2>
      <p> {word_length} words and {text.length} character</p>
      <p> {0.008 * word_length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Nothing To Preview Here!"}</p>
    </div>
</>
  )
}

