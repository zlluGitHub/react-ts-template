
export const baseURL: string = "";
export const production_url: string = "";
export const development_url: string = "";

interface ImenuConfig {
    title: string;
    path: string;
    icon: string;
}

export const menuConfig: Array<ImenuConfig> = [
    {
        title: "推荐",
        path: "智库",
        icon: "动态",
    },
    {
        title: "智库",
        path: "",
        icon: "动态",
    },
    {
        title: "动态",
        path: "智库",
        icon: "",
    },
    {
        title: "项目",
        path: "智库",
        icon: "动态",
    },
    {
        title: "报告",
        path: "智库",
        icon: "动态",
    },
];
