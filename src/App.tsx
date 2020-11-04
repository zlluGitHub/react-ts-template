import React, { FC } from 'react';
import { BrowserRouter, HashRouter, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import RouterView from './routes/RouterView';
import routerConfig from './routes/RouterConfig';

const { routes, basename, mode } = routerConfig;
const App: FC = () => {
  const RouterWarp: Function = mode && mode === 'history' ? BrowserRouter : HashRouter
  return (
    <React.Fragment>
      <div className="App">
        <RouterWarp basename={basename}>
          <Switch>
            {/* {RouterView(routes)} */}
            <RouterView routes={routes}/>
          </Switch>
        </RouterWarp>
      </div>
    </React.Fragment>
  );
}

export default App;
