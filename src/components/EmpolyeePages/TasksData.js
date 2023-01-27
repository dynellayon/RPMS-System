import ViewProgress from "./ViewProgress";
import ViewTask from "./ViewTask";
export const columns = [
    {
      name: 'Name',
      selector: row => `${ row.task }`,
      sortable: true,
    },
    {
      name: 'Deadline',
      selector: row => `${ row.duedate }`,
      sortable: true,
    },
    {
      name: 'Phase',
      selector: row => `${ row.phaseid }`,
      sortable: true,
    },
    {
        name: 'status',
        sortable: true,
        cell: row =>
      `${row.status }`==="0"? (
            <span className="badge bg-danger" >No Progress</span>
        ):`${row.status }`==="2" ?(<span className="badge bg-primary" style={{ marginRight: "5px" }}>on-progress</span>):
        `${row.status }`==="3" ?( <span className="badge bg-success" style={{ marginRight: "5px" }}>Complete</span>):null
        
      
      },
    {
      name: "Actions",
      cell: row =>
      `${row.status }`==="0" && `${row.phaseid }`=== "1"? (
          <>
          <div class="btn-group dropleft">
  <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  actions
  </button>
  <div className="dropdown-menu">
<ViewProgress id={row.id}/>
    <a className="dropdown-item" href={`/EmployeeEval/${row.phaseid}/${row.id}`}>Start E-SAT</a>
    <ViewTask/>
  </div>
</div>



          </>
        ) : <ViewTask/>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    }
  
   
  ];