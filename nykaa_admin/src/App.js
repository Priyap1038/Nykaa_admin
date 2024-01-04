import logo from './logo.svg';
import './App.css';
import adminRoutes from './adminRoutes';
import Dashboard from './Pages/Dashboard';



function App() {
  return (
    <div className="App">
     <adminRoutes/>
     {/* <h1>hello</h1> */}
     <Dashboard/>
    </div>
  );
}

export default App;
