import Header from "./components/Header/Header";
import NavBar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Experience from "./components/Experience/Experience";
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import About from "./components/About/About";
import Footer from './components/Footer/Footer';


const App = () => {
    return (
        <>
            <Header />
            <NavBar />
            <About />
            <Experience />
            <Services />
            <Testimonials />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
