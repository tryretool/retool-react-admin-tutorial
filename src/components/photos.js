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
    BooleanInput,
    UrlField
} from 'react-admin';
import CustomPhotos from "./CustomImage";

export const PhotoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="albumId" reference="albums"><TextField source="id" /></ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <CustomPhotos source="url" />
            <TextField source="thumbnailUrl" />
        </Datagrid>
    </List>
);

export const PhotoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="albumId" reference="albums"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="url" />
            <TextInput source="thumbnailUrl" />
        </SimpleForm>
    </Edit>
);

export const PhotoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="albumId" reference="albums"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="url" />
            <TextInput source="thumbnailUrl" />
        </SimpleForm>
    </Create>
);