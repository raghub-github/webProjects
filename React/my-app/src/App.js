// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="React" aboutReact="React.js" />
      <div className="container my-4">
        <TextForm heading="Enter the text to analyze below" />
        <hr />
        <About />
      </div>
    </>
  );
}

export default App;
