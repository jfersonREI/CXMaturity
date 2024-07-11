import App from "./App"; //TODO
import Questions from "./pages/Questions";
import ReportPage from "./pages/Report";


import {
    createBrowserRouter
  } from "react-router-dom";

import { routePaths } from "./index.const";


const router = createBrowserRouter([
    {
      path: routePaths.root,
      element: <App />,
    }, {
        path: routePaths.questions,
        element: <Questions />
    }, {
        path: routePaths.report,
        element: <ReportPage />
    }
  ]);

  export default router;
