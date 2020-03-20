import React from 'react';
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./components/users";
import {PostCreate, PostEdit, PostList} from "./components/posts";
import authProvider from "./providers/authProvider";
import {
    FirebaseAuthProvider,
} from 'react-admin-firebase';
import GroupIcon from '@material-ui/icons/Group';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import {TodoCreate, TodoEdit, TodoList} from "./components/todos";
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {AlbumCreate, AlbumEdit, AlbumList} from "./components/albums";
import {PhotoCreate, PhotoEdit, PhotoList} from "./components/photos";
import {CommentEdit, CommentList,CommentCreate} from "./components/comments";

//connect the data provider to the REST endpoint

const config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxx"
};

const options = {
    // Use a different root document to set your resource collections, by default it uses the root collections of firestore
    // rootRef: 'root-collection/some-doc',
// Your own, previously initialized firebase app instance
//     app: firebaseAppInstance,
// Enable logging of react-admin-firebase
    logging: false,
// Resources to watch for realtime updates, will implicitly watch all resources by default, if not set.
//     watch: ['posts'],
// Resources you explicitly dont want realtime updates for
//     dontwatch: ['comments'],
}

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const firebaseAuthProvider = FirebaseAuthProvider(config,options)

function App() {
    return (
        <Admin dataProvider={dataProvider} authProvider={firebaseAuthProvider}>
            <Resource name="users" list={UserList} icon={GroupIcon}/>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostAddIcon}/>
            <Resource name="todos" list={TodoList} edit={TodoEdit} create={TodoCreate} icon={FormatListBulletedIcon}/>
            <Resource name="albums" list={AlbumList} edit={AlbumEdit} create={AlbumCreate} icon={PhotoAlbumIcon}/>
            <Resource name="photos" list={PhotoList} edit={PhotoEdit} create={PhotoCreate} icon={PhotoSizeSelectActualIcon}/>
            <Resource name="comments" list={CommentList} edit={CommentEdit} create={CommentCreate} icon={ChatBubbleIcon}/>
        </Admin>
    );
}

export default App;
