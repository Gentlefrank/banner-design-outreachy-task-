import logo from './logo.svg';
import ColorPicker from '@rc-component/color-picker';
import '@rc-component/color-picker/assets/index.css';
import { useRef } from 'react';
function App() {
const bgColor= useRef(null)

const changeBoxBg= ()=>{

}
  return (
    <div className="App">
    <section className='banner'>
     <div className='container'>
      <div className='banner-box'>
         
      </div>
     </div>

    </section>
    <section className='banner-items container'>
    <form>
    <div className='banner-items-options'>
    <div className='form-group form-bg-picker'>
    <ColorPicker />
    <label>Pick a background color</label>
    
    </div>
     <div className='form-group form-img-upload'>
    <label>Upload an Image:</label>
    <input type='file' id='myFile' name='filename'/>
    </div>
    <div className='form-group form-heading'>
    <label>Heading:</label>
    <input />
    </div>

    <div className='form-group form-text'>
    <label>Text:</label>
    <input />
    </div>
    </div>
    </form>
    </section>
    </div>
  );
}

export default App;
