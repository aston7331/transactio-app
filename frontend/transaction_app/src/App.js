import Tables from "./component/table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TransactionPage from "./component/TransactionPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Tables} />
        <Route path="/TransactionPage" component={TransactionPage} />
      </Switch>
    </Router>
  );
}

export default App;
