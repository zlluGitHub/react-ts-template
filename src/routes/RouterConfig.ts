
import loadable from '../utils/loadable';//懒加载

const Layout = loadable(() => import('../views/Layout'));
const Apage = loadable(() => import('../views/Apage'));
const Bpage = loadable(() => import('../views/Bpage'));
// const Cpage = loadable(() => import('../pages/Cpage'));
const Error = loadable(() => import('../pages/Error'));
const Login = loadable(() => import('../pages/Login'));

declare type ReactNode = () => React.ReactNode;

export interface IRoutesType {
    path: string;
    name: string;
    component: ReactNode | any;
    auth?: boolean; //需要登陆后才能跳转的页面
    exact?: boolean; //精确匹配
    children?: Array<IRoutesType> | any;
}
export interface IConfigType {
    basename?: string;
    mode?: string;
    routes: Array<IRoutesType>;
}
export const routerConfig: IConfigType = {
    // mode: 'history',
    basename: '',
    routes: [
        {
            path: "/login",
            name: "登录页面",
            component: Login
        },
        {
            path: "/",
            name: "a页面",
            component: Layout,
            // auth: true, //需要登陆后才能跳转的页面
            children: [
                {
                    path: "/404",
                    name: "404页面",
                    component: Error,
                },
                {
                    path: "/",
                    name: "aa页面",
                    component: Apage

                },
                {
                    path: "/b",
                    name: "a页面",
                    component: Bpage
                },
                // {
                //     path: "/l/c",
                //     name:"a页面",
                //     component: Cpage
                // },
                // {
                //     path: "/l/d",
                //     name:"a页面",
                //     component: Apage,
                //     children: [
                //         {
                //             path: "/",
                //             name:"a页面",
                //             component: Bpage
                //         },
                //         {
                //             path: "/l/a/c",
                //             name:"a页面",
                //             component: Cpage
                //         }
                //     ]
                // }

            ]
        },

        // {
        //     path: "/c/:id/:name",
        //     name: "a页面",
        //     component: Cpage
        // }

    ]

}

export default routerConfig