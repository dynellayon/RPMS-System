import React from 'react'

const FileItem = ({ file, deleteFile }) => {
    return (
        <>
            <li className='list-group-item'
                
                key={file.name}>
            
                {file.name}
             
                 
                    {file.isUploading && <i className="fas fa-bullhorn"
                        onClick={() => deleteFile(file.name)} />
                    }
                    {!file.isUploading &&
                       <i className="fas fa-trash" 
                            onClick={() => deleteFile(file.name)} />
                    }
                   
               
            </li>
        </>
    )
}

export default FileItem