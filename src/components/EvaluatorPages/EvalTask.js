export const columns = [
    {
      name: 'Employee Name',
      selector: row => `${ row.name }`,
      sortable: true,
    },
    {
      name: 'task name',
      selector: row => `${ row.task }`,
      sortable: true,
    },
    {
      name: 'Evaluator',
      selector: row => `${ row.eval }`,
      sortable: true,
    },
    {
      name: 'Phase',
      selector: row => `${ row.phaseid }`,
      sortable: true,
    },
    {
        name: 'Deadline',
        selector: row => `${ row.duedate }`,
        sortable: true,
      },
      {
        name: 'status',
        sortable: true,
        cell: row =>
      `${row.status }`==="0" || `${row.status }`===null ? (
            <span className="badge bg-danger" >no progress</span>
        ):`${row.status }`==="" ?(<span className="badge bg-primary" style={{ marginRight: "5px" }}>no progress</span>):
        `${row.status }`==="3" ?( <span className="badge bg-success" style={{ marginRight: "5px" }}>Complete</span>):null
        
      
      },
      {
        name: "Actions",
        cell: row =>
        `${row.id }` && `${row.phaseid }`==="1" ? (
            <>
            <div class="btn-group dropleft">
    <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    actions
    </button>
    <div className="dropdown-menu">
  {`${row.positionid}`>=16?<a className="dropdown-item" href={`/BehaviorFeed/${row.positionid=2}/${row.id}/${ row.phaseid }`}>Start Feedback</a>:<a className="dropdown-item" href={`/BehaviorFeed/${row.positionid=1}/${row.id}/${ row.phaseid }`}>Start Feedback</a>
    }
      <a className="dropdown-item" href='#'>View more..</a>
  
    </div>
  </div>
  
  
  
            </>
          ) : null,
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
      }
    
  
   
  ];