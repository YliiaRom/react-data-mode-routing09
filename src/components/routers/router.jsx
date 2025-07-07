import { createBrowserRouter, Link } from "react-router";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import ErrorPage from "../pages/ErrorPage";
import { Component, lazy, Suspense } from "react";
import OtherLayout from "../layouts/OtherLayout";

const SuspenseSiteLoader = lazy(() => import("../pages/site/SiteLoader"));
const LazyAbout = lazy(() => import("../pages/About"));
const LazyContacts = lazy(() => import("../pages/Contacts"));

const LazySiteLayout = lazy(() => import("../layouts/SiteLayout"));
const LazySiteHome = lazy(() => import("../pages/site/SiteHome"));
const LazySiteAbout = lazy(() => import("../pages/site/SiteAbout"));

import apiRouter from "../../api/apiRouter.js";
import SiteNavigationStateLoading from "../pages/site/SiteNavigationStateLoading.jsx";
import SiteAction from "../pages/site/SiteAction.jsx";
import addTeacherAction from "../actions/addTeachersAction.js";
import SiteMatches from "../pages/site/SiteMatches.jsx";
import MainMenu from "../layouts/MainMenu.jsx";
import SiteMainMenu from "../pages/site/SiteMainMenu.jsx";
async function getData() {
  try {
    const res = await fetch(apiRouter.getAllTeachers);
    console.log(res);
    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export const routes = [
  {
    Component: MainLayout,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        Component: LazyAbout,
        path: "/about",
      },
      {
        path: "*",
        Component: Page404,
      },
    ],
  },
  {
    Component: OtherLayout,
    path: "/other",
    errorElement: <ErrorPage />,
    children: [
      {
        Component: LazyContacts,
        path: "contacts",
      },
    ],
  },
  {
    Component: LazySiteLayout,
    path: "/site",
    handle: {
      crumb: () => <Link to="/site"> 📁MainPage</Link>,
      title: "MainPage",
      svg: "📁",
    },
    children: [
      {
        Component: LazySiteHome,
        index: true,
      },
      {
        element: (
          <Suspense fallback={<p>Завантаження About...</p>}>
            <LazySiteAbout />
          </Suspense>
        ),
        path: "about",
        handle: {
          crumb: () => <Link to="about">About</Link>,
          title: "about",
          svg: "😍",
        },
      },
      {
        element: <SuspenseSiteLoader />,
        path: "loader",
        loader: getData,
        handle: {
          crumb: () => <Link to="/site/loader">lazy&Suspense</Link>,
          title: "lazy&Suspense",
          svg: "⬇️",
        },
      },
      {
        element: <SiteNavigationStateLoading />,
        path: "state-loading",
        loader: getData,
        handle: {
          crumb: <Link to="/site/state-loading">loading</Link>,
          title: "useLoaderData",
          svg: "🔄",
        },
      },
      {
        element: <SiteAction />,
        path: "actionAdd-post",
        action: addTeacherAction,
        handle: {
          crumb: () => <Link to="/site/actionAdd-post">Action</Link>,
          title: "Action",
          svg: "📄",
        },
      },
      {
        element: <SiteMatches />,
        path: "bread-crumbs",
        handle: {
          crumb: () => <Link to="/site/bread-crumbs"> 📄Matches</Link>,
          title: "Matches",
          svg: "📄",
        },
      },
      {
        element: <SiteMainMenu />,
        path: "main-menu",
        handle: {
          crumb: () => <Link to="/site/main-menu"> 📄MainMenu</Link>,
          title: "MainMenu",
          svg: "📄",
        },
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
