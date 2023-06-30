import "./App.css";
import Navbar from "./Navbar";
import Shop from "./Shop";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Shop />
      </div>
    </div>
  );
}
