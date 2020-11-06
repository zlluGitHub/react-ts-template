import React, { useState } from 'react';
import { menuConfig } from "../../config";
import classnames from "classnames"
import "./style.scss"
const Menu: React.FC = (props) => {
    // console.log(menuConfig,props)
    const [index, setIndex] = useState(0);
    const handleRouter = (path: string, i: number): any => {
        console.log(path, i);
        setIndex(i);
    }
    const MenuElement = menuConfig.map(({ title, path }, i) => {
        return <li onClick={() => handleRouter(path, i)} className={classnames({ active: index === i })}><span>{title}</span> </li>
    })

    return <ul className="zk-menu-warp"> {MenuElement}</ul>
};
export default Menu