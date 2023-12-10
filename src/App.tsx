import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Landing from './pages/Landing';
import Navbar from './pages/Navbar';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-gray-100">
        <Landing />
        <About />
        <div className="bg-black h-[2px] w-full"></div>
        <Contact />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default App;
