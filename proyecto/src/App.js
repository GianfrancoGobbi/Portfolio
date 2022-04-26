import './App.css';
import Home from './Components/Home/Home';
import { Route } from "react-router-dom";
import Mail from './Components/Mail/Mail';
import Portfolio from './Components/Portfolio/Portfolio';
import Cv from  './Components/Cv/Cv';
import Design from './Components/Portfolio/Design/Design'
import Fullstack from './Components/Portfolio/Fullstack/Fullstack';


function App() {
  return (
    <div className="App">

            <Route exact path="/" component={Home} />
            <Route path="/Mail" component={Mail} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/CV" component={Cv} />
            <Route path="/Design" component={Design} />
            <Route path="/Fullstack" component={Fullstack} />
    </div>
  );
}

export default App;
