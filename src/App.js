import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
