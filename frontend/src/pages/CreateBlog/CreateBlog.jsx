import "./CreateBlog.css";
import React, { useEffect, useRef } from "react";

export default function CreateBlog() {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!window.EditorJS) return;

    const editor = new window.EditorJS({
      holder: "editorjs", 
      tools: {
        header: {
            class: window.Header,
            inlineToolbar:true,
        },
        paragraph: {
            class: window.Paragraph,
            inlineToolbar:true,
        },
        image: {
            class: window.ImageTool,
            inlineToolbar:true,
        },
      },
      onReady: () => {
        editorRef.current = editor;
      },
    });

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  const handleSave = async () => {
    // console.log("Window EditorJs", window.EditorJS);
    if (editorRef.current) {
      const data = await editorRef.current.save();
      console.log("Blog Data:", data);
    }
  };

  return (
    <div className="createBlog-main-page">
      {/* Yeh div ID zaroor match kare */}
      <div id="editorjs" style={{ background: "#fff", minHeight: "200px", padding: "10px" }}></div>
      <button id="saveBlogButton" onClick={handleSave}>Save </button>
    </div>
  );
}
