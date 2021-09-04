import './App.css';
import { Switch } from 'react-router-dom';

import Private from './routes/Private';
import Public from "./routes/Public"




import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/login';
import Singup from './pages/Singup/Singup';



function App() {
 
  return (
    <div className="App">
      
      <Switch>
        <Public path= "/singup" component={Singup}/>
        <Public path= "/login" component={Login}/>        
        <Private path="/" component={Home}  exact/>
        <Private path= "/profile/:username" component={Profile}/>

      </Switch>
    </div>
  );
}

export default App;
