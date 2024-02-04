// <path-to-your-build>/src/ckeditor.ts or file containing editor configuration if you are integrating an editor from source.

// The editor creator to use.
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const TextEditor = ({ setData }) => {
  const editorConfiguration = {
    // plugins: [...SpecialCharacters, SpecialCharactersEmoji],
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'heading',
        'fontFamily',
        'fontSize',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        '|',
        'bulletedList',
        'numberedList',
        'alignment',
        '|',
        'imageUpload',
        'blockQuote',
        // 'mediaEmbed',
        'link',
        'specialCharacters',
        // 'emoji',
      ],
    },
    language: 'ko',
    image: {
      toolbar: [
        'imageTextAlternative',
        'toggleImageCaption',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
      ],
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
    heading: {
      options: [
        {
          model: 'paragraph',
          view: 'p',
          title: '본문',
          class: 'ck-heading_paragraph',
        },
        {
          model: 'heading2',
          view: 'h2',
          title: '제목',
          class: 'ck-heading_heading2',
        },
        {
          model: 'heading3',
          view: 'h3',
          title: '부제목',
          class: 'ck-heading_heading3',
        },
        {
          model: 'heading4',
          view: 'h4',
          title: '소제목',
          class: 'ck-heading_heading4',
        },
      ],
    },
    placeholder: '이곳에 내용을 작성해 주세요',
  };

  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data=""
      onChange={(event, editor) => {
        setData(editor.getData()); // 에디터 작성 내용 저장
      }}
    />
  );
};

export default TextEditor;