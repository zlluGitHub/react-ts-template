import React, { useState } from 'react';
import classnames from "classnames"
import "./style.scss"
export interface ImenuConfig {
    title: string;
    path: string;
    defaultIcon: string;
    actionIcon: string;
}

interface IMenuConfigType {
    menuConfig: Array<ImenuConfig>
}

const Menu: React.FC<IMenuConfigType> = (props) => {
    const { menuConfig } = props
    const [index, setIndex] = useState(0);
    const handleRouter = (path: string, i: number): any => {
        setIndex(i);
    }
    const MenuElement = menuConfig.map(({ title, path, defaultIcon, actionIcon }, i) => {
        return (
            <li onClick={() => handleRouter(path, i)} className={classnames({ active: index === i })}>
                <img src={index === i ? actionIcon : defaultIcon} />
                <span>{title}</span>
            </li>
        )
    })

    return <ul className="zk-menu-warp"> {MenuElement}</ul>
};
export default Menu