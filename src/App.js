import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from './router/index';
import Layout from './app/Layout/layout';
function App() {
    return (
        <Router>
            <Routes>
                {publicRoute.map((el, index) => {
                    const Element = el.component;
                    return (
                        <Route
                            key={index}
                            path={el.path}
                            element={
                                <Layout path={el.path}>
                                    <Element />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
