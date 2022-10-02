import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Inscription from './coursPrepa/Inscription'
import Accueil from "./Accueil";
import Candidature from "./inscription/Candidature";
function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={  <Accueil /> } />
     </Routes>
     <Routes>
      <Route path="/coursprepa" element={  <Inscription /> } />
     </Routes>
     <Routes>
      <Route path="/candidature" element={  <Candidature /> } />
     </Routes>
    </>
  );
}

export default App;
