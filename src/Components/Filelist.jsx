import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const FileList = ({ files, onDelete }) => {
  return (
    <div className="file-list">
      {files.map((file) => (
        <div key={file.id} className="file-item">
          <img src={file.thumbnailUrl} alt={file.name} className="thumbnail" />
          <p>{file.name}</p>
          <button onClick={() => onDelete(file.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FileList;
