import logo from './logo.svg';
import ColorPicker, {Color} from '@rc-component/color-picker';
import '@rc-component/color-picker/assets/index.css';
import React, { useRef, useState } from 'react';
 

let start = true;
function App() {
   const [value, setValue] = useState(new Color('rgba(255,0,0,0)'));
   const [bannerHeader, setBannerHeader] = useState('')
   const [bannerText, setBannerText] = useState('')
  
const bgColor= useRef(value)

 
const changeBoxBg= ()=>{
  bgColor.current.background= value.toRgbString()
}

const headerChange=(e)=>{
 setBannerHeader(e.target.value)
}

const textChange=(e)=>{
  setBannerText(e.target.value)
}

  return (
    <div className="App">
    <section className='banner'>
     <div className='container'>
      <div className='banner-box' style={{background: value}} onChange={changeBoxBg} >
       <div> <h1>{bannerHeader}</h1> </div>
        <div><p>{bannerText}</p></div>
      </div>
     </div>

    </section>
    <section className='banner-items container'>
    <form>
    <div className='banner-items-options'>
    <div className='form-group form-bg-picker' onClick={changeBoxBg}>
    <ColorPicker
        value={value}
        onChange={nextValue => {
          let proxyValue = nextValue;

          if (start) {
            start = false;
            proxyValue = nextValue.setA(1);
          }

          setValue(proxyValue);
        }}
      />
    
    <label>Pick a background color</label>
    
    </div>
     <div className='form-group form-img-upload'>
    <label>Upload an Image:</label>
 
    <input type='file' id='myFile' name='filename'/>
    </div>
    <div className='form-group form-heading'>
    <label>Heading:</label>
    <input value={bannerHeader} onChange={headerChange} />
    </div>

    <div className='form-group form-text'>
    <label>Text:</label>
    <input value={bannerText} onChange={textChange}/>
    </div>
    </div>
    </form>
    </section>
    </div>
  );
}

export default App;
