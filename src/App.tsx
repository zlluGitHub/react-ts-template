import React, { FC } from 'react';
import { BrowserRouter, HashRouter, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import RouterView from './routes/RouterView';
import routerConfig from './routes/RouterConfig';

const App: FC = () => {
  const { routes, basename, mode } = routerConfig;
  const exact: boolean = true;
  const RouterWarp: Function = mode && mode === 'history' ? BrowserRouter : HashRouter
  return (
    <React.Fragment>
      <div className="App">
        <RouterWarp basename={basename}>
          <Switch>
            <RouterView routes={routes} exact={exact} />
          </Switch>
        </RouterWarp>
      </div>
    </React.Fragment>
  );
}

export default App;
