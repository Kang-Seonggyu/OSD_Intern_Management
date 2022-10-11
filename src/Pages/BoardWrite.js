import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Form } from "react-bootstrap";

// 유튜브 참고 : https://www.youtube.com/watch?v=K5oJvVf_eOA&list=PLrTFeWWAg1chZ4uUrDm8Q-kFjKt-hVEXE&index=10
// 에디터 참고 : https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/react.html

function BoardWrite () {
    return(
        <div className="boardWrite">
            <h2>글쓰기</h2>
            <Form.Control
                type="text"
                placeholder="글 제목"
            />
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"

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

        </div>
    );
}

export default BoardWrite;