import './App.css';
import Home from './Components/Home/Home';
import { Route } from "react-router-dom";
import Mail from './Components/Mail/Mail';
import Portfolio from './Components/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">

            <Route exact path="/" component={Home} />
            <Route path="/Mail" component={Mail} />
            <Route path="/Portfolio" component={Portfolio} />
    </div>
  );
}

export default App;
