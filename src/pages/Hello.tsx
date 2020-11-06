import React,{useContext} from 'react';
// import {MenuContext} from '../components/Layout/index'
interface IHelloProps {
    message?: string;
    as?: string;
}  
let num:number = 1;
// const Hello: React.FunctionComponent<IHelloProps> = (props) => {
const Hello: React.FC<IHelloProps> = (props) => {
    // props.children
    // console.log(props);
    // const context:any = useContext(props)
    // console.log(context.index);
    //  const onSelect:any = context
   
    const handleHello=()=>{
        // onSelect(num++)
    }
    return (
        <div>
            {/* <h2>我是子组件{props.message}</h2> */}
            <button onClick={handleHello}>向页面c传递（你好）</button>
        </div>
    )
}
Hello.defaultProps = {
    message: "Hello World 2"
}

export default Hello