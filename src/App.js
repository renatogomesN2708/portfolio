
import './App.css';
import Navbar from './component/Section/Navbar'
import Presentation from './component/Section/Presentation';
import Projects from './component/Section/Projects';
import Skills from './component/Section/Skills';
import Footer from './component/Section/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
