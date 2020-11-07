import React, { useState, useEffect, createContext } from 'react'
import { Link, NavLink, Switch, useHistory, useLocation, Redirect, useRouteMatch, useParams } from 'react-router-dom'
import { Layout } from 'antd';
import "./style.scss"
// import { RouterView } from '../../routes/RouterView'
import { menuConfig } from "../../config"
import RouterView from "../../routes/RouterView"
import Menu from "../../components/Menu"
import User from "../../components/User"
import Headers from "../../components/Header"
// import RouterView from '../../routes_copy/RouterView'
// import routerConfig from '../../routes/index'
// import A from '@/views/pageA'
// import {
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
// } from '@ant-design/icons';

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
    console.log(props, 'ssssssssssss')
    const { routes } = props;

    const [select, setSelect] = useState('等待子组件传值...');

    const onSelect = (arg: string) => {
        console.log(arg);
        setSelect(arg)
    }

    MenuContext = createContext<IContextType>({ index: '0', onSelect: onSelect })

    const [collapsed, setCollapsed] = useState(false);
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
        <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed} width="350" className="zk-right-sider">
                侧栏
            </Sider>
            <Layout className="zk-layout">
                <Header className="zk-header">
                    <Headers />
                </Header>
                <Content className="zk-content">
                    <RouterView routes={routes} />
                </Content>
            </Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} width="70" className="zk-right-sider">
                <User  />
                <Menu menuConfig={menuConfig}/>
            </Sider>
        </Layout>
    )
}
export default LayoutContent