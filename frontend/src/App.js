import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//screens imports
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//components imports
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
      <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/products/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      {/*Home*/}
      {/*ProdcutScreen*/}
      {/*CartScreen*/}

    </Router>
  );
}

export default App;
