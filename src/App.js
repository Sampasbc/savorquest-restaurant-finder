//import logo from "./logo.svg";
import "./App.css";
import "./main.css";
import Business from "./components/Business";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header>{/* <SearchBar /> */}</Header>
      <Business />
    </div>
  );
}

export default App;
