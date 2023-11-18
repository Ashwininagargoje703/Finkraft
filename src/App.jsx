import React, { useState } from "react";
import FileUploader from "./Components/FileUplode";
import FileList from "./Components/Filelist";

const App = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUpload = (newFile) => {
    setUploadedFiles([...uploadedFiles, newFile]);
  };

  const handleDelete = (fileId) => {
    const updatedFiles = uploadedFiles.filter((file) => file.id !== fileId);
    setUploadedFiles(updatedFiles);
    // Call API or perform necessary action for file deletion
  };

  return (
    <div className="app">
      <h1>File Upload and Management</h1>
      <FileUploader onUpload={handleUpload} />
      <FileList files={uploadedFiles} onDelete={handleDelete} />
    </div>
  );
};

export default App;
