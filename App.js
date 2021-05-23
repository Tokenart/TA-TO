import Nav from "./components/Nav";
import MarketContainer from "./containers/MarketContainer";
import QuestionnaireContainer from "./containers/QuestionnaireContainer";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact component={MarketContainer} />
        <Route path="/questionnaire" exact component={QuestionnaireContainer} />
      </Switch>
    </>
  );
};

export default App;
