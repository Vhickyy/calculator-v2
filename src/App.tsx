import Calculator from './Components/Calculator';
import History from './Components/History';

function App() {
  return (
    <div className='main'>
      <>
      <div className='calculator-body'>
        <Calculator/>
      </div>
      <div className='history-body'>
        <History/>
      </div>
    </>
    </div>
  );
}

export default App;
