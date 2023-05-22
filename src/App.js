import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  NavBar,
  Banner,
  Skills,
  Projects,
  Achievements,
  Certifications,
  Papers,
  HireMe,
  Contact
} from './components';
function App() {
  return (
    <div className="app-background">
      <NavBar />
      <Banner />
      <Achievements />
      <Projects />
      <Skills />
      <Certifications />
      <Papers />
      <HireMe />
      <Contact />
    </div>
  );
}

export default App;
