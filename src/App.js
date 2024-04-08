import logo from './logo.svg';
import './App.css';
import AddRecipe from './Components/AddRecipe';
import SearchRecipe from './Components/SearchRecipe';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<ViewAll/>}/>
    <Route path='/m' element={<AddRecipe/>}/>
    <Route path='/s' element={<SearchRecipe/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
