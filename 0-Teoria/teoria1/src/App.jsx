import logo from './logo.svg';
import'./App.css';

export const App = () => {
  return (
    <div className='App'>
        <header className="App-header">
            <img src={logo} className='App-logo' alt="logo" />
            <p>
                Edit <code>src/App.jsx</code> and save to reload
            </p>
            <a href="https:://reactjs.org" className="App-link" target='_blank'></a>
            Learn React
        </header>
    </div>
  );
};