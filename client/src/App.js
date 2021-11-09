import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Items from "./components/Items";
import Item from "./components/Item";
import NewItem from "./components/NewItem";
import EditItem from "./components/EditItem";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="center">
      <Router>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/items" exact element={<Items />} />
            <Route path="/item/:id" exact element={<Item />} />
            <Route path="/new-item" exact element={<NewItem />} />
            <Route path="/edit-item/:id" exact element={<EditItem />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
