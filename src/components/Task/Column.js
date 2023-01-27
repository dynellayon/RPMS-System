export const columns = [
  {
    name: 'Name',
    selector:row => `${ row.id }`,
    sortable: true,
  },
  {
    name: 'Phase',
    selector: row => `${ row.name }`,
    sortable: true,
  },
  {
    name: "Actions",
    button: true,
    cell: row =>
    `${row.id }` ? (
        <>
        
          <button className="btn-primary"
            
            style={{ marginRight: "5px" }}
          >
            Edit
          </button>
          <button className="btn-danger" >Delete</button>
        </>
      ) : null
  }

 
];