import React from 'react';
// 路由组件分为 BrowserRouter （history 模式） 和 HashRouter（哈希模式）
// history 模式，路径没有#号，但是需要后台配置；
// 哈希模式跳转有#号；
import { HashRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import Apage from './Apage'
import Bpage from './Bpage'
import Cpage from './Cpage'
import Error from './Error';
interface IHelloProps {
    message?: string;
    as?: string;
}
const RouteIndex: React.FC<IHelloProps> = (props) => {
    // console.log(props)
    return (
        <div className="content">
            {/* <button onClick={()=>{props.history.push(`/home`);}}>跳转到页面A</button> */}
            {/* basename的作用是增加一级导航目录 */}
            <Router basename="demo">
                <div>
                    <Link to="/home">pageA</Link>
                    <NavLink to="/about/21/sds">pageB</NavLink>
                    <NavLink to="/pa3" activeClassName='active'>pageC</NavLink>
                    {/* Switch只显示一个路由页面及不匹配显示404页面匹配规则 */}
                    <Switch>
                        {/* exact 精准匹配; strict 完全匹配 */}
                        <Route exact path="/home" component={Apage}></Route>

                        <Route path="/about/:id/:name" component={Bpage}></Route>
                        {/* {非必须写法} */}
                        {/* <Route path='/about/?:id' component={Bpage} /> */}
                        {/* {多参数写法} */}
                        {/* <Route path='/about/?:id/:name' component={Bpage} /> */}

                        <Route path="/pa3" component={Cpage}></Route>

                        <Redirect from="/111" to="/pa3" />  重定向

                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default RouteIndex;
