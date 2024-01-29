import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
// import { Education } from "./components/Education";
import { QualificationsAchievements } from './components/QualificationsAchievements';

import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
// import { TrainingandCertificates } from "./components/TrainingandCertificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <QualificationsAchievements />
      {/* <TrainingandCertificates /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
