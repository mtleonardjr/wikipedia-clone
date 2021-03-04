import './App.css';
import Banner from'./components/Banner'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Featured from './components/Featured'
import News from './components/News'

function App() {
  return (
    <div className='app-container'>
      <Sidebar />
      <div className="main-container">
        <Header />
        <div className='body-container'>
          <div className='grid'>
            <div className='grid-item-1'><Banner /></div>
            <div className='grid-item-2'><Featured /></div>
            <div className='grid-item-3'><News /></div>
            <div className='grid-item-4'>grid-item-4</div>
            <div className='grid-item-5'>grid-item-5</div>
            <div className='grid-item-6'>grid-item-6</div>
          </div>
        </div>
        <div className='footer'>Footer</div>
      </div>
    </div>
  );
}

export default App;
