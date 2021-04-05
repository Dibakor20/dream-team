import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import TopPlayer from './Component/TopPlayer/TopPlayer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/PlayerDetails/Pages/Home/Home';
import Club from './Component/PlayerDetails/Pages/Club/Club';
import ClubDetails from './Component/ClubDetails/ClubDetails';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/club">
          <Club/>
        </Route>
        <Route path="/teamId/:idTeam">
          <ClubDetails/>
        </Route>
    
        <Route path="/">
          <Home/>
        </Route>
        
      </Switch>
    </Router>
    
     
     
    </>
  );
}

export default App;
