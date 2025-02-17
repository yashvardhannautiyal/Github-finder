import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
function App (){
  return(
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <HeroSection className="flex-grow" />
    <Footer /> 
    </div>
  )
}

export default App;