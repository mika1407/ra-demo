import { Datagrid, List, ReferenceField, TextField, FunctionField } from 'react-admin';

const PostList = () => (
    <List>
        <Datagrid>
        {/* <DataTable>
            <DataTable.Col source="userId">
            </DataTable.Col> */}
            {/* <DataTable.Col source="id" />
            <DataTable.Col source="title" />
            <DataTable.Col source="body" /> */}

            <TextField source="id" />
            <TextField  source="title" label="Post Title"/>
            <FunctionField label="Excerpt" render={(record) => `${record.body.substring(0, 50)}...`} />
            <ReferenceField source="userId" reference="users" />

        {/* </DataTable> */}
        </Datagrid>
    </List>
);

export default PostList;