import { renderRoutes, RouteConfig } from 'react-router-config';
import { Student } from '../content/student';
import { Students } from '../content/students';


const routesConfig: RouteConfig[] = [
    {
        path: "/",
        component: Students,
        exact: true,
    },
    {
        path: "/new",
        component: Student,
        exact: true,
    },
    {
        path: "/edit/:id",
        component: Student,
        exact: true,
    }
];

export const Content = renderRoutes(routesConfig);