import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout, HeaderOnly } from "./components/Layout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((router, index) => {
            // Fragment nó không có sinh ra cái thẻ thật ở trong dom
            const Page = router.component;
            let Layout = DefaultLayout;

            if (router.layout) {
              Layout = router.layout;
            } else if (router.layout === null) {
              Layout = Fragment;
            }

            return <Route key={index} path={router.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
