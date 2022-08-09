import logo from './logo.svg';
import './App.css';
import './style.css';
import Header from './Component/Header/Header'
import Footer from './Component/Header/Footer'
import Home from './Component/MainComponent/Home'
import About from './Component/MainComponent/About'
import Contact from './Component/MainComponent/Contact'
import Service from './Component/MainComponent/Service'
import Hire from './Component/MainComponent/Hire'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
       <BrowserRouter>
       <Header />
          <Routes>
               <Route path='/' element = {<Home />} />
               <Route path='/About' element = {<About />} />
               <Route path='/Contact' element = {<Contact />} />
               <Route path='/Service' element = {<Service />} />
               <Route path='/Hire' element = {<Hire />} />
               
            

          </Routes>
       
       <Footer />
       </BrowserRouter>
  );
}

export default App;
