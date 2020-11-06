import React from 'react';
// import { request } from '../utils/request';
import RouterView from '../routes/RouterView'
// import RouterView from '../routes_copy/RouterView'
import Send from "../components/Sider/send"
import Receive from "../components/Sider/receive"
interface IHelloProps {
    routes: any[];
}
// console.log(request);

// const Hello: React.FunctionComponent<IHelloProps> = (props) => {
const Apage: React.FC<IHelloProps> = (props) => {
    const { routes } = props;


    console.log(props, 'asasasas');

    return (
        <React.Fragment>
            <h2>我是A页面</h2>
        </React.Fragment>
    )

}
export default Apage