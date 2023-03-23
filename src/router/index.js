import Home from '../app/Page/Home';
import config from '../app/config';
import Introduction from '../app/Page/Introduction';
import Northside from '../app/Page/Northside';
import Login from '../app/Page/Login';
import SignIn from '../app/Page/SignIn';
import Cart from '../app/Page/Cart';
import Contact from '../app/Page/Contact';
import Blog from '../app/Page/Blog';
import Product from '../app/Page/Product';
const publicRoute = [
    { path: config.routesConfig.home, component: Home },
    { path: config.routesConfig.introduction, component: Introduction },
    { path: config.routesConfig.Northside, component: Northside },
    { path: config.routesConfig.login, component: Login },
    { path: config.routesConfig.signin, component: SignIn },
    { path: config.routesConfig.cart, component: Cart },
    { path: config.routesConfig.contact, component: Contact },
    { path: config.routesConfig.blog, component: Blog },
    { path: config.routesConfig.product, component: Product },
];
const privateRoute = [];
export { publicRoute, privateRoute };
