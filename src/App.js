import logo from './logo.svg';
import './App.css';
import Imagecontainer from './components/Imagecontainer';
import SubmitionForm from './components/SubmitionForm';
import Home from './components/Home';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Register' element={<SubmitionForm/>}></Route>
          <Route exact path='/Image' element={<Imagecontainer/>}></Route>
        </Routes>
     </div>
    </Router>
    
  );
}

export default App;
