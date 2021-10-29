import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <main className="Container">
        <Section />
        <Section />
        <Section />
      </main>
      <Footer />
    </>
  );
}

export default App;
