import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import AllArtCraft from "../Pages/AllArtCraft";
import AddCraft from "../Pages/AddCraft";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Components/NotFound";
import CraftsDetails from "../Pages/CraftsDetails";
import UpdateCraft from "../Pages/UpdateCraft";
import SubCategoryDetails from "../Pages/SubCategoryDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b9a10-craftopia-server.vercel.app/subcategory')
            },
            {
                path: '/allartcraft',
                element: <AllArtCraft></AllArtCraft>,
                loader: () => fetch('https://b9a10-craftopia-server.vercel.app/allartcraft')
            },
            {
                path: "/allartcraft/:_id",
                element: <CraftsDetails></CraftsDetails>,
                loader: ({ params }) => fetch('https://b9a10-craftopia-server.vercel.app/allartcraft')
                    .then(response => response.json())
                    .then(data => data.find(pro => pro._id === (params._id)))
            },
            {
                path: "/:subCat",
                element: <SubCategoryDetails></SubCategoryDetails>,
                loader: ({ params }) => fetch('https://b9a10-craftopia-server.vercel.app/allartcraft')
                    .then(response => response.json())
                    .then(data => data.find(pro => pro.subCat === (params.subCat)))
            },

            {
                path: '/addcraft',
                element: <AddCraft></AddCraft>,
            },
            {
                path: '/mylist',
                element: <MyList></MyList>,
            },
            {
                path: "/mylist/:_id",
                element: <UpdateCraft></UpdateCraft>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },

        ]
    }
]);

export default routes;