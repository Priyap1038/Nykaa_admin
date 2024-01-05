
import './App.css';
import adminRoutes from './adminRoutes';
import Dashboard from './Pages/Dashboard';



function App() {
  return (
    <div className="App">
     <adminRoutes/>
     <Dashboard/>  
    </div>
  );
}

export default App;
