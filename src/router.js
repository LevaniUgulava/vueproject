import { createWebHistory, createRouter } from "vue-router";
import Homepage from "./pages/Home";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import FacebookPageComponent from "./pages/facebook";
import SingleViewPage from "./pages/single";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/facebook",
    name: "facebook",
    component: FacebookPageComponent,
  },
  {
    path: "/display/:id",
    name: "displatbyid",
    component: SingleViewPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
