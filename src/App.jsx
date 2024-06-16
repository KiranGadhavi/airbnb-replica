import './style.css'
import HeaderComponent from './components/HeaderComponent.jsx';
import MainComponent from './components/MainComponent';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent.jsx';

function App() {
  return (
    <>  
    <HeaderComponent className="fixed"></HeaderComponent>
    <NavComponent className="relative"></NavComponent>
    <MainComponent className="relative"></MainComponent>
    <FooterComponent className="relative"></FooterComponent>
    </>
  )
}

export default App
