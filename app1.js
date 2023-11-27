import "./App.css"
import Navbar from "./component/Navbar"
import LoginPage from './component/login';
import RegisterPage from './component/Register';
import AboutUs from './component/Aboutus';

import FlightTicket from './component/flightTicket';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import Book from "./component/book";
import Login from "./component/login";
function App(){
  return(
    <>
   
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/nav' element={<Navbar/>}></Route>
        <Route exact path='/FlightTicket' element={<FlightTicket/>}></Route>
                <Route exact path='/Login' element={<Login/>}></Route>
                <Route exact path='/register' element={<RegisterPage/>}></Route>
                <Route exact path='/Aboutus' element={<AboutUs/>}></Route>
                <Route exact path='/book' element={<Book/>}></Route>
        </Routes>
    </Router>
    </>
     
  )
}
export default App;
