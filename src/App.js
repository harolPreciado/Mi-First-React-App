//import logo from './logo.svg';
//import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ListaPeliculas from './components/ListaPeliculas';
import Error404 from './components/Error404';

import PeliculasHooks from './components/PeliculasHooks';
import PeliculasHooks2 from './components/PeliculasHooks2';

import CountriesList from './components/CountriesList';

import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
          <Link to="/" exact="true">Home</Link> <br/>
          <Link to="/about" exact="true">About</Link> <br/>
          <Link to="/contact" exact="true">Contact</Link> <br/>
          <Link to="/no-existe" exact="true">No existe</Link> <br/>
          <Link to="/listapeliculas/1" exact="true">Lista de peliculas</Link> <br/>
          <Link to="/peliculashook" exact="true">Peliculas Hook 1</Link> <br/>
          <Link to="/peliculashook2" exact="true">Peliculas Hook 2</Link> <br/>
          <Link to="/countrieslist" exact="true">Lista de Paises</Link> <br/>
          <hr/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/listapeliculas/:id" element={<ListaPeliculas/>} />
            <Route path="/peliculashook" element={<PeliculasHooks/>}/>
            <Route path="/peliculashook2" element={<PeliculasHooks2/>}/>
            <Route path="/countrieslist" element={<CountriesList/>}/>
            <Route path="*" element={<Error404/>} />
          </Routes>
    </div>
  );
}

export default App;
