import logo from './logo.svg';
import ColorPicker, {Color} from '@rc-component/color-picker';
import '@rc-component/color-picker/assets/index.css';
import React, { useRef, useState } from 'react';
import { toPng } from 'html-to-image';

let start = true;
function App() {
   const [value, setValue] = useState(new Color('rgba(255,0,0,0)'));
   const [bannerHeader, setBannerHeader] = useState('')
   const [bannerText, setBannerText] = useState('')
   const [bannerImg, setBannerImg] = useState('Your Image appears here');
   const [submitSwitch, setSubmitSwitch] = useState('')
   const [getDisplay, setGetDisplay] = useState('none')
   const [display1, setGetDisplay1] =useState('block')
   const [display2, setGetDisplay2] =useState('none')
const bgColor= useRef(value)
const downloadDiv = useRef(null);

 
const changeBoxBg= ()=>{
  bgColor.current.background= value.toRgbString()
}

const imageChange= (e)=>{
  console.log(e.target.files);
  setBannerImg(URL.createObjectURL(e.target.files[0]));
}

const headerChange=(e)=>{
 setBannerHeader(e.target.value)
}

const textChange=(e)=>{
  setBannerText(e.target.value)
}

const handleSubmit= async(e)=>{
  e.preventDefault()
  setGetDisplay1('none')
  setGetDisplay2('block')
 
  const htmlToImageConvert = () => {
 

    toPng(downloadDiv.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  setGetDisplay(htmlToImageConvert) 
}

  return (
    <div className="App">
    <section className='banner'>
     <div className='container'>
      <div className='banner-box' style={{background: value}} onChange={changeBoxBg} ref={downloadDiv} >
          <div style={{width: '50%'}}><img src={bannerImg} className='banner-image' alt='Your image appears here' /></div>  

          <div>
               <div style={{textAlign: 'right'}}> <h1>{bannerHeader || `Enter Title Here...`}</h1> </div>
        <div style={{textAlign: 'right'}}><p>{bannerText || `Enter paragraph here...`}</p></div>
          </div>
       
   
      </div>
     </div>

    </section>
    <section className='banner-items container'>
    <form onSubmit={handleSubmit}>
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
 
    <input type='file' onChange={imageChange} />
    </div>
    <div className='form-group form-heading'>
    <label>Heading:</label>
    <input value={bannerHeader} onChange={headerChange} />
    </div>

    <div className='form-group form-text'>
    <label>Text:</label>
    <input value={bannerText} onChange={textChange}/>
    
    </div>
 
     <div className='form-group submit-div'>
   
     <button className='submit-btn' style={{ display: display1}}>Submit & Upload</button>
     <button onClick={getDisplay} className='submit-btn' style={{display: display2}}>Download Image</button>

      </div>
    </div>
    </form>
    </section>
    </div>
  );
}

export default App;
