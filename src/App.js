import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Inscription from './coursPrepa/Inscription'
function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/coursprepa" element={  <Inscription /> } />
     </Routes>
     <div style={{marginBottom:'20px'}}>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
        <Routes>
          <Route path="/candidature" element={  <LinearStepper /> } />
        </Routes>
        </Paper>
      </Container>
      </div>
    </>
  );
}

export default App;
