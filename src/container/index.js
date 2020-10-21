import { lazy } from "react";

const Login = lazy(() => import("./Login"));
const SignUp = lazy(() => import("./SignUp"));

export { Login, SignUp };
