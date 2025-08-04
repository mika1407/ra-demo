import { Datagrid, List, ReferenceField, TextField, FunctionField, useRecordContext, EditButton } from 'react-admin';

const PostPanel = () => {
    const record = useRecordContext();
    return <div>{record?.body}</div>
}

const PostList = () => (
    <List>
        <Datagrid 
            expand={<PostPanel />}
            sx={{
                '.RaDatagrid-headerCell': {
                    padding: '16px'
                }
            }}>       
            <TextField source="id" />
            <TextField  source="title" label="Post Title"/>
            <FunctionField label="Excerpt" render={(record) => `${record.body.substring(0, 50)}...`} />
            <ReferenceField source="userId" reference="users" />
            <EditButton />
        </Datagrid>
    </List>
);

export default PostList;