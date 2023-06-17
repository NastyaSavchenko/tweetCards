import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./Layout/Layout";

const Home = lazy(() => import("../Pages/Home/Home"));
const Tweets = lazy(() => import("../Pages/Tweets/Tweets"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
