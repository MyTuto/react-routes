import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import classes from "./App.module.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <header className={classes.navlink}>
        <NavLink activeClassName={classes.active} to="/welcome">
          Welcome
        </NavLink>
        <NavLink activeClassName={classes.active} to="/products">
          Products
        </NavLink>
      </header>
      <Switch>
        <Route path="/" exact>
            <Redirect to="/welcome"/>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
