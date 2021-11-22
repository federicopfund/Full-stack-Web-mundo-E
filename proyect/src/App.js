
import './App.scss';

import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./containers/Contact/Contact";
import Product from './components/Products/Product';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div >
     <Header />
     <Hero />
     <About />
     <Product />
     <Services />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
