import {Routes, Route, Navigate} from "react-router-dom";

import {Layout} from "./components";
import {
    NotFoundPage, PhotosPage,
    PostCommentsPage,
    PostDetailPage,
    PostsPage, UserAlbumsPage,
    UserDetailPage,
    UserPostsPage,
    UsersPage
} from "./pages";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UsersPage/>}>

                        <Route path={':id'} element={<UserDetailPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<UserAlbumsPage/>}>
                            <Route path={`:albumId/photos`} element={<PhotosPage/>}/>
                        </Route>

                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;