import { createBrowserRouter } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import Mainlayout from "../layout/Mainlayout";
import Main from "../Pages/Main/Main";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/#projects',
                element: <Projects />
            }
        ]
    }
    ,
    {
        path: `/project/:id`,
        element: <ProjectDetails></ProjectDetails>,
        loader: () => fetch('projectDetails.json')
    }
])

export default router;