import React, { useState, useEffect, createContext } from 'react'
import { Link, NavLink, Switch, useHistory, useLocation,Redirect, useRouteMatch, useParams } from 'react-router-dom'
import { Layout, Menu } from 'antd';
// import { RouterView } from '../../routes/RouterView'
import RouterView from '../../routes/RouterView'
// import RouterView from '../../routes_copy/RouterView'
// import routerConfig from '../../routes/index'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

// import './index.scss';
const { Header, Sider, Content } = Layout;
// const { routers } = routerConfig;
interface IMenuType {
    key: string | number;
}
interface IPropsType {
    history?: any;
    routes?: any;
}

interface IContextType {
    index: string;
    onSelect?: (selectedIndex: string) => void;
}


export let MenuContext: any



const LayoutContent: React.FC<IPropsType> = (props) => {
    console.log(props,'ssssssssssss')
    const { routes } = props;

    const [select, setSelect] = useState('等待子组件传值...');

    const onSelect = (arg: string) => {
        console.log(arg);
        setSelect(arg)
    }

    MenuContext = createContext<IContextType>({ index: '0', onSelect: onSelect })





    const [collapsed, setCollapsed] = useState(true);
    // useEffect(() => {
    //     document.title = `点击了${like}次`
    // })
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    const history = useHistory();
    const handleClick = (arg: IMenuType): void => {
        history.push(arg.key.toString())
        // props.history.push(`/home`);
    }
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" >  </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClick}>
                    <Menu.Item key="/i/a" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="/i/b" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="/login" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <div>{select}</div>
                    <Link to="/">pageA</Link>
                    <NavLink to="/b/sa/s">pageB</NavLink>
                    <NavLink to="/c" activeClassName='active'>pageC</NavLink>
                    <span>我是内容首页</span>
                    <RouterView routes={routes}/>
                    {/* {RouterView(routes)} */}
                </Content>
            </Layout>
        </Layout>
    )
}
export default LayoutContent