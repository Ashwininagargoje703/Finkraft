import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const FileUploader = ({ onUpload }) => {
  const onDrop = useCallback(
    async (acceptedFiles) => {
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("file", file);
      });

      try {
        const response = await axios.post("YOUR_UPLOAD_ENDPOINT", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // Assuming the server responds with the uploaded file details
        onUpload(response.data);
      } catch (error) {
        console.error("Error uploading file: ", error);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag and drop files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileUploader;
