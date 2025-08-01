import { Admin, Resource, EditGuesser, ShowGuesser } from 'react-admin';
import { Layout } from "./Layout";
import { dataProvider } from './dataProvider';
import PostList from './pages/posts/post-list';
import UserList from './pages/users/user-list';

export const App = () => (
    <Admin layout={Layout} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
        <Resource name="users" list={UserList} />
    </Admin>
);
