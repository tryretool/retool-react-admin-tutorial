import React from 'react';
import {
    List,
    TextInput,
    SimpleForm,
    Edit,
    Create,
    ReferenceInput,
    SelectInput,
    Datagrid,
    ReferenceField,
    TextField,
    EmailField,
    EditButton,
    EditGuesser,
    BooleanField,
    BooleanInput
} from 'react-admin';

export const CommentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="postId" reference="posts"><TextField source="id" /></ReferenceField>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const CommentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="postId" reference="posts"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const CommentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="postId" reference="posts"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);