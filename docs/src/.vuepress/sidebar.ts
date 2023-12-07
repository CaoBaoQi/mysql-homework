import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "Book",
            icon: "/book.svg",
            prefix: "book/",
            link: "book/",
            children: "structure",
        },
        {
            text: "PROJECT",
            icon: "/project.svg",
            prefix: "project/",
            link: "project/",
            children: "structure",
        },
        {
            text: "UPDATE ",
            icon: "/update.svg",
            link: "CHANGELOG.md",
        },
        {
            text: "DEMO ",
            icon: "/demo.svg",
            link: "DEMO.md",
        }
    ],
});
