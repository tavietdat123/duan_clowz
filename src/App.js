import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {publicRoute} from "./router/index"
import Layout from './app/Layout/layout'
function App() {
    return ( <Router>

        <Routes>
        {publicRoute.map(el=>{
            const Element = el.component
            return <Route path={publicRoute.path} element={<Layout>
                <Element/>
        </Layout>} />})}
        </Routes>
    </Router> );
}

export default App;