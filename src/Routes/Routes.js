import { createBrowserRouter } from "react-router-dom"
import Mainlayout from "../layout/Mainlayout";
import Blog from "../Pages/Blogs/Blog";
import Main from "../Pages/Main/Main";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            {
                path: '/',
                element: <Main />
            },
        ]
    }
    ,
    {
        path: `/project/:id`,
        element: <ProjectDetails />,
    },
    {
        path: '/blogs',
        element: <Blog />
    }
])

export default router;