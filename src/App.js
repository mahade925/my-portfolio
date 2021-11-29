import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Banner from './Pages/Home/Banner/Banner';
import About from './Pages/Home/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Banner></Banner>
        <About></About>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
