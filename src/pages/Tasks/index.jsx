import { Route, Switch, useRouteMatch } from 'react-router-dom';

export default function Tasks() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={ path } >
        /tasks
      </Route>

      <Route path={ `${path}/add` } >
        /tasks/add
      </Route>
    </Switch>
  );
}
