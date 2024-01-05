import logo from './logo.svg';
import './App.css';
import adminRoutes from './adminRoutes';
import Dashboard from './Pages/Dashboard';



function App() {
  return (
    <div className="App">
     <adminRoutes/>
     <Dashboard/>
     <h1></h1> 
    </div>
  );
}

export default App;
