import { Bounce, ToastContainer } from "react-toastify";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
