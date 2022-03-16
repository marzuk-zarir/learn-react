import { Outlet } from 'react-router-dom'
import PostsNav from './PostsNav'

export default function Posts() {
    return (
        <>
            <h1>All posts</h1>
            <PostsNav />
            <Outlet />
        </>
    )
}
