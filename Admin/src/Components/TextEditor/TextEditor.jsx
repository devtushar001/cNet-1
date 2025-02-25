import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        console.log(content);
    },[]);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || 'Start typings...'
    }),
        [placeholder]
    );

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => { }}
        />
    );
};

export default TextEditor;