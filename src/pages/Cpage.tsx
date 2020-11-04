import React from 'react';
import Hello from './Hello'
interface IHelloProps {
    message?: string;
    as?: string;
}
const chValue:string = 'sdfsdf'
// const Hello: React.FunctionComponent<IHelloProps> = (props) => {
const Cpage: React.FC<IHelloProps> = (props) => {
    // props.children
    return (
        <React.Fragment>
            <h2>页面C</h2>
            <div>
                 <h3>下面是子组件</h3>
                 <Hello message={chValue}/>
            </div>
           
        </React.Fragment>
    )
    // return <h2>{props.message}</h2>
}
Cpage.defaultProps = {
    message: "Hello World 2"
}

export default Cpage