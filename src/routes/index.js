// Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

// Layout
import { HeaderOnly } from "~/components/Layout";


// router này không đăng nhập vẫn vào được
const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/following', component: Following
    },
    {
        path: '/profile', component: Profile
    },
    {
        path: '/upload', component: Upload, layout: HeaderOnly
    },
    {
        path: '/search', component: Search, layout: null
    }
]

// router này phải đăng nhập mới vào được
const privateRoutes = [

]

export { publicRoutes, privateRoutes }