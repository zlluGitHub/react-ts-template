import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IRoutesType, routerConfig } from './RouterConfig';

interface IPropsType {
    exact?: boolean;
    routes: Array<IRoutesType>;
}

export const RouterView: React.FC<IPropsType> = (props) => {
    const { routes, exact } = props;
    if (routes) {
        let routePathArr: string[] = [];
        const recursivePath = (routesArr: Array<IRoutesType>): void => {
            routesArr.forEach(item => {
                routePathArr.push(item.path)
                if (item.children) {
                    recursivePath(item.children)
                }
            })
        }
        recursivePath(routerConfig.routes)
        const RenderRoute: Element[] | any = routes.map((route: IRoutesType,i:number) => {
            return (
                <Route key={i} exact={exact} path={route.path} render={(props) => {
                    if (routePathArr.indexOf(props.location.pathname) <= -1) {
                        return <Redirect exact={exact} from="/*" to="/404" />
                    }
                    // 用户权限判断
                    if (!route.auth) {
                        return <route.component {...props} routes={route.children} />
                    }
                    return <Redirect exact={exact} from="/*" to="/login" />
                }} />)
        });

        return RenderRoute;
    } else {
        return null;
    }
};

export default RouterView