import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CoursesPage from "../pages/CoursesPage";
import GroupsPage from "../pages/GroupsPage";
import HomePage from "../pages/HomePage";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    icon: "",
    component: HomePage,
    exact: true,
  },
  {
    name: "courses",
    path: "/courses",
    icon: "",
    component: CoursesPage,
    exact: true,
  },
  {
    name: "group",
    path: "/group",
    icon: "",
    component: GroupsPage,
    exact: false,
  },
  {
    name: "Admin",
    path: "/admin",
    icon: "",
    component: AdminPage,
    exact: false,
  },
  {
    name: "Sign up",
    path: "/signup",
    icon: "",
    component: AuthPage,
    exact: true,
  },
  {
    name: "Sign in",
    path: "/signin",
    icon: "",
    component: AuthPage,
    exact: true,
  },
];
