import React, { useContext, useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { EscomContext } from "../../Context/escomContext";
import { toast } from "react-toastify";

const TextEditor = () => {
  const editor = useRef(null); // Fix: Define ref for JoditEditor
  const [value, setValue] = useState(""); // Fix: Correct state naming

  const { getValue, deleteContent, getFetchData, backend_url } = useContext(EscomContext);
  console.log(backend_url);

  // Function to save content to the database
  const saveToDatabase = async () => {
    try {
      const response = await fetch(`${backend_url}/api/text-edit/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: value }), // Fix: Use `value` correctly
      });

      const data = await response.json();
      toast.success(data.message); // Show success message
      getFetchData();
    } catch (error) {
      alert("Failed to save");
    }
  };

  return (
    <div className="text-editor-container" style={{ maxWidth: "95%", padding: "20px" }}>
      <JoditEditor
        ref={editor}
        value={value} // Fix: Use correct state variable
        tabIndex={1}
        onBlur={(newContent) => setValue(newContent)} // Fix: Update state correctly
        onChange={() => { }} // Prevent performance issues
      />
      <button onClick={saveToDatabase} style={{ marginTop: "10px", padding: "10px" }}>
        Save to Database
      </button>

      {/* Render each fetched content with a delete button */}
      {getValue.map((content, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
          <button onClick={() => deleteContent(content._id)}> Delete </button>
        </div>
      ))}
    </div>
  );
};

export default TextEditor;
