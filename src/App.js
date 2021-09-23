import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutLanding from './components/AboutLanding/AboutLanding';


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
          <AboutLanding />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
