import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjsToHtml from "draftjs-to-html";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const WriteBox = styled.div`
  width: 767px;
  height: 713px;
  margin-bottom : 10%;
  border: 1px solid green;
`;

export default function WritingStory() {
  const [form, setForm] = useState({});
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [htmlString, setHtmlString] = useState("");

  const updateTextDescription = async (state) => {
    await setEditorState(state);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlString(html);
  };
  const uploadCallback = () => {
    console.log('이미지 업로드');
  };

  const onChangeContent = (editorState) => {
    setEditorState(editorState);
    const content = convertToRaw(editorState.getCurrentContent());
    setForm({
      ...form,
      content: content,
    });
  };

  return (
    <div>
    <WriteBox>
      <Editor
        editorState={editorState}
        onEditorStateChange={updateTextDescription}
        toolbar={{
          image: { uploadCallback: uploadCallback },
        }}
        localization={{ locale: 'ko' }}
        editorStyle={{
            height: "100%",
            width: "100%",
            //border: "3px solid lightgray",
            padding: "20px",
          }}
      />
    </WriteBox>
    <WriteBox>
    <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
    </WriteBox>
    </div>

  );
}