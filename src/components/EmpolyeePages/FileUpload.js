import React from 'react'
import axios from 'axios';
export default function FileUpload
({files,setFiles, removeFile,taskid,check}) {
    const stylefile = {
        color:"transparent" ,
        width:100,
        height:100,
    
        
      };
      const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = true;
        setFiles([...files, file])

        // upload file
        const formData = new FormData();
        formData.append(
            "file",
            file,
            file.name
        )
        formData.append(
            "filename",
            file.name
        )
        formData.append(
            "taskid",
            taskid
        )
        formData.append(
            "check",
            check
        )
        axios.post('http://localhost:8000/api/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                // inform the user
                console.error(err)
                removeFile(file.name)
            });
    }
   
  return (
    <div className="d-flex">
  
        <div className='align' >
        <h5 className='text-muted'>Drop Files Here</h5>
        <input  type="file" className='file-input' style={stylefile}  onChange={uploadHandler}/>
        </div>
    
    </div>
    
  )
}
