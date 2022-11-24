import './App.css';
import CTA from './Components/Cta';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Skills/>
      <Projects />
      <CTA />
    </div>
  );
}

export default App;
