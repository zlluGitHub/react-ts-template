import React from 'react';
interface IHelloProps {
    message?: string;
    as?: string;
}
// const Hello: React.FunctionComponent<IHelloProps> = (props) => {
const Error: React.FC<IHelloProps> = (props) => {
    // props.children
    return <h2>404页面</h2>
    // return <h2>{props.message}</h2>
}
Error.defaultProps = {
    message: "Hello World 2"
}

export default Error