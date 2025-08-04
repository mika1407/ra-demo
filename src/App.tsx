import { Admin, Resource, EditGuesser } from 'react-admin';
import { Layout } from "./Layout";
import { dataProvider } from './dataProvider';
import PostList from './pages/posts/post-list';
import PostShow from './pages/posts/post-show';
import UserList from './pages/users/user-list';
import UserShow from './pages/users/user-show';

export const App = () => (
    <Admin layout={Layout} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} show={PostShow} />
        <Resource name="users" list={UserList} show={UserShow}/>
    </Admin>
);
