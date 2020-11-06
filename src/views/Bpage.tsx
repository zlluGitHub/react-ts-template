import React from 'react';
interface IHelloProps {
    message?: string;
    name?: string;
    history: any;
}
// const Hello: React.FunctionComponent<IHelloProps> = (props) => {
const Bpage: React.FC<IHelloProps> = (props) => {
    // let id = props.match.params['id'];
    // console.log(props)
    const handleRouter = () => {
        props.history.push({
            pathname: '/i/a',
            search: '?some=search-string',
            state: {
                ['testState']: true
            }
        })//push是下一个，回退还能找到，类似于vue中的路由push
        //  console.log(props);
       
        // props.history.replace('/router/UCenet/50')//replace是替换，浏览器回退找不到
    }
    // props.children
    return (
        <div className="as">
            <h2>我是子页面B</h2>
            <button onClick={handleRouter}>返回页面A</button>
        </div>
    )
    // return <h2>{props.message}</h2>
}
Bpage.defaultProps = {
    message: "Hello World 2"
}

export default Bpage