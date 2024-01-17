//import logo from "./logo.svg";
import "./App.css";
import "./main.css";
import Business from "./components/Business";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header>{/* <SearchBar /> */}</Header>
      <Search />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
