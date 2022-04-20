import './App.css';
import Home from './Components/Home/Home';
import { Route } from "react-router-dom";
import Mail from './Components/Mail/Mail';


function App() {
  return (
    <div className="App">

            <Route exact path="/" component={Home} />
            <Route path="/Mail" component={Mail} />
    </div>
  );
}

export default App;
