import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          {/* ... */}
          <Link to="/portfolio">
            <Button variant="primary" className="mt-4">
              View My Portfolio
            </Button>
          </Link>
        </header>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
