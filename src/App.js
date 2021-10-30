import Tasks from './pages/Tasks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/tasks">
          <Tasks />
        </Route>
      </Switch>
    </Router>
  );
}
