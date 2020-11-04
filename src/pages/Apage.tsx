import React from 'react';
// import { request } from '../utils/request';
import RouterView from '../routes/RouterView'
// import RouterView from '../routes_copy/RouterView'
interface IHelloProps {
    routes: any[];
}
// console.log(request);

// const Hello: React.FunctionComponent<IHelloProps> = (props) => {
const Apage: React.FC<IHelloProps> = (props) => {
    const {routes} = props;
   
    
console.log(props,'asasasas');

    return (
        <React.Fragment>
            <h2>我是子页面A</h2>
            {/* <RouterView routes={routes} /> */}
            <RouterView routes={routes}/>
        </React.Fragment>
    )
    // return <h2>{props.message}</h2>
}
// Apage.defaultProps = {
//     message: "Hello World 2"
// }

export default Apage