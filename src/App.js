import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="App background">
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
      </div>
    </Router>
  );
}

export default App;
