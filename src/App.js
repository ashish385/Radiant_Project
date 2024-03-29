import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="bg-[#FBFCFD]">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
