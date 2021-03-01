import './App.css';
import Banner from'./components/Banner'

function App() {
  return (
    <div className='app-container'>
      <div className='sidebar'>sidebar</div>
      <div className="main-container">
        <div className='header'>Header</div>
        <div className='body-container'>
          <div className='grid'>
            <div className='grid-item-1'><Banner /></div>
            <div className='grid-item-2'>grid-item-2</div>
            <div className='grid-item-3'>grid-item-3</div>
            <div className='grid-item-4'>grid-item-4</div>
            <div className='grid-item-5'>grid-item-5</div>
            <div className='grid-item-6'>grid-item-6</div>
          </div>
          <div className='footer'>Footer</div>
        </div>
      </div>
    </div>
  );
}

export default App;
