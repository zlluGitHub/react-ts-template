
import { bgNIcon, bgYIcon, zkNIcon, zkYIcon, dtNIcon, dtYIcon, xmNIcon, xmYIcon, tjNIcon, tjYIcon, cgNIcon, cgYIcon } from "./utils/icon";

export const baseURL: string = "";
export const production_url: string = "";
export const development_url: string = "";

export interface ImenuConfig {
    title: string;
    path: string;
    defaultIcon: string;
    actionIcon: string;
}

export const menuConfig: Array<ImenuConfig> = [
    {
        title: "推荐",
        path: "/",
        defaultIcon: tjNIcon,
        actionIcon: tjYIcon
    },
    {
        title: "智库",
        path: "",
        defaultIcon: zkNIcon,
        actionIcon: zkYIcon
    },
    {
        title: "动态",
        path: "智库",
        defaultIcon: dtNIcon,
        actionIcon: dtYIcon
    },
    {
        title: "项目",
        path: "智库",
        defaultIcon: xmNIcon,
        actionIcon: xmYIcon
    },
    {
        title: "报告",
        path: "智库",
        defaultIcon: bgNIcon,
        actionIcon: bgYIcon
    },
    {
        title: "成果",
        path: "智库",
        defaultIcon: cgNIcon,
        actionIcon: cgYIcon
    },
];
