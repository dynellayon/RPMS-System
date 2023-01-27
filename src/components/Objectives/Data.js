export const columns = [
    {
      name: 'Name',
      selector: row => `${ row.name }`,
      sortable: true,
    },
    {
      name: 'kra',
      selector: row => `${ row.kraid }`,
      sortable: true,
    },
    {
      name: 'weight',
      selector: row => `${ row.weight }`,
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