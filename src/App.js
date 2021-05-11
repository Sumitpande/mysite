
import './App.css';
import Me from "./components/me";
import Project from './components/Project';
import Nav from './components/Nav';
import Footer from './components/foter';
import Tech from './components/tech'

function App() {
  return (
    <div className="App">
      <Nav />
      

       
      <Me />
      <Project id='project' />
      <Tech />
      <Footer />
      
      
        
      
      
      
    </div>
  );
}

export default App;
