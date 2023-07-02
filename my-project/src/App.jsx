import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="font-custom">
      <Nav />
      <div className="Home flex items-center justify-center">
        <div className="flex-col items-center justify-center">
          <Home  />
          <About />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
