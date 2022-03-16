import { Navigate, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NavLinks from './components/NavLinks'
import NotFound from './components/NotFound'
import Posts from './components/Posts'
import Dashboard from './components/private/Dashboard'
import PrivateOutlet from './components/private/PrivateOutlet'
import PrivateRoute from './components/private/PrivateRoute'
import Service from './components/Service'
import SinglePost from './components/SinglePost'

/**
 * ? React Router DOM V6
 * * For use react router we should wrap whole <App> with <BrowserRouter>
 * * In react router v6 it match a single most exact route inside <Routes>. So, route order doesn't matter
 * * When user hit a route it return component inside element prop's
 *
 * ? Redirect
 * * <Navigate to={redirect_path} /> redirect to its path. It should placed in element prop of <Route>
 *
 * ? Programmatically Redirect
 * * useNavigate() give a function for navigate inside code
 *
 * ? Link & NavLink
 * * <Link> is used for navigate routes. It is specialized <a>
 * * <NavLink> same as <Link> but it contains a render prop inside className prop which receive a obj{isActive: Boolean} in parameter. By default it add .active class when this route is active
 *
 * ? Params & useParams()
 * * For declare a parameter in react we can use /:param_name in path prop
 * * We can grab passed parameter object with useParams() hook in immediate <Child>
 *
 * ? Nested Route
 * * Inside <Route> we can pass another <Route path={relative}> which take a element and render in his parent <Outlet> placeholder
 *
 */

export default function App() {
    return (
        <div className="container">
            <h1 className="text-center">React Router DOM</h1>
            <NavLinks />
            <Routes>
                {/* ? Redirect */}
                <Route path="/" element={<Navigate to="/home" />}></Route>
                {/* ? Simple Route */}
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* ? Single most exact match */}
                {/* * Declare before with param. But still doesn't match when pass one param. But isActive = true 🤯🤯  */}
                <Route path="/service/*" element={<Service />} />{' '}
                <Route path="/service/:name" element={<Service />} />
                {/* ? Nested routes */}
                {/* * Child route's element will render in parent route's element's <Outlet> placeholder */}
                <Route path="/posts" element={<Posts />}>
                    <Route path=":postId" element={<SinglePost />} />
                </Route>
                {/* ? Not found */}
                <Route path="*" element={<NotFound />}></Route>
                {/*  */}
                {/*  */}
                {/* Make a private route */}
                {/* Way 1 */}
                <Route
                    path="dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                ></Route>
                {/* way 2: better approach */}
                <Route path="admin" element={<PrivateOutlet />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </div>
    )
}
