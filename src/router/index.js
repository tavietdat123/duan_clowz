import Home from '../app/Page/Home';
import config from '../app/config';
import Introduction from '../app/Page/Introduction';
import Northside from '../app/Page/Northside';
import Login from '../app/Page/Login';
import SignIn from '../app/Page/SignIn';
import Cart from '../app/Page/Cart';
const publicRoute = [
    { path: config.routesConfig.home, component: Home },
    { path: config.routesConfig.introduction, component: Introduction },
    { path: config.routesConfig.Northside, component: Northside },
    { path: config.routesConfig.login, component: Login },
    { path: config.routesConfig.signin, component: SignIn },
    { path: config.routesConfig.cart, component: Cart },
];
const privateRoute = [];
export { publicRoute, privateRoute };
