import React from 'react';

import {
    Home,
    Contact,
} from "../../pages/route";


const routesConfig = [
    { path: "/", element: <Home/>},
    { path: "/contact", element: <Contact/>}
]


export default routesConfig;