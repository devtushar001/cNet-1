import React, { useRef, useMemo, useContext } from 'react';
import JoditEditor from 'jodit-react';
import { TShakyaContext } from '../../Context/TShakyContext';

const TextEditor = ({ placeholder }) => {
    const editor = useRef(null);
    const { content, setContent } = useContext(TShakyaContext);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || 'Start typing...',
    }), [placeholder]);

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => {
                setContent && setContent(newContent);
            }}
            onChange={(newContent) => {
                setContent && setContent(newContent);
            }}
        />
    );
};

export default TextEditor;
