import React, { useState } from 'react';
import { menuConfig } from "../../config";
import classnames from "classnames";
import "./style.scss";
const User: React.FC = (props) => {
    const [index, setIndex] = useState(0);
    const handleRouter = (path: string, i: number): any => {
        console.log(path, i);
        setIndex(i);
    }
    const MenuElement = menuConfig.map(({ title, path }, i) => {
        return <li onClick={() => handleRouter(path, i)} className={classnames({ active: index === i })}><span>{title}</span> </li>
    })

    return (
        <div className="zk-user">
            <div className="zk-usr-icon">
              icon
            </div>
            <span>登录</span>
            <span>注册</span>
        </div>
    )
};
export default User