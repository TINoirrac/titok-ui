import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Following from "../pages/following/Following";
import Profile from "../pages/profile/Profile";
import Upload from "../pages/upload/Upload";
import DefaultLayout from "../layout/DefaultLayout";
import HeaderOnly from "../layout/HeaderOnly";
import Search from "../pages/search/Search";
import routesConfig from '../config/routes'

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];

const PublicRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        let Layout = DefaultLayout;
        if (route.layout) Layout = route.layout;
        else if (route.layout === null) Layout = Fragment;
        const Component = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          ></Route>
        );
      })}
    </Routes>
  );
};

const PrivateRoutes = () => {};

export { PublicRoutes, PrivateRoutes };
