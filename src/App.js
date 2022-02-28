import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Principal from "./components/Principal";
import Episodios from "./components/Episodios";
import Personajes from "./components/Personajes";
import NavBar from "./components/NavBar";
import DetallePersonaje from "./components/DetallePersonaje"


const App =()=>{
  return (
    <div>
      <BrowserRouter>
      <NavBar/>

        <Routes>
          <Route path="/" element={<Principal/>}/>
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personajes/:idPersonaje" element={<DetallePersonaje/>} />
          <Route path="/episodios" element={<Episodios/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
