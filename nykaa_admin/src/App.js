
import './App.css';
import adminRoutes from './adminRoutes';
import Dashboard from './Pages/Dashboard';
import MainContainer from './Components/MainContainer';
import Productlist from './Components/Productlist';



function App() {
  return (
    <div className="App">
     <adminRoutes/>
     <Dashboard/> 
    </div>
  );
}

export default App;
