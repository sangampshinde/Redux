
import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App


















// ================================================================================================================
// // install redux and react-redux with npm install
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;


// ========================================================================================
