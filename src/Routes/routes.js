import Marks from "../Pages/Stamps/Marks";
import Agreement from "../Pages/Agreed/Condtions";
import Home from "../Pages/Home/Home";
import StampsComponent from "../Pages/PresentStamps/StampsComponent";

export const routes = [
    {path:'/home', component: Home},
    {path:'/marks', component: Marks},
    {path:'/agreement', component: Agreement},
    {path:'/marks/:id', component: StampsComponent},
]