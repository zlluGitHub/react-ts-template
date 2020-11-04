import React from 'react';
// import { Route, Redirect, Switch } from 'react-router-dom';
// import { RoutesType } from './index'
// export const routerView = (routes: Array<RoutesType>, authed: boolean = false, authPath: string = '/login', extraProps = {}, switchProps = {}) => {
//     const renderRoute = routes.map((route: RoutesType, i: number) => {
//         return (
//             <Route
//                 key={route.key || i}
//                 path={route.path}
//                 exact={route.exact}
//                 strict={route.strict}
//                 render={(props) => {
//                     if (!route.requiresAuth || authed || route.path === authPath) {
//                         ;
//                         return <route.component {...props} {...extraProps} routes={route.children} />
//                     }
//                     return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
//                 }}
//             />)
//     });
//     return routes ? (
//         <Switch {...switchProps}>
//             { renderRoute}
//             <Redirect to='/404' />
//         </Switch>
//     ) : null
// };

