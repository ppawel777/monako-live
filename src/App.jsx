import {useRef,useEffect,useState} from 'react';

import Editor from "@monaco-editor/react";

// import firebaseConfig from './firebaseConfig';
// import { initializeApp } from "firebase/app";

// import firebase from "firebase/app";
import {firebase} from "./firebase"
import {fromMonaco} from '@hackerrank/firepad';

function App() {
  // const app = initializeApp(firebaseConfig)
  const editorRef = useRef(null);
  const [editorLoaded, setEditorLoaded] = useState(false);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
    setEditorLoaded(true);
  }
console.log('firebase', firebase)
  useEffect(() => {
    // initializeApp(firebaseConfig)
    // if(!firebase.app.length){
    //   firebase.initializeApp(firebaseConfig);
    //   // initializeApp(firebaseConfig)
    // } 
    // else{
    //   firebase.app();
    // }
    // firebase.app()

  }, []);

  useEffect(() => {
    if(!editorLoaded){
      return;
    }

    const dbRef = firebase.database().ref().child(`pair001`);

    const firepad = fromMonaco(dbRef,editorRef.current);
    const name = prompt("Enter your Name :");
    firepad.setUserName(name);


  },[editorLoaded]);

  return (
    <div>
      <Editor
       height="90vh"
       defaultLanguage="javascript"
       theme="vs-dark"
       defaultValue="// Welcome to My Editor"
       onMount={handleEditorDidMount}
     />
    </div>
  );
}

export default App;