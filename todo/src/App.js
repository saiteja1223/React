import './App.css';
import {Home}from './Home';
import { Login } from './Login';
import{ BrowserRouter, Routes,Route} from 'react-router-dom'
import Calculator from './Calculator';
function App() {
  return (
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="call" element={<Calculator/>}/>
         </Routes>
    </BrowserRouter>
    // <div className="App">
    //  <Home/>
    //   {/* <Login></Login> */}
    // </div>
  );
}

export default App;
