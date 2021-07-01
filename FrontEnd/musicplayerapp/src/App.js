import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routing } from './MusicRouting/routing';
import Home from './Components/Home'
import ShowAll from './Components/ShowAll';
import PlayAll from './Components/PlayAll';
import Search from './Components/Search';
import PlayOptions from './Components/PlayOptions';
function App() {
  return (
    <BrowserRouter>
      {routing}

      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/show" component={ShowAll} />
      <Route path="/play" component={PlayAll} />
      <Route path="/search" component={Search} />
      <Route path="/operate" component={PlayOptions} />
        {/* <Route exact path="/" component={Home} />
        <Route path="/show" component={ItemComponent} />
        <Route path="/create" component={Create} />
        <Route path="/search" component={Search} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
