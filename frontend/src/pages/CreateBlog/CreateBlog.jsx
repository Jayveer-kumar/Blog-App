import "./CreateBlog.css";
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";

export default function CreateBlog() {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      tools: {
        header: { class: Header, inlineToolbar: true },
        paragraph: { class: Paragraph, inlineToolbar: true },
        image: {
          class: ImageTool,
          inlineToolbar: true,
          config: {
            uploader: {
              uploadByFile(file) {
                return new Promise((resolve) => {
                  const reader = new FileReader();
                  reader.onload = () => {
                    resolve({
                      success: 1,
                      file: { url: reader.result },
                    });
                  };
                  reader.readAsDataURL(file);
                });
              },
            },
          },
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
    if (editorRef.current) {
      const data = await editorRef.current.save();
      console.log("Blog Data:", data);
    }
  };

  return (
    <div className="createBlog-main-page">
      <div id="editorjs" style={{ background: "#fff", minHeight: "200px", padding: "10px" }}></div>
      <button id="saveBlogButton" onClick={handleSave}>Save</button>
    </div>
  );
}
