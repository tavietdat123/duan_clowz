import Home from "../app/Page/Home"; 
import routesConfig from "../app/config/router";
const publicRoute = [
    {
        path:routesConfig.home , component: Home 
    }
]
const privateRoute =[]
export {publicRoute,privateRoute}