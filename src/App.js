import './styles/App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import Nav from './components/layout/Nav';
import Home from './components/contact/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Add from './components/contact/Add';
import Update from './components/contact/Update';
function App() {
  return (
    <div className="App">
      <Router>
      <Nav></Nav>
      <Switch>
   <Route exact path="/" component={Home}></Route>
   <Route exact path="/contact/add" component={Add}></Route>
   <Route exact path="/contact/update/:id" component={Update}></Route>
   </Switch>
   </Router>
    </div>
  );
}

export default App;
