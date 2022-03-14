import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NavLinks from './components/NavLinks'
import NotFound from './components/NotFound'
import Posts from './components/Posts'

export default function App() {
    return (
        <div className="container">
            <h1 className="text-center">React Router DOM</h1>
            <NavLinks />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}
