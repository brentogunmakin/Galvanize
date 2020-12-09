import Header from './header';
import ErrorLoadingPage from './ErrorLoadingPage.js';
import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';
import LoginPage from './LoginPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path = "/LoginPage">
          <LoginPage />
        </Route>

        <Route exact path="/searchPage">
          <SearchPage />
        </Route>

        <Route>
          <ErrorLoadingPage />
        </Route>
      </Switch>

      Footer
    </Router>
  );
}

export default App;
