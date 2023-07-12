import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Sensory from "./components/sensory.js";

function App() {
  return (
    <>
      <h1> Our Survey App </h1>
      <Navigation />
      <div>
        <Switch>
          <Route path="/sensory">
            <Sensory />
          </Route>
          {/* <Route path="/sample">
            <Sample />
          </Route>  */}
        </Switch>
      </div>
    </>
  );
}

export default App;
