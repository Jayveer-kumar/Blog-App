import "./CreateBlog.css";
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";

// import here changeNavbarIconsColor
import {changeNavbarIconsColor}  from "../../Component/Navbar/Navbar";


export default function CreateBlog() {
  const editorRef = useRef(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [savedData, setSavedData] = useState(null);
  const [blogTitle, setBlogTitle] = useState("");

  useEffect(()=>{
    let theme = document.documentElement.getAttribute("data-theme");
    changeNavbarIconsColor(theme);
  },[])

  window.addEventListener("scroll",()=>{
    let theme = document.documentElement.getAttribute("data-theme");
    changeNavbarIconsColor(theme);
  })

  useEffect(() => {
    // Destroy existing editor if any
    if (editorRef.current) {
      editorRef.current.destroy();
    }

    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Start writing your blog content here...",
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            levels: [1, 2, 3, 4],
            defaultLevel: 2
          }
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        image: {
          class: ImageTool,
          inlineToolbar: true,
          config: {
            uploader: {
              uploadByFile(file) {
                console.log("Uploading file:", file.name);
                return new Promise((resolve, reject) => {
                  if (file.size > 5 * 1024 * 1024) { 
                    reject(new Error("File too large"));
                    return;
                  }

                  const reader = new FileReader();
                  reader.onload = () => {
                    resolve({
                      success: 1,
                      file: {
                        url: reader.result,
                        name: file.name,
                        size: file.size
                      },
                    });
                  };
                  reader.onerror = () => {
                    reject(new Error("Failed to read file"));
                  };
                  reader.readAsDataURL(file);
                });
              },
              uploadByUrl(url) {
                return Promise.resolve({
                  success: 1,
                  file: { url }
                });
              }
            },
          },
        },
      },
      onReady: () => {
        console.log("Editor.js is ready to work!");
        editorRef.current = editor;
        setIsEditorReady(true);
      },
      onChange: (api, event) => {
        console.log("Content changed:", event);
      }
    });

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
      setIsEditorReady(false);
    };
  }, []);

  const handleSave = async () => {
    if (!isEditorReady || !editorRef.current) {
      alert("Editor is not ready yet. Please wait...");
      return;
    }

    if (!blogTitle.trim()) {
      alert("Please enter a blog title");
      return;
    }

    try {
      console.log("Saving blog content...");
      const data = await editorRef.current.save();
      
      const blogData = {
        title: blogTitle.trim(),
        content: data,
        timestamp: new Date().toISOString()
      };

      console.log("Complete Blog Data:", blogData);
      console.log("Formatted Data:", JSON.stringify(blogData, null, 2));
      
      if (data.blocks && data.blocks.length > 0) {
        console.log(`Successfully saved blog with title: "${blogTitle}" and ${data.blocks.length} content blocks`);
        
        setSavedData(blogData);
        alert(`Blog "${blogTitle}" saved successfully!`);
        console.log("State Variable Blog Data : ",savedData);
        
        // Here you would send blogData to your backend
        // await saveBlogToDatabase(blogData);
        
      } else {
        alert("Please add some content before saving.");
      }
      
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Failed to save blog. Check console for details.");
    }
  };

  const handleClear = async () => {
    if (editorRef.current) {
      await editorRef.current.clear();
      setBlogTitle("");
      setSavedData(null);
      console.log("Editor and title cleared");
    }
  };

  const handleLoad = async () => {
    if (savedData && editorRef.current) {
      await editorRef.current.render(savedData.content);
      setBlogTitle(savedData.title);
      console.log("Data loaded back into editor");
    }
  };

  return (
    <div className="createBlog-main-page">
      <div className="editor-container">
        
        {/* Title Input */}
        <input
          type="text"
          className="blog-title-input"
          placeholder="Enter your blog title here..."
          value={blogTitle}
          name="Title"
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        
        {/* Editor */}
        <div 
          id="editorjs" 
          style={{ 
            opacity: isEditorReady ? 1 : 0.7,
            pointerEvents: isEditorReady ? "auto" : "none"
          }}
        ></div>
        
        {/* Control Buttons - Positioned at bottom right */}
        <div className="editor-controls">
          <button 
            onClick={handleClear}
            disabled={!isEditorReady}
            className="clear-btn"
            style={{
              cursor: isEditorReady ? "pointer" : "not-allowed",
              opacity: isEditorReady ? 1 : 0.5
            }}
          >
            Clear
          </button>
          
          <button 
            id="saveBlogButton" 
            onClick={handleSave}
            disabled={!isEditorReady}
            className="save-btn"
            style={{
              cursor: isEditorReady ? "pointer" : "not-allowed",
              opacity: isEditorReady ? 1 : 0.5
            }}
          >
            {isEditorReady ? "Publish Blog" : "Loading..."}
          </button>
          
          {savedData && (
            <button 
              onClick={handleLoad}
              disabled={!isEditorReady}
              className="load-btn"
              style={{
                cursor: isEditorReady ? "pointer" : "not-allowed",
                opacity: isEditorReady ? 1 : 0.5
              }}
            >
              Load Last Saved
            </button>
          )}
        </div>
        
        {/* Data Preview */}
        {savedData && (
          <div className="data-preview">
            <h3>Last Saved Blog Preview:</h3>
            <div className="preview-content">
              <h4>Title: {savedData.title}</h4>
              <p>Saved on: {new Date(savedData.timestamp).toLocaleString()}</p>
              <details>
                <summary>View Raw Data</summary>
                <pre>{JSON.stringify(savedData, null, 2)}</pre>
              </details>
            </div>
          </div>
        )}
      </div>
    </div>
  );

}

  // Change Navbar icons color when on CreateBlog route
  