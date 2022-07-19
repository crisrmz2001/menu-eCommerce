import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Nosotros from './components/pages/Nosotros';
import Contacto from './components/pages/Contacto';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Nosotros" component={Nosotros}/>
          <Route path="/Contacto" component={Contacto}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
