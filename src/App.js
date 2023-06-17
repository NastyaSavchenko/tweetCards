// import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./Pages/Home/Home";
import { Tweets } from "./Pages/Tweets/Tweets";

// const { Home } = lazy(() => import("../Pages/Home/Home"));
// const { Tweets } = lazy(() => import("../Pages/Tweets/Tweets"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
