import About from "../../pages/About";
import Contacts from "../../pages/Contacts";
import Home from "../../pages/Home";
import NotFound from '../../pages/NotFound'

const routes = [
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '*',
        element: <NotFound/>
    }

]

export default routes;