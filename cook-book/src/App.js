import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/homePage";
import NavBar from "./components/navBar";
import RecepiesPage from "./components/recepiesPage";
import DetailsPage from "./components/detailsPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/homepage" component={HomePage}></Route>
        <Route path="/Recepies/Recepie/:id" component={DetailsPage}></Route>
        <Route path="/Recepies/:category" component={RecepiesPage}></Route>
        <Redirect from="/" exact to="/homepage" />
      </Switch>
    </div>
  );
}

export default App;
