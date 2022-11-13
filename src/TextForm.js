import React from 'react' 
import  {useState} from 'react';


export default function TextForm(props) {
    const handleupclick=() =>{
       // console.log('button was clicked ');
let newText= text.toUpperCase();

        setText(newText);
        props.showalert("Converted into uppercase", "success")
    }
    const handleloclick=() =>{
       // console.log('button was clicked ');
let newText= text.toLowerCase();

        setText(newText);
        props.showalert("Converted into lowercase", "success")

    }
    const handleclearclick=() =>{
       // console.log('button was clicked ');
let newText= ' ';

        setText(newText);
        props.showalert("Text cleared", "success")

    }
    const handlealtclick=() =>{
       // console.log('button was clicked ');
 function swapCase({text}) {
    return text.split('').map((c,i) => 
        i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()
    ).join('');   
}

let newText = (swapCase({text}))

        setText(newText);
        props.showalert("Converted into AlTeRnAtE Cases", "success")

    }
    //console.log('on change');
    const handleOnChange=(event) =>{
        
   setText(event.target.value)
  
    }
    const handleCopy =()=>
    {
    console.log("I am copy");
    var text =  document.getElementById("my-box");
    text.select();
  
    navigator.clipboard.writeText(text.value);
    props.showalert(" text copied to clipboard","success")
                                                  
    }
      
    const [text, setText] = useState('');
// text='new text here'  //wrong way to change the text
//setText("enter your text here");   correct way to change the text
  return (
        <>
      <div style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'#020320':'white', color:props.mode==='dark'?'white':'black'}} id="my-box" rows="8"></textarea>
</div>
    </div>
    <button type="button" class="btn btn-success" onClick={handleupclick} >Enter to Convert into UpperCase</button>
    <button type="button" class="btn btn-danger mx-2" onClick={handleloclick} >Enter to Convert into LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleclearclick} >Enter to Clear text</button>
    <button type="button" class="btn btn-info  mx-2" onClick={handlealtclick} >Enter to aLtErNaTe text</button>
    <button type="button" class="btn btn-info  mx-2" onClick={ handleCopy } >Copy text</button>
    <div className="container-secondary" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>Your Entered Text Summary</h2>
        <p>
            {text.split(" ").length} words AND {text.length} characters
            <br />
            average time to read words/min ={ 0.08*text.split(" ").length}
        </p>
        <h2>Preview of your text</h2>
        
        <p>
            {text.length>0?text:"Enter text in above box to preview it"}
        </p>
    </div>
        </>
  )
}
