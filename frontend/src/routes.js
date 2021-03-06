import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE, ALL_BRAINS_ROUTE,
    BRAIN_ROUTE, CHAT, CHANGELOG,
    LOGIN_ROUTE,
    PORTAL_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    SIB_ROUTE, MOSTPOPULAR
} from "./utils/consts";
import Auth from "./pages/Auth";
import Portal from "./pages/Portal";
import BrainPage from "./pages/BrainPage";
import Main from "./pages/main/Main";
import Profile from "./pages/Profile";
import AllBrains from "./pages/AllBrains";
import Chat from "./pages/chat/Chat";
import Changelog from "./pages/changelog/changelog";
import PopularityBrains from "./pages/PopularityBrains";


export const authRouters = [
    {
        path: ALL_BRAINS_ROUTE,
        Component: AllBrains
    },
    {
        path: PORTAL_ROUTE,
        Component: Portal
    },
    {
        path: MOSTPOPULAR,
        Component: PopularityBrains
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
    {
        path: CHAT,
        Component: Chat
    },
]

export const publicRouters = [
    {
        path: SIB_ROUTE,
        Component: Main
    },
    {
        path: CHANGELOG,
        Component: Changelog
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

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]