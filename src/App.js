import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
// co file index cua thu muc layout export
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.Component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                            //console.log(111);
                            // khi 1 bien khong duoc dinh nghia thi no la undefined
                        } else if (route.layout === null) {
                            Layout = Fragment;
                            //console.log(222);
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
