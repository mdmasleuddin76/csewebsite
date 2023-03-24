import NavBar from "./shared/navbar";
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Academic from './components/Academic'
import People from './components/People'
import Research from './components/Research'
import Events from './components/Events'
import Placement from './components/Placement'
import Gallery from './components/Gallery'
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Academic' element={<Academic/>}/>
          <Route path='/People' element={<People/>}/>
          <Route path='/Research' element={<Research/>}/>
          <Route path='/Events' element={<Events/>}/>
          <Route path='/Placement' element={<Placement/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
          <Route path='/Location' element={<Location/>}/>
        </Routes>
        {/* <Location/> */}
      </Router>
    </div>
  );
}

export default App;
