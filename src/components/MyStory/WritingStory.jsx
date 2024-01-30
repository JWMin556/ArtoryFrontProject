import React, { useState } from 'react'
import styled from 'styled-components'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const WriteBox = styled.div`
    width : 767px;
    height : 713px;
    border : 1px solid green;
`;
export default function WritingStory() {
    const[form,setForm] = useState();
    const onChangeContent = (data) =>{
        setForm({
            ...form,
            content:data
        })
    }
  return (
    <WriteBox>
          <CKEditor
                    editor={ ClassicEditor }
                    data="<p>전시를 기록하세요</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        //onChangeContent(data);
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
  )
}
