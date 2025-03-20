import logo from './logo.svg';
import ColorPicker from '@rc-component/color-picker';
import '@rc-component/color-picker/assets/index.css';

function App() {
  return (
    <div className="App">
    <section className='banner'>
     <div className='container'>
      <div className='banner-box'>
        jjnjj
      </div>
     </div>

    </section>
    <section className='banner-items container'>
    <form>
    <div className='form-group'>
    <ColorPicker />
    <label>Pick background color</label>
    
    </div>
     <div className='form-group'>
    <label>Upload an Image</label>
    <input />
    </div>
    <div className='form-group'>
    <label>Heading</label>
    <input />
    </div>

    <div className='form-group'>
    <label>Text</label>
    <input />
    </div>
   
    </form>
    </section>
    </div>
  );
}

export default App;
