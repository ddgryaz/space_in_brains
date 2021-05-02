import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BRAIN_ROUTE,
    LOGIN_ROUTE,
    PORTAL_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    SIB_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth";
import Portal from "./pages/Portal";
import BrainPage from "./pages/BrainPage";
import Main from "./pages/main/Main";
import Profile from "./pages/Profile";

export const authRouters = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PORTAL_ROUTE,
        Component: Portal
    },
    {
        path: BRAIN_ROUTE + '/:id',
        Component: BrainPage
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: SIB_ROUTE,
        Component: Main
    },
]

export const publicRouters = [
    {
        path: SIB_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]